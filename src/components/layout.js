import PropTypes from 'prop-types'
import React from 'react'
import Footer from './footer'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="relative max-w-5xl mr-2 left-1/2 -translate-x-1/2 md:mr-4">
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
