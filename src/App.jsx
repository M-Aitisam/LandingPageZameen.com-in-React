import React from 'react'
import Navbar from './components/Navbar.jsx'
import SubNavbar from './components/SubNavbar.jsx'
import BodySection from './components/BodySection.jsx'
import Cards from './components/Cards.jsx'
import Explore from './components/Explore.jsx'
import Footertop from './components/Footertop.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <SubNavbar/>
      <BodySection/>
      <Cards/>
      <Explore/>
      <Footertop/>
      <Footer />
    </div>
  )
}

export default App
