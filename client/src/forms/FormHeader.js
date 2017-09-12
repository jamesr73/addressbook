import React from 'react'
import { FormGroup, Col } from 'react-bootstrap'

const FormHeader = ({ header }) => (
  <FormGroup>
    <Col xsOffset={3} xs={9}>
      <h4>{header}</h4>
    </Col>
  </FormGroup>
)

export default FormHeader
