import React  from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Productdetails from '../../Productspage/Productdetails';
import MainPage from '../../mainpage/MainPage'
function Layout() {
 
  
  return (
    <div>
  <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainPage />}></Route>
        <Route path="/:id" element={<Productdetails />}></Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default Layout
