import React from 'react'
import './css/index.css'
function Sales() {
  return (
    <div className="wrap">
    <main className="posts">
      <h1 className="hh1"> Sales of our Company</h1>
      <a href="/" className="post">
        <div className="post-inner">
          <h2>Quality Assurance</h2>
          <p className="summary"> Our products are built to last, constructed from high-quality materials and backed by rigorous testing and quality assurance standards.</p>
        </div>
      </a>
      <a href="/" className="post cyan">
        <div className="post-inner">
          <h2>Innovation</h2>
       
          <p className="summary">We stay at the forefront of agricultural technology, continuously innovating and improving our products to meet the evolving needs of modern farmers.</p>
        </div>
      </a>
      <a href="/" className="post blue">
        <div className="post-inner">
          <h2>Expert Support</h2>
       
          <p className="summary">Our team of experts is dedicated to providing unparalleled customer support, from product selection to installation and beyond. We're here to ensure your success every step of the way.</p>
        </div>
      </a>
      <a href="/" className="post pink">
        <div className="post-inner">
          <h2>Sustainable Solutions</h2>
          <p className="summary">We are committed to sustainability and environmental responsibility. Our products are designed to minimize environmental impact while maximizing efficiency and productivity.</p>
        </div>
      </a>
      <a href="/" className="post blue2">
        <div className="post-inner">
          <h2>Transform Your Farming Experience Today!</h2>
          <p className="summary">Don't let weeds hold you back. Embrace the future of farming with our state-of-the-art agricultural weeders and equipment. Join the countless farmers worldwide who have unlocked new levels of productivity and profitability with our innovative solutions. Contact us now to learn more and take your farming operation to the next level!</p>
        </div>
      </a>
    </main>
  </div>
  )
}

export default Sales