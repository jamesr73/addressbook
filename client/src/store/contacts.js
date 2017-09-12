import api from '../api-client'

// Action Types
export const ADDING_CONTACT = 'addressbook/contacts/ADDING'
export const ADDED_CONTACT = 'addressbook/contacts/ADDED'
export const UPDATING_CONTACT = 'addressbook/contacts/UPDATING'
export const UPDATED_CONTACT = 'addressbook/contacts/UPDATED'
export const DELETING_CONTACT = 'addressbook/contacts/DELETING'
export const DELETED_CONTACT = 'addressbook/contacts/DELETED'

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case ADDED_CONTACT: {
      return state.concat(action.payload)
    }
    case UPDATED_CONTACT: {
      return state.map(contact => {
        // eslint-disable-next-line
        if (contact.id == action.payload.id) {
          return action.payload
        } else {
          return contact
        }
      })
    }
    case DELETED_CONTACT: {
      // eslint-disable-next-line
      return state.filter(contact => contact.id != action.payload.id)
    }
    default:
      return state
  }
}

// Action Creators
const addingContact = organisation => ({
  type: ADDING_CONTACT,
  payload: organisation,
})
const addedContact = organisation => ({
  type: ADDED_CONTACT,
  payload: organisation,
})
const updatingContact = organisation => ({
  type: UPDATING_CONTACT,
  payload: organisation,
})
const updatedContact = organisation => ({
  type: UPDATED_CONTACT,
  payload: organisation,
})
const deletingContact = (organisationId, id) => ({
  type: DELETING_CONTACT,
  payload: {
    organisation_id: organisationId,
    id,
  },
})
const deletedContact = (organisationId, id) => ({
  type: DELETED_CONTACT,
  payload: {
    organisation_id: organisationId,
    id,
  },
})

// Thunks
export const addContact = (contact, history, url) => dispatch => {
  dispatch(addingContact(contact))
  return api
    .addContact(contact)
    .then(json => dispatch(addedContact(json)))
    .then(() => history.push(url))
}

export const updateContact = (contact, history) => dispatch => {
  dispatch(updatingContact(contact))
  return api
    .updateContact(contact)
    .then(json => dispatch(updatedContact(json)))
    .then(() => history.goBack())
}

export const deleteContact = (organisationId, id, history, url) => dispatch => {
  dispatch(deletingContact(organisationId, id))
  return api
    .deleteContact(id)
    .then(() => dispatch(deletedContact(organisationId, id)))
    .then(() => history.push(url))
}

// Selectors
export const getContact = (state, organisationId, id) =>
  state.organisations
    // eslint-disable-next-line
    .find(organisation => organisation.id == organisationId)
    // eslint-disable-next-line
    .contacts.find(contact => contact.id == id)
