export const getValidationState = ({ touched, dirty, error, warning }) => {
  if (touched) {
    if (error) return 'error'
    if (warning) return 'warning'
    if (dirty) return 'success'
  }
}

export const getValidationHelp = ({ touched, dirty, error, warning }) => {
  if (touched) {
    if (error) return error
    if (warning) return warning
  }
}

export const isRequired = value =>
  value == null || value === '' ? 'Required' : undefined

export const isEmail = value =>
  value && !value.match(/.+@.+/) ? 'Invalid email' : undefined

export const isValidLength = (value, length) =>
  value && value.toString().length > length
    ? `Too long (${length} character limit)`
    : undefined
