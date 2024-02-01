import React  from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Productdetails from '../../Productspage/Productdetails';
import MainPage from '../../mainpage/MainPage'
import Sales from '../../Heropage/Sales';
import Services from '../../Heropage/Services';
import Support from '../../Heropage/Support';
function Layout() {
 
  
  return (
    <div>
  <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainPage />}></Route>
        <Route path="/:id" element={<Productdetails />}></Route>
        <Route path='/sales' element={<Sales />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/support' element={<Support />}></Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default Layout
