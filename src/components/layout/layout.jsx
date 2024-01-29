import React  from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Petrolweeder from '../../Productspage/petrolweeder'
import MainPage from '../../mainpage/MainPage'
import data from '../../data/data.js'
function Layout() {
 
  
  return (
    <div>
  <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainPage />}></Route>
        <Route path="/:id" element={<Petrolweeder />}></Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default Layout
