import React from 'react'
import {
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  HelpBlock,
} from 'react-bootstrap'

import { getValidationState, getValidationHelp } from './validation'

const FieldInput = ({ id, label, input, meta, ...props }) => (
  <FormGroup controlId={id} validationState={getValidationState(meta)}>
    <Col componentClass={ControlLabel} xs={3}>
      {label}
    </Col>
    <Col xs={9}>
      <FormControl {...props} {...input} onChange={input.onChange} />
      <FormControl.Feedback />
      {getValidationHelp(meta) && (
        <HelpBlock>{getValidationHelp(meta)}</HelpBlock>
      )}
    </Col>
  </FormGroup>
)

export default FieldInput
