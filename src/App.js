import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Product from './components/product'
// import Category from './components/Category'
import Foot from './components/foot'

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Product />
        {/* <Category /> */}
        <Foot />
    </div>
  );
}

export default App;
