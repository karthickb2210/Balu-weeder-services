import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HeadlineCards from '../components/HeadlineCards'
import Product from '../components/product'
import Foot from '../components/foot'

function MainPage() {
  return (
    <>
         <Navbar />
        <Hero />
        <HeadlineCards />
        <Product />
        <Foot />
    </>
  )
}

export default MainPage
