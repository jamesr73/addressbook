import {
  REQUESTING_ORGANISATIONS,
  RECEIVED_ORGANISATIONS,
  ADDING_ORGANISATION,
  ADDED_ORGANISATION,
  UPDATING_ORGANISATION,
  UPDATED_ORGANISATION,
  DELETING_ORGANISATION,
  DELETED_ORGANISATION,
} from './organisations'
import {
  ADDING_CONTACT,
  ADDED_CONTACT,
  UPDATING_CONTACT,
  UPDATED_CONTACT,
  DELETING_CONTACT,
  DELETED_CONTACT,
} from './contacts'

export default (state = false, action) => {
  switch (action.type) {
    case REQUESTING_ORGANISATIONS:
    case ADDING_ORGANISATION:
    case UPDATING_ORGANISATION:
    case DELETING_ORGANISATION:
    case ADDING_CONTACT:
    case UPDATING_CONTACT:
    case DELETING_CONTACT: {
      return true
    }
    case RECEIVED_ORGANISATIONS:
    case ADDED_ORGANISATION:
    case UPDATED_ORGANISATION:
    case DELETED_ORGANISATION:
    case ADDED_CONTACT:
    case UPDATED_CONTACT:
    case DELETED_CONTACT: {
      return false
    }
    default:
      return state
  }
}

export const getIsFetching = state => state.isFetching
