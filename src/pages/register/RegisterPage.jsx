import React, { useState } from 'react';
import './register.scss';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let navigation = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
   
    localStorage.setItem('username', firstName);
    setIsLoggedIn(true);
    navigation('/main')

    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
    
    // alert('form submitted')
  }

 
  return (
    <div className='register'>
      <div className="container">
          <h1 className='container__title'>Sign in with your account</h1> 
             <div className="wrapper">
             <div className='container__wrapper'>
                <h5>First Name</h5>
                <input className='container__input' type="text" placeholder='first Name' value={firstName} onChange={e => setFirstName(e.target.value)} required/>  
              </div>
              <div className='container__wrapper'>
              <h5>Last Name</h5>
                <input className='container__input' type="text" placeholder='last name' value={lastName} onChange={e => setLastName(e.target.value)} required/>  
              </div>
              <div className='container__wrapper'>
                <h5>Email</h5>
                <input className='container__input' type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)} required/>  
              </div>
              <div className='container__wrapper'>
              <h5>Password</h5>
                <input className='container__input' type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} required/>  
              </div>
              <button className="container__button" onClick={handleClick}>Submit
              </button>    
             </div>
 
      </div>
    </div>
  )
}

export default RegisterPage;