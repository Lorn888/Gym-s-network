import {useState, React} from 'react'

const [, setUsername] = useState('')
const [password, setPassword] = useState('')

const Login = () => {
  return (
    <section className='max-w-7xl mx-auto'>
    <div>
      <h1 className='font-extrabold text-[#222328] text-[32px]'> Login form</h1>
      <p className='mt-2 text-[#666e75] text-[16px] max-w[500px] '>Login browsky !</p>
    </div>

    <div className='mt-16 border-[red]'  >
    <form className='w-64 mx-auto '>

      <input 
      value={name} 
      onChange={ev => setUsername(ev.target.value)} 
      className='mb-5' 
      placeholder='Email' 
      type="email" 
      id="email" 
      name="email" 
      required />
  
      <input 
      value={password} 
      onChange={ev => setPassword(ev.target.value)}
      className='mb-5' 
      placeholder='Password' 
      type="password" 
      id="password" 
      name="password" 
      required />
  
      
      <input type="submit" value="Submit" className='font-inter font-medium bg-[#45718C] text-white px-4 py-2 rounded-md ml-4'/>
    </form>

    </div>
  </section>
  )
}

export default Login