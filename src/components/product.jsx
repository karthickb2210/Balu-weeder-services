import React, { useState } from 'react';
import { data } from '../data/data.js';

const Food = () => {
  const [foods, setFoods] = useState(data);

  //   Filter Type 
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12' id='product'>
      <h1 className='text-red-500 font-bold text-4xl text-center'>
        Products We Sell
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('weeder')}
              className='m-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
            >
              Weeder
            </button>
            <button
              onClick={() => filterType('sprayer')}
              className='m-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
            >
              Sprayer
            </button>
            <button
              onClick={() => filterType('engine')}
              className='m-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
            >
              Engines
            </button>
            <button
              onClick={() => filterType('garden')}
              className='m-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
            >
              Trimmers
            </button>
            <button
              onClick={() => filterType('spare')}
              className='m-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
            >
              Spares
            </button>
          </div>
        </div>

       
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[270px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-1.5 py-4'>
              <p className='font-bold'>{item.name}</p>
              {/* <p>
                <span className='bg-red-500 text-white p-1 text-0.5xl rounded-full'>
                  {item.price}
                </span>
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;