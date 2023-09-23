import React from "react";
import './css/foot.css'
function Foot(){

    return(
        <>
        <footer class="footer-distributed">
        <h1 className="fth">Balu weeder sales and services</h1>
        <div class="footer-left" id='footer'>
          <p class="footer-links">
            <a href="/" class="link-1">Home</a>
      
            <a href="/">Products</a>
      
            <a href="/">Pricing</a>
      
            <a href="/">About</a>
      
            <a href="/">Contact</a>
          </p>
      
          <p class="footer-company-name">Balu weeder sales and services Pvt Ltd © 2023</p>
        </div>
      
        <div class="footer-center">
      
          <div>
            <i class="fa fa-map-marker"></i>
            <p><span>R. Balu</span> Villupuram ,605602</p>
          </div>
      
          <div>
            <i class="fa fa-phone"></i>
            <p>+91-9994416433</p>
          </div>
      
          <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:mailtokarthick2002@gmail.com">Mail Us</a></p>
          </div>
      
        </div>
      
        <div class="footer-right">
      
          <p  className="footer-company-about">
            <span>About the company</span>
            We are in bussiness for about more than 10 years. We excel in customer satifaction by satisfying customers in a greater numbers all over Tamilnadu and Pondicherry
          </p>
    
      
        </div>
      
      </footer>
</>      
    );
}
export default Foot;