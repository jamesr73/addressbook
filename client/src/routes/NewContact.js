import React from 'react'
import { connect } from 'react-redux'

import ContactForm from '../Contacts/ContactForm'

import { addContact } from '../store/contacts'

let NewContact = ({ history, ...props }) => (
  <ContactForm
    header="New Contact"
    submitLabel="Add"
    onCancel={history.goBack}
    {...props}
  />
)

const mapStateToProps = (state, ownProps) => ({
  initialValues: {
    organisation_id: ownProps.match.params.organisationId,
  },
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: values =>
    dispatch(
      addContact(
        values,
        ownProps.history,
        ownProps.match.url.replace('/new', ''),
      ),
    ),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewContact)
