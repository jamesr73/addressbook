import React from 'react'
import { FormGroup, ButtonGroup, Button } from 'react-bootstrap'

const DeleteButton = ({ onDelete }) => (
  <ButtonGroup>
    <Button type="button" bsStyle="danger" onClick={onDelete}>
      Delete
    </Button>
  </ButtonGroup>
)

const FormButtons = ({
  pristine,
  submitting,
  submitLabel,
  reset,
  onCancel,
  onDelete,
}) => (
  <FormGroup className="text-center">
    <ButtonGroup>
      <Button type="submit" bsStyle="primary" disabled={pristine || submitting}>
        {submitLabel}
      </Button>
      <Button type="reset" onClick={reset} disabled={pristine || submitting}>
        Reset
      </Button>
      <Button type="button" onClick={onCancel} disabled={submitting}>
        Cancel
      </Button>
    </ButtonGroup>
    {onDelete && (
      <span>
        &nbsp; <DeleteButton onDelete={onDelete} />
      </span>
    )}
  </FormGroup>
)

export default FormButtons
