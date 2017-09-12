import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import reducer from './store'
import { loadOrganisations } from './store/organisations'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

// pre-load address book data to easily support any initial URL
store.dispatch(loadOrganisations())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
)
