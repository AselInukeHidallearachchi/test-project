import React from 'react'
import Navigation from '../Components/Navigation/Navigation.js'
import Footer from '../Components/Footer/Footer.jsx'
import RestaurantInfoBanner from '../Components/Restaurant/RestaurantInfoBanner.jsx'
import MenuList from '../Components/MenuList/MenuList.jsx'


function Home() {
  return (
    <>
      <Navigation/>
        <RestaurantInfoBanner />
        <MenuList/>
          {/* <p>Home</p> */}
      <Footer/>
    </>
  )
}

export default Home