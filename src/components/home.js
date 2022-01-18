import React from 'react'
import { AboutUs } from './aboutUs'

import Container from './container'
import { Services } from './services'

const Home = () => (
  <Container>
    <div>
      <h1>This is the home page</h1>
      <AboutUs />
      <Services />
      
   
    </div>
  </Container>
)

export default Home
