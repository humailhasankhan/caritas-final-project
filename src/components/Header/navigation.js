import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => (
  <nav role="navigation" aria-label="Main">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/caseStudies/">Case Studies</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
