import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import { FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {auth,provider} from "./config"
import {signInWithPopup} from "firebase/auth"
import { IconName } from "react-icons/ai";
const Navbar = () => {
const [nav, setNav] = useState(false)
const [value,setValue] = useState('')
const handleClick =()=>{
  let c = 0;
  signInWithPopup(auth,provider).then((data)=>{
    setValue(data.user.user)
    localStorage.setItem("email",data.user.email)
    const ele = document.getElementById("log");
    ele.innerHTML = `${data.user.displayName.toUpperCase()}`
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
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
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
      
      {/* Cart button */}
      <button id='log' className='bg-black text-white hidden md:flex items-center py-2 rounded-full' onClick={handleClick}>
        <BsFillCartFill size={20} className='mr-2' /> LOGIN
      </button>
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'
      onClick={logout} >
        <BsFillCartFill size={20} className='mr-2' /> LOGOUT
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          <span className='font-bold'>Services</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Spares</li>
                <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                {/* <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li> */}
                <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Top Products</li>
                {/* <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li> */}
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
