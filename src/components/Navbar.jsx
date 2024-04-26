import { AiOutlineSearch } from "react-icons/ai";
import { RiAccountCircleFill, RiLoginCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import LoginPage from "./auths/LoginPage";
import { UserContext } from "./context/userContext";
import { useContext, useEffect, useState } from "react";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [log,setLog] = useState();
  useEffect(()=>{
    console.log(user)
    if(user){
      
      setLog(user)
    }
  },[user,log])

  // console.log(user)
  // console.log(setUser)

  return (
    <div
      className="max-w-[1640px] mx-auto flex justify-between items-center p-4"
      id="top"
    >
      {/* Left side */}
      <div className="flex items-center">
        {/* <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div> */}
        <div className=" flex flex-col">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 flex-auto">
            BALU WEEDER <span className="font-bold text-red-600">SALES</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-2xl px-2">
            GSTIN : 33DRAPR8739B1ZR
          </h2>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-4 w-full focus:outline-none"
          type="text"
          placeholder="Search services"
        />
      </div>

      {/* login button */}
      {!log ? (
        <Link to="/login" element={<LoginPage />}>
          <button
            id="log"
            className="bg-black text-white hidden md:flex items-center py-2 rounded-full"
          >
            {/* <RiAccountCircleFill size={20} className='mr-2'  />  */} Login
          </button>
        </Link>
      ) : (
        <>
          <span className=" text-lg">Welcome {user.name}</span>
          <button onClick={() =>{ 
              setUser((prev)=>null)
              setLog((prev)=>null)
          }}> Logout</button>
        </>
      )}
      {/* <button id='log' className='bg-black text-white hidden md:flex items-center py-2 rounded-full'  >
        <RiAccountCircleFill size={20} className='mr-2'  /> Register 
      </button> */}
    </div>
  );
};

export default Navbar;
