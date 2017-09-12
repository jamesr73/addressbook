from flask_restless import APIManager

from .model import Organisation, Contact


def init_api(app, db):
    manager = APIManager(app=app, flask_sqlalchemy_db=db)
    manager.create_api(
        Organisation,
        collection_name="organisations",
        methods=['GET', 'POST', 'PATCH', 'DELETE'],
        max_results_per_page=-1,
        results_per_page=-1)
    manager.create_api(
        Contact,
        collection_name="contacts",
        methods=['GET', 'POST', 'PATCH', 'DELETE'],
        max_results_per_page=-1,
        results_per_page=-1)
    return manager
