import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form } from 'react-bootstrap'

import FormHeader from '../forms/FormHeader'
import FieldInput from '../forms/FieldInput'
import FormButtons from '../forms/FormButtons'
import { isRequired, isEmail, isValidLength } from '../forms/validation'

let OrganisationForm = ({
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
    <Field
      name="name"
      component={FieldInput}
      id="name"
      label="Name"
      placeholder="Enter name..."
    />
    <Field
      name="street1"
      component={FieldInput}
      id="street1"
      label="Street"
      placeholder="Enter street..."
    />
    <Field
      name="street2"
      component={FieldInput}
      id="street2"
      label="Street"
      placeholder="Enter street..."
    />
    <Field
      name="city"
      component={FieldInput}
      id="city"
      label="City"
      placeholder="Enter city..."
    />
    <Field
      name="postcode"
      component={FieldInput}
      id="postcode"
      label="Postcode"
      placeholder="Enter postcode..."
    />
    <Field
      name="country"
      component={FieldInput}
      id="country"
      label="Country"
      placeholder="Enter country..."
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
  name: isRequired(values.name) || isValidLength(values.name, 80),
  street1: isValidLength(values.street1, 120),
  street2: isValidLength(values.street2, 120),
  city: isValidLength(values.city, 80),
  postcode: isValidLength(values.postcode, 10),
  country: isValidLength(values.country, 80),
  email: isEmail(values.email) || isValidLength(values.email, 80),
  phone: isValidLength(values.phone, 20),
})

OrganisationForm = reduxForm({ form: 'organisation', validate })(
  OrganisationForm,
)

export default OrganisationForm
