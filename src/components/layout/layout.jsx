import React from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Petrolweeder from '../../Productspage/petrolweeder'
import MainPage from '../../mainpage/MainPage'
function Layout() {
  return (
    <div>
  <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainPage />}></Route>
        <Route path='/aa' element={<Petrolweeder pname="petrol weeder" />}></Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default Layout
