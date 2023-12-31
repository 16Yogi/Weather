import React from 'react'
import Weather from '../Components/Weather/Weather'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'

export default function Home() {
  return (
    <>
       <Header/>
       <Banner/>
       <Weather/>
       <Footer/>
    </>
  )
}
