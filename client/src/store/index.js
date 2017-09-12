import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import isFetching from './is-fetching'
import organisations from './organisations'

export default combineReducers({
  isFetching,
  organisations,
  form,
})
