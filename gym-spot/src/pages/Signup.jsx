import React, { useState, useEffect } from 'react'
import { Card, FormField } from '../components'
 
const Login = () => {
const [Card, setCard] = useState(true)    
const [Field, setField] = useState(false)
return (
  <section className='max-w-7xl mx-auto'>
    <div>
      <h1 className='font-extrabold text-[#222328] text-[32px]'> Sign up form</h1>
      <p className='mt-2 text-[#666e75] text-[16px] max-w[500px] '>Please sign up browsky</p>
    </div>

    <div className='mt-16'>
    <form>
      
      <input placeholder='Name' type="name" id="name" name="name" required />

      <input placeholder= "Email"type="email" id="email" name="email" required />
  
      <input placeholder= "Password" type="password" id="password" name="password" required />
  
      
      <input type="submit" value="Submit" className='font-inter font-medium bg-[#45718C] text-white px-4 py-2 rounded-md ml-4'/>
    </form>

    </div>
  </section>
)
}

export default Login