import React, { useState } from 'react';
import './register.scss';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [ setIsLoggedIn] = useState(false);

  let navigation = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();

    if (email.length === 0 || password.length === 0 
      || firstName.length === 0|| lastName.length === 0) {
      alert('Please enter all field');
      return;
    }

    if (!email.includes('@')){
      alert("Email don't correct")
      return;
    }
   
    localStorage.setItem('username', firstName);
    setIsLoggedIn(true);
    navigation('/main');

    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
  }

 
  return (
    <div className='register'>
      <div className="container">
          <h1 className='container__title'>Sign in with your account</h1> 
             <form className="wrapper">
             <div className='container__wrapper'>
                <h5>First Name</h5>
                <input required className='container__input' type="text" placeholder='first Name' value={firstName} onChange={e => setFirstName(e.target.value)}/>  
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
                <input required className='container__input' type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>  
              </div>
              <button type='submit'  onClick={handleClick} className="container__button" >Submit
              </button>    
             </form>
 
      </div>
    </div>
  )
}

export default RegisterPage;