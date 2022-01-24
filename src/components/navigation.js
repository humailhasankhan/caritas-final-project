import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => (
  <nav role="navigation" aria-label="Main">
    <ul className="flex text-2xl">
      <li className="text-base md:text-2xl p-4 text-gray-600 rounded hover:text-white hover:bg-red-600">
        <Link to="/">Home</Link>
      </li>
      <li className="text-base md:text-2xl p-4 text-gray-600 rounded hover:text-white hover:bg-red-600">
        <Link to="/caseStudies/">Case Studies</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
