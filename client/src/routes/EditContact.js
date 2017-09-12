import React from 'react'
import { connect } from 'react-redux'

import ContactForm from '../Contacts/ContactForm'

import { getContact, updateContact, deleteContact } from '../store/contacts'

let EditContact = ({ history, ...props }) => (
  <ContactForm
    header="Update Contact"
    submitLabel="Update"
    onCancel={history.goBack}
    {...props}
  />
)

const mapStateToProps = (state, ownProps) => ({
  initialValues: getContact(
    state,
    ownProps.match.params.organisationId,
    ownProps.match.params.id,
  ),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: values => dispatch(updateContact(values, ownProps.history)),
  onDelete: () => {
    if (window.confirm('Are you sure')) {
      dispatch(
        deleteContact(
          ownProps.match.params.organisationId,
          ownProps.match.params.id,
          ownProps.history,
          ownProps.match.url.replace(/\/\d+\/edit/, ''),
        ),
      )
    }
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(EditContact)
