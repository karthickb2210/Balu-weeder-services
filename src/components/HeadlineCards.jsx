import React from 'react';
import Sale from './img/sales.jpg'
import Services from './img/services.jpg'
import support from './img/support.jpg'
import { Link } from 'react-router-dom';
import Sales from '../Heropage/Sales';
import Support from '../Heropage/Support';
const HeadlineCards = () => {
  return (
    <div className='max-w-[1780px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-2xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Sales</p>
          <p className='px-2'> </p>
         <Link to="/sales" element={<Sales />}>
         <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Explore</button>
         </Link> 
        </div>
        <img
        className='max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl'
          src={Sale}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-2xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Services</p>
          <p className='px-2'></p>
          <Link to='/services' element={<Services />}><button className='border-white bg-white text-black mx-2 absolute bottom-4'>Explore</button></Link>
          
        </div>
        <img
        className='max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl'
          src={Services}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-2xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Support</p>
          <p className='px-2'></p>
          <Link to='/support' element={<Support />}>
          
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Explore</button>
          </Link>
        </div>
        <img
        className='max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl'
          src={support}
          alt='/'
        />
      </div>
    </div>
  );
};


export default HeadlineCards;
