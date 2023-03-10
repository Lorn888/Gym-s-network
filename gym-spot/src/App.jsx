import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {  Login, Signup } from './pages'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { logo } from './assets'

function App() {

  return (
   <BrowserRouter>
    <header className='w-full flex justify-between items-center bg-blue sm:px-8 px-4 border-b border-b-[#e6ebf4]'>
      <Link to= '/'>
        <img src={logo} alt ='logo' className='w-28 object-contain'/>
      </Link>
    </header>

   </BrowserRouter>
  )
}

export default App
