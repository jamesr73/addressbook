import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { connect } from 'react-redux'

import OrganisationList from '../Organisations/OrganisationList'

import { getIsFetching } from '../store/is-fetching'
import { getOrganisations } from '../store/organisations'

let Organisations = ({ isFetching, organisations }) => (
  <div>
    <Breadcrumb>
      <Breadcrumb.Item active>Organisations</Breadcrumb.Item>
    </Breadcrumb>
    <OrganisationList isFetching={isFetching} organisations={organisations} />
  </div>
)

const mapStateToProps = state => ({
  organisations: getOrganisations(state),
  isFetching: getIsFetching(state),
})

export default connect(mapStateToProps)(Organisations)
