import React from 'react'
import { Link } from 'react-router-dom'

const displayName = contact =>
  `${contact.title || ''} ${contact.first_name || ''} ${contact.last_name ||
    ''}`

export default ({ contact, to }) => (
  <address>
    {to ? (
      <Link to={to}>{displayName(contact)}</Link>
    ) : (
      <strong>{displayName(contact)}</strong>
    )}
    <br />
    {contact.role}
    {contact.role && <br />}
    {contact.email}
    {contact.email && <br />}
    {contact.phone}
    {contact.phone && <br />}
    {contact.mobile}{' '}
  </address>
)
