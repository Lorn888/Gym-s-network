import React from 'react'

const Login = () => {
  return (
    <section className='max-w-7xl mx-auto'>
    <div>
      <h1 className='font-extrabold text-[#222328] text-[32px]'> Login form</h1>
      <p className='mt-2 text-[#666e75] text-[16px] max-w[500px] '>Login browsky</p>
    </div>

    <div className='mt-16'>
    <form>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
  
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required />
  
      
      <input type="submit" value="Submit" className='font-inter font-medium bg-[#45718C] text-white px-4 py-2 rounded-md ml-4'/>
    </form>

    </div>
  </section>
  )
}

export default Login