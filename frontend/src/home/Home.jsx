import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

function Home() {
  return (
  <>
      <Navbar/>
    <Banner/> 
    <Freebook/>
    {/* <Cards/> */}
    <Footer/>
    
    </>
    
  )
}

export default Home


