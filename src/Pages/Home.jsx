import React from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer/Footer.jsx'
import RestaurantInfoBanner from '../Components/Restaurant/RestaurantInfoBanner.jsx'


function Home() {
  return (
    <>
      <Navigation/>
        <RestaurantInfoBanner />
          <h1>Home</h1>
      <Footer/>
    </>
  )
}

export default Home