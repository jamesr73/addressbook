import React from 'react'
import { connect } from 'react-redux'

import OrganisationForm from '../Organisations/OrganisationForm'

import { addOrganisation } from '../store/organisations'

let NewOrganisation = ({ history, ...props }) => (
  <OrganisationForm
    header="New Ogranisation"
    submitLabel="Add"
    onCancel={history.goBack}
    {...props}
  />
)

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: values =>
    dispatch(addOrganisation(values, ownProps.history, '/organisations')),
})

export default connect(null, mapDispatchToProps)(NewOrganisation)
