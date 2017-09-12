import React from 'react'
import { Glyphicon } from 'react-bootstrap'

import './Spinner.css'

export default () => (
  <div className="spinner">
    <Glyphicon glyph="refresh" className="animate" />
  </div>
)
