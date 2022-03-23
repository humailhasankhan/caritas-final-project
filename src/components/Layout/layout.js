import PropTypes from 'prop-types'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Seo from '../SEO'

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Header />
      <main className="flex flex-col m-auto justify-center items-stretch max-w-5xl mt-10 mb-10">
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
