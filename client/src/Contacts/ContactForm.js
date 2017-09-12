import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form } from 'react-bootstrap'

import FormHeader from '../forms/FormHeader'
import FieldInput from '../forms/FieldInput'
import FormButtons from '../forms/FormButtons'
import { isRequired, isEmail, isValidLength } from '../forms/validation'

let ContactForm = ({
  header,
  submitLabel,
  handleSubmit,
  onCancel,
  onDelete,
  reset,
  valid,
  pristine,
  submitting,
}) => (
  <Form horizontal onSubmit={handleSubmit}>
    <FormHeader header={header} />
    <Field name="organisation_id" component="input" type="hidden" />
    <Field
      name="title"
      component={FieldInput}
      id="title"
      label="Title"
      placeholder="Enter title..."
    />
    <Field
      name="first_name"
      component={FieldInput}
      id="first_name"
      label="First Name"
      placeholder="Enter first_name..."
    />
    <Field
      name="last_name"
      component={FieldInput}
      id="last_name"
      label="Last Name"
      placeholder="Enter last_name..."
    />
    <Field
      name="role"
      component={FieldInput}
      id="role"
      label="Role"
      placeholder="Enter role..."
    />
    <Field
      name="email"
      component={FieldInput}
      id="email"
      label="Email"
      placeholder="Enter email..."
    />
    <Field
      name="phone"
      component={FieldInput}
      id="phone"
      label="Phone"
      placeholder="Enter phone..."
    />
    <Field
      name="mobile"
      component={FieldInput}
      id="mobile"
      label="Mobile"
      placeholder="Enter mobile..."
    />
    <FormButtons
      submitLabel={submitLabel}
      reset={reset}
      onCancel={onCancel}
      onDelete={onDelete}
      pristine={pristine}
      submitting={submitting}
    />
  </Form>
)

const validate = values => ({
  title: isValidLength(values.title, 10),
  first_name:
    isRequired(values.first_name) || isValidLength(values.first_name, 80),
  last_name: isValidLength(values.last_name, 80),
  role: isValidLength(values.role, 80),
  email: isEmail(values.email) || isValidLength(values.email, 80),
  phone: isValidLength(values.phone, 20),
  mobile: isValidLength(values.mobile, 20),
})

ContactForm = reduxForm({ form: 'contact', validate })(ContactForm)

export default ContactForm
