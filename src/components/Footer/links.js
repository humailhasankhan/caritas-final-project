import React from 'react'
import { Link } from 'gatsby'
import { FaEnvelope } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'

const Links = () => {
  return (
    <div className="flex pr-4 space-x-8 mb-4">
      <p>
        <a
          href="mailto:refugeeeduction@caritassalford.org.uk"
          aria-label="Link to email"
        >
          <FaEnvelope className="h-6 w-6 hover:fill-gray-900" />
        </a>
      </p>
      <Link
        to="https://twitter.com/CaritasSalford"
        target="_blank"
        aria-label="Twitter link"
      >
        <FaTwitterSquare className="h-6 w-6 hover:fill-gray-900" />
      </Link>
      <Link
        to="https://www.facebook.com/CaritasSalford/"
        target="_blank"
        aria-label="Facebook link"
      >
        <FaFacebookSquare className="h-6 w-6 hover:fill-gray-900" />
      </Link>
    </div>
  )
}

export default Links
