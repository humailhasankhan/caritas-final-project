import React from 'react'
import { Link } from 'gatsby'
import logo from '../../assets/Caritas-logo.png'

const Heading = () => (
  <div>
    <Link to="/">
      <img src={logo} className='w-20  md:w-30 lg:w-48 xlg:w-55 '></img>
    </Link>
  </div>
)

export default Heading
