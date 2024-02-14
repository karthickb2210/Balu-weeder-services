import React, {useState} from 'react';
import {  AiOutlineSearch } from 'react-icons/ai';

import {auth,provider} from "./config"
import {signInWithPopup} from "firebase/auth"
import { RiAccountCircleFill ,RiLoginCircleLine} from "react-icons/ri";
const Navbar = () => {
const [value,setValue] = useState('')
const [loggout,setLoggout] = useState(false);
const handleClick =()=>{
  signInWithPopup(auth,provider).then((data)=>{
    setValue(data.user.user)
    localStorage.setItem("email",data.user.email)
    const ele = document.getElementById("log");
    ele.innerHTML = `${data.user.displayName.toUpperCase()}`
    setLoggout(true);
  })
  

}
const logout =()=>{
  localStorage.clear();
  window.location.reload();
}
  return (
    <div  className='max-w-[1640px] mx-auto flex justify-between items-center p-4' id='top'>
      {/* Left side */}
      <div className='flex items-center'>
        {/* <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div> */}
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 flex-auto'>
          BALU WEEDER <span className='font-bold text-red-600'>SALES</span>
          <h2 className='text-2xl sm:text-3xl lg:text-2xl px-0.5'>GSTIN : 33DRAPR8739B1ZR</h2>
        </h1>
        
      </div>

      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-4 w-full focus:outline-none'
          type='text'
          placeholder='Search services'
        />
      </div>
      
      {/* login button */}
      <button id='log' className='bg-black text-white hidden md:flex items-center py-2 rounded-full' onClick={handleClick}>
        <RiAccountCircleFill size={20} className='mr-2' /> LOGIN {value}
      </button>
 { loggout && <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'
  onClick={logout} >
    <RiLoginCircleLine size={20} className='mr-2' /> LOGOUT
  </button>}

    
      </div>
  );
};

export default Navbar;
