import json
import pytest

from app import create_app
from app.model import db

ORGANISATIONS = '/api/organisations'
CONTACTS = '/api/contacts'

GET_HEADERS = {'Accept': 'application/json'}
SEND_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}


@pytest.fixture
def client():
    app = create_app('test')
    test_client = app.test_client()
    with app.app_context():
        db.create_all()
    yield test_client


def api_get(client, endpoint):
    return parse(client.get(endpoint, headers=GET_HEADERS))


def api_delete(client, endpoint):
    return parse(client.delete(endpoint, headers=GET_HEADERS))


def api_post(client, endpoint, data):
    return parse(
        client.post(endpoint, data=json.dumps(data), headers=SEND_HEADERS))


def api_patch(client, endpoint, data):
    return parse(
        client.patch(endpoint, data=json.dumps(data), headers=SEND_HEADERS))


def parse(response):
    data = response.get_data()
    if data:
        data = json.loads(response.get_data())
    return (response.status_code, data)


def api_add(client, endpoint, data):
    status_code, data = api_post(client, endpoint, data)
    return data['id']


def seed_organisation(client):
    return api_add(client, ORGANISATIONS, {'name': 'Test Organisation'})


def seed_contact(client, organisation_id):
    return api_add(client, CONTACTS, {
        'first_name': 'James',
        'last_name': 'Robertson',
        'organisation': {
            'id': str(organisation_id)
        }
    })


def test_empty_db(client):
    status_code, data = api_get(client, ORGANISATIONS)
    assert status_code == 200
    assert data['num_results'] == 0
    status_code, data = api_get(client, CONTACTS)
    assert status_code == 200
    assert data['num_results'] == 0


def test_add_organisation(client):
    status_code, data = api_post(client, ORGANISATIONS,
                                 {'name': 'Test Organisation'})
    assert status_code == 201
    assert data['name'] == 'Test Organisation'
    assert data['id'] >= 1


def test_delete_organisation(client):
    id = seed_organisation(client)
    status_code, data = api_delete(client, '%s/%s' % (ORGANISATIONS, id))
    assert status_code == 204
    status_code, data = api_get(client, ORGANISATIONS)
    assert status_code == 200
    assert data['num_results'] == 0


def test_update_organisation(client):
    id = seed_organisation(client)
    status_code, data = api_patch(client, '%s/%s' % (ORGANISATIONS, id), {
        'name': 'Test Organisation',
        'email': 'info@testorganisation.com'
    })
    assert status_code == 200
    assert data['email'] == 'info@testorganisation.com'


def test_get_organisation_contacts(client):
    organisation_id = seed_organisation(client)
    contact_id = seed_contact(client, organisation_id)
    status_code, data = api_get(client, '%s/%s/contacts' % (ORGANISATIONS,
                                                            organisation_id))
    assert status_code == 200
    assert data['objects'][0]['first_name'] == 'James'


def test_add_contact(client):
    id = seed_organisation(client)
    status_code, data = api_post(client, CONTACTS, {
        'first_name': 'James',
        'organisation': {
            'id': str(id)
        }
    })
    assert status_code == 201
    assert data['first_name'] == 'James'
    assert data['last_name'] is None


def test_cascade_delete(client):
    organisation_id = seed_organisation(client)
    contact_id = seed_contact(client, organisation_id)
    api_delete(client, '%s/%s' % (ORGANISATIONS, organisation_id))
    status_code, data = api_get(client, '%s/%s' % (ORGANISATIONS,
                                                   organisation_id))
    assert status_code == 404
    status_code, data = api_get(client, '%s/%s' % (CONTACTS, contact_id))
    assert status_code == 404
