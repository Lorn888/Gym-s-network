import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/signup', { name, email, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'> Sign up form</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w[500px] '>Please sign up browsky</p>
      </div>

      <div className='mt-16'>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Name'
            type='name'
            id='name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            placeholder='Email'
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            placeholder='Password'
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type='submit'
            value='Submit'
            className='font-inter font-medium bg-[#45718C] text-white px-4 py-2 rounded-md ml-4'
          />
        </form>
      </div>
    </section>
  );
};

export default Signup;
