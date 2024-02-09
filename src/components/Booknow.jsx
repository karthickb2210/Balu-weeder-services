import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Form() {
  let navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    mail: '',
    dis: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://fetch-usereport.onrender.com/new', formData);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Error submitting form');
    }
    navigate("/")
  };

  return (
    <div className='w-full max-w-xs ml-60 my-48  '>
    <form className='bg-white shadow-md  border-black rounded max-w-2xl px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
      <label className='block text-gray-700 text-sm max-w-xl font-bold mb-2'>Name:</label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label className='block text-gray-700 text-sm font-bold mb-2'>Phone:</label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
       
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <label className='block text-gray-700 text-sm font-bold mb-2'>mail</label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        name="mail"
        value={formData.mail}
        onChange={handleChange}
      ></input>
      <label className='block text-gray-700 text-sm font-bold mb-2'>District:</label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type="dis"
        name="dis"
        value={formData.dis}
        onChange={handleChange}
      />
      <button className=' bg-red-600 my-10  text-black border-red '  type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Form;
