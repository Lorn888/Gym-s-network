import React from 'react'

const FormField = () => {
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="name" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
  
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required />
  
      
      <input type="submit" value="Submit" className='font-inter font-medium bg-[#45718C] text-white px-4 py-2 rounded-md ml-4'/>
    </form>
  );
}


  

export default FormField