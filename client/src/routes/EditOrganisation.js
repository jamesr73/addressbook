import React from 'react'
import { connect } from 'react-redux'

import OrganisationForm from '../Organisations/OrganisationForm'

import {
  getOrganisation,
  updateOrganisation,
  deleteOrganisation,
} from '../store/organisations'

let EditOrganisation = ({ history, ...props }) => (
  <div>
    <OrganisationForm
      header="Update Ogranisation"
      submitLabel="Update"
      onCancel={history.goBack}
      {...props}
    />
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  initialValues: getOrganisation(state, ownProps.match.params.id),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: values => dispatch(updateOrganisation(values, ownProps.history)),
  onDelete: () => {
    if (
      window.confirm(
        'Are you sure, all associated contacts will also be deleted',
      )
    ) {
      dispatch(
        deleteOrganisation(
          ownProps.match.params.id,
          ownProps.history,
          '/organisations',
        ),
      )
    }
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(EditOrganisation)
