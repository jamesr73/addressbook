import api from '../api-client'

import { ADDED_CONTACT, UPDATED_CONTACT, DELETED_CONTACT } from './contacts'
import contacts from './contacts'

// Action Types
export const REQUESTING_ORGANISATIONS = 'addressbook/organisations/REQUESTING'
export const RECEIVED_ORGANISATIONS = 'addressbook/organisations/RECEIVED'
export const ADDING_ORGANISATION = 'addressbook/organisations/ADDING'
export const ADDED_ORGANISATION = 'addressbook/organisations/ADDED'
export const UPDATING_ORGANISATION = 'addressbook/organisations/UPDATING'
export const UPDATED_ORGANISATION = 'addressbook/organisations/UPDATED'
export const DELETING_ORGANISATION = 'addressbook/organisations/DELETING'
export const DELETED_ORGANISATION = 'addressbook/organisations/DELETED'

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case RECEIVED_ORGANISATIONS: {
      return action.payload
    }
    case ADDED_ORGANISATION: {
      return state.concat(action.payload)
    }
    case UPDATED_ORGANISATION: {
      return state.map(organisation => {
        if (organisation.id === action.payload.id) {
          return action.payload
        } else {
          return organisation
        }
      })
    }
    case DELETED_ORGANISATION: {
      // eslint-disable-next-line
      return state.filter(organisation => organisation.id != action.payload)
    }
    case ADDED_CONTACT:
    case UPDATED_CONTACT:
    case DELETED_CONTACT: {
      return state.map(organisation => {
        // eslint-disable-next-line
        if (organisation.id == action.payload.organisation_id) {
          return {
            ...organisation,
            contacts: contacts(organisation.contacts, action),
          }
        } else {
          return organisation
        }
      })
    }
    default:
      return state
  }
}

// Action Creators
const requestingOrganisations = () => ({
  type: REQUESTING_ORGANISATIONS,
})
const recievedOrganisations = organisations => ({
  type: RECEIVED_ORGANISATIONS,
  payload: organisations,
})
const addingOrganisation = organisation => ({
  type: ADDING_ORGANISATION,
  payload: organisation,
})
const addedOrganisation = organisation => ({
  type: ADDED_ORGANISATION,
  payload: organisation,
})
const updatingOrganisation = organisation => ({
  type: UPDATING_ORGANISATION,
  payload: organisation,
})
const updatedOrganisation = organisation => ({
  type: UPDATED_ORGANISATION,
  payload: organisation,
})
const deletingOrganisation = id => ({
  type: DELETING_ORGANISATION,
  payload: id,
})
const deletedOrganisation = id => ({
  type: DELETED_ORGANISATION,
  payload: id,
})

// Thunks
export const loadOrganisations = () => dispatch => {
  dispatch(requestingOrganisations())
  api
    .getOrganisations()
    .then(json => dispatch(recievedOrganisations(json.objects)))
}

export const addOrganisation = (organisation, history, url) => dispatch => {
  dispatch(addingOrganisation(organisation))
  return api.addOrganisation(organisation).then(json => {
    dispatch(addedOrganisation(json))
    history.push(`${url}/${json.id}`)
  })
}

export const updateOrganisation = (organisation, history) => dispatch => {
  dispatch(updatingOrganisation(organisation))
  return api
    .updateOrganisation(organisation)
    .then(json => dispatch(updatedOrganisation(json)))
    .then(() => history.goBack())
}

export const deleteOrganisation = (id, history, url) => dispatch => {
  dispatch(deletingOrganisation(id))
  return api
    .deleteOrganisation(id)
    .then(() => dispatch(deletedOrganisation(id)))
    .then(() => history.push(url))
}

// Selectors
export const getOrganisations = state => state.organisations
export const getOrganisation = (state, id) =>
  // eslint-disable-next-line
  state.organisations.find(organisation => organisation.id == id)
