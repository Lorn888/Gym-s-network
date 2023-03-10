import React, { useState, useEffect } from 'react'
import { Card, FormField } from '../components'
 
const Login = () => {
const [Card, setCard] = useState(true)    
const [Field, setField] = useState(false)
return (
  <section className='max-w-7xl mx-auto'>
    <div>
      <h1 className='font-extrabold text-[#222328] text-[32px]'> Sign up form</h1>
    </div>
  </section>
)
}

export default Login