import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Login, Signup } from './pages';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';

function App() {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-[white] sm:px-8 px-4 border margin border-b-[#e6ebf4]' >
        <Link to='/'>
          <img src={logo} alt='logo' className='w-28 object-contain ' />
        </Link>
        <div style={{ display: 'flex' }}>
          <Link to='/login' className='font-inter font-medium bg-[#45718C] text-white px-4 py-2 rounded-md'>
            Login
          </Link>
          <Link to='/signup' className='font-inter font-medium bg-[#45718C] text-white px-4 py-2 rounded-md ml-4'>
            Signup
          </Link>
        </div>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path = '/login' element={<Login/>}/>
          <Route path= '/signup' element ={<Signup/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
