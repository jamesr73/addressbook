import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Panel, ListGroup } from 'react-bootstrap'

import Spinner from '../components/Spinner'
import ContactInfo from './ContactInfo'

const renderNew = url => (
  <li className="list-group-item">
    <Link to={`${url}/contacts/new`}>Add New Contact</Link>
  </li>
)

const renderItems = (contacts, url) =>
  contacts.map((contact, index) => (
    <li key={index} className="list-group-item">
      <ContactInfo
        contact={contact}
        to={`${url}/contacts/${contact.id}/edit`}
      />{' '}
    </li>
  ))

let ContactList = ({ isFetching, contacts, match: { url } }) => (
  <Panel>
    {isFetching ? (
      <Spinner />
    ) : (
      <ListGroup fill>
        {renderNew(url)}
        {renderItems(contacts, url)}
      </ListGroup>
    )}
  </Panel>
)

export default withRouter(ContactList)
