import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast'
import axios from 'axios';
const RegisterPage = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate()

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
async function registerUser(e){
    e.preventDefault()
        console.log(data);
        const {name , email,password} = data
        try {
            const { data} = await axios.post('http://localhost:8000/register',{
                name,email,password
            })
            if(data.error){
                toast.error(data.error)
            }else{
                setData({})
                toast.success("Login success full welcome")
            }
        } catch (error) {
            console.log(error)
        }
       navigate('/')
 }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement login logic here (e.g., API call, validation)
    console.log('Login form submitted:', data);

    // Reset form after successful login (optional)
    setData({ name: '', email: '', password: '' });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="w-full max-w-md px-8 py-6 bg-white rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="text-gray-700 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            value={data.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            value={data.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="password" className="text-gray-700 mb-1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            value={data.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-end items-center mb-4">
          
          <Link  to='login'>
          <a href="#" className="text-green-500 hover:text-green-700">Already a User?</a>
          </Link>
        </div>
        <button
          type="submit" onClick={registerUser}
          className="w-full py-2 bg-green-500 hover:bg-green-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
