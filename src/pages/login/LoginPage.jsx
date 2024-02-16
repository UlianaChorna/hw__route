import React, { useState } from 'react';
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage({setLoggedIn}) {
  const [userName, setUserName] = useState(' ');
  const [password, setPassword] = useState('');
  let navigation = useNavigate();
  
 const handleSubmit = (event) => {
  event.preventDefault();
  const localUserName = localStorage.getItem('username')
console.log(localUserName)
  if (localUserName === userName) {
    setLoggedIn(true); 
  } else {
    alert('user do not found');
    navigation('/')
  }
 }

  return (
    <div className='login'>
      <div className="top">
      </div>
      <div className="container">
        <form action="post" onSubmit={handleSubmit} className='form'>
          <label htmlFor="text">User Name</label>
          <input type="text" placeholder='userName'  value={userName} onChange={e => setUserName(e.target.value)}/>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='password'  value={password} onChange={e => setPassword(e.target.value)}/>

          <button type="submit" className='btn_submit'> 
          <Link to='/main'> Login</Link>
          </button>
        </form>
  
        <p>You don't have an Account? <Link to='/register'>Register Now</Link> </p>
      </div>
     
    </div>
  )
}

export default LoginPage;