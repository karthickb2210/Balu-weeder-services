import React, { useState,useEffect } from 'react'
import Foot from '../components/foot'
import { useParams } from 'react-router-dom';
import Spinner1 from '../Spinner/Spinner1';

function Productdetails() {
    const  params  = useParams();
    let dat =[];
    const [val,setVal] = useState(dat);
    const [ load,setLoad] = useState(false);
useEffect(()=>{
  dataa();
  },[])
async function dataa(){
    const res = await fetch('https://balu-weeder-services.onrender.com')
    const ans = await res.json();
    setVal(ans);
    setLoad(true);
    return ans;
  }
  return (
   <>

   {!load ? <Spinner1 /> : 
   <div class="bg-gray-100 dark:bg-gray-800 py-8">
   <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       <div class="flex flex-col md:flex-row -mx-4">
           <div class="md:flex-1 px-4">
               <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                   <img class="w-full h-full object-cover" src={val[params.id-1].image} alt="Product " />
               </div>
               <div class="flex -mx-2 mb-4">
                   <div class="w-1/2 px-2">
                       <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                   </div>
                 
               </div>
           </div>
           <div class="md:flex-1 px-4">
               <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{val[params.id-1].name}</h2>
               {/* <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                   {val[params.id-1].des}
               </p> */}
               <div class="flex mb-4">
                   <div class="mr-4">
                       <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                       <span class="text-gray-600 dark:text-gray-300">{val[params.id-1].price}</span>
                   </div>
                   <div>
                       <span class="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                       <span class="text-gray-600 dark:text-gray-300">In Stock</span>
                   </div>
               </div>
            
               
               <div>
                   <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                   <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                   {val[params.id-1].des}
                   </p>
               </div>
           </div>
       </div>
   </div>
</div>
   }
    
<Foot />

   </>
  )
}

export default Productdetails
