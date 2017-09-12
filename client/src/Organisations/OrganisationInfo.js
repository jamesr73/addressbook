import React from 'react'
import { Link } from 'react-router-dom'

export default ({ organisation, to }) => (
  <address>
    {to ? (
      <Link to={to}>{organisation.name}</Link>
    ) : (
      <strong>{organisation.name}</strong>
    )}
    <br />
    {organisation.street1}
    {organisation.street1 && <br />}
    {organisation.street2}
    {organisation.street2 && <br />}
    {organisation.city}
    {organisation.city && <br />}
    {organisation.postcode}
    {organisation.postcode && <br />}
    {organisation.country}
    {organisation.country && <br />}
    {organisation.email}
    {organisation.email && <br />}
    {organisation.phone}
  </address>
)
