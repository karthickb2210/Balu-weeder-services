import React from 'react'
const Hero = () => {
  return ( 
    <div className='flex items-center justify-center w-full'>
    <div className=' p-4  img' >
        
        
            {/* Overlay */}
            <div className='w-full h-full text-gray-200 max-h-[500px] flex flex-col  justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>One <span className='text-red-600'>Stop</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '> <span className='text-red-600'>Agricultural</span> Solutions</h1>
            </div>
            
     
    </div>
    </div>
  )
}

export default Hero