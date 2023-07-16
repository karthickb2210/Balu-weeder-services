import React from 'react';
import Sales from './img/sales.png'
import Services from './img/services.png'
import support from './img/support.png'
const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Sales</p>
          <p className='px-2'></p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Explore</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Sales}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Services</p>
          <p className='px-2'></p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Explore</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Services}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Support</p>
          <p className='px-2'></p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Explore</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={support}
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
