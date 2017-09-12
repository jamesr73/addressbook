import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Breadcrumb, Panel } from 'react-bootstrap'
import { connect } from 'react-redux'

import Spinner from '../components/Spinner'
import OrganisationInfo from '../Organisations/OrganisationInfo'
import ContactList from '../Contacts/ContactList'
import { getIsFetching } from '../store/is-fetching'
import { getOrganisation } from '../store/organisations'

class Organisation extends React.Component {
  render() {
    const { isFetching, organisation, match: { url } } = this.props
    if (!isFetching && !organisation) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item active>
            <Link to="/organisations">Organisations</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            {isFetching ? 'Loading...' : organisation.name}
          </Breadcrumb.Item>
        </Breadcrumb>
        <Panel>
          {isFetching && <Spinner />}
          {isFetching || (
            <OrganisationInfo organisation={organisation} to={`${url}/edit`} />
          )}
        </Panel>
        {isFetching || <ContactList contacts={organisation.contacts} />}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  organisation: getOrganisation(state, ownProps.match.params.id),
  isFetching: getIsFetching(state),
})

export default connect(mapStateToProps)(Organisation)
