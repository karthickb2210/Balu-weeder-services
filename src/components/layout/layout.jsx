import React  from 'react'
import { Route ,Routes} from 'react-router-dom';
import Productdetails from '../../Productspage/Productdetails';
import MainPage from '../../mainpage/MainPage'
import Sales from '../../Heropage/Sales';
import Services from '../../Heropage/Services';
import Support from '../../Heropage/Support';
import Booknow from '../Booknow';
import LoginPage from '../auths/LoginPage';
import RegisterPage from '../auths/RegisterPage';
import { Toaster } from 'react-hot-toast';
function Layout() {
 
  
  return (
    <div>
  <Toaster position='bottom-right' toastOptions={{duration:3000}} />
      <Routes>
      
      <Route path='/' element={<MainPage />}></Route>
        <Route path="/:id" element={<Productdetails />}></Route>
        <Route path='/sales' element={<Sales />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/support' element={<Support />}></Route>
        <Route path='/booknow' element={<Booknow />}></Route>
        <Route path='/login' element={<LoginPage />}> </Route>
        {/* <Route path='/register' element={<LoginPage />}> </Route> */}
        <Route path='/register' element={<RegisterPage />}></Route>
      </Routes>
   
      
    </div>
  )
}

export default Layout
