import React from 'react'
import Heading from './heading'
import Navigation from './navigation'

const Header = () => (
  <header className="flex flex-row items-center w-full px-6 md:flex-row md:items-end md:place-content-between">
    <Heading />
    <Navigation />
  </header>
)

export default Header
