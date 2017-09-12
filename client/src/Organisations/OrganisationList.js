import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Panel, ListGroup } from 'react-bootstrap'

import Spinner from '../components/Spinner'

const renderNew = url => (
  <li className="list-group-item">
    <Link to={`${url}/new`}>Add New Organisation</Link>
  </li>
)

const renderItems = (organisations, url) =>
  organisations.map((organisation, index) => (
    <li key={index} className="list-group-item">
      <Link to={`${url}/${organisation.id}`}>{organisation.name}</Link>
    </li>
  ))

let OrganisationList = ({ isFetching, organisations, match: { url } }) => (
  <Panel>
    {isFetching ? (
      <Spinner />
    ) : (
      <ListGroup fill>
        {renderNew(url)}
        {renderItems(organisations, url)}
      </ListGroup>
    )}
  </Panel>
)

export default withRouter(OrganisationList)
