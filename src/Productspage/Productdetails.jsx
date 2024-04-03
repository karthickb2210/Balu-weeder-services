import React, { useState,useEffect } from 'react'

import { useParams } from 'react-router-dom';
import Spinner1 from '../Spinner/Spinner1';
import { Link } from 'react-router-dom';
function Productdetails() {
    const  params  = useParams();
    let dat =[];
    const [val,setVal] = useState(dat);
    const [ load,setLoad] = useState(false);
useEffect(()=>{
  dataa();
  },[])
async function dataa(){
    const res = await fetch('https://nice-red-barracuda-gown.cyclic.app')
    const ans = await res.json();
    setVal(ans);
    setLoad(true);
    return ans;
  }
  return (
   <>

   {!load ? <Spinner1 /> : 
   <div className="bg-gray-100 dark:bg-gray-800 py-8">
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex flex-col md:flex-row -mx-4">
           <div className="md:flex-1 px-4">
               <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                   <img className="w-full h-full object-cover" src={val[params.id-1].image} alt="Product " />
               </div>
               <div className="flex -mx-2 mb-4">
                   <div className="w-1/2 px-2">

                    <Link to={`/booknow`}>
                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Book now</button>

                    </Link>
                   </div>
                 
               </div>
           </div>
           <div className="md:flex-1 px-4">
               <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{val[params.id-1].name}</h2>
               {/* <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                   {val[params.id-1].des}
               </p> */}
               <div className="flex mb-4">
                   <div className="mr-4">
                       <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                       <span className="text-gray-600 dark:text-gray-300">{val[params.id-1].price}</span>
                   </div>
                   <div>
                       <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                       <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                   </div>
               </div>
            
               
               <div>
                   <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                   <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                   {val[params.id-1].des}
                   </p>
               </div>
           </div>
       </div>
   </div>
</div>
   }
    


   </>
  )
}

export default Productdetails
