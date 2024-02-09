import React from 'react';
import './navbar.scss'
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav__wrapper">
       <button className='btn__main'><Link to='/main'>Go to main</Link> </button>
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to="/users" activeClassName="active">Users</NavLink>
          </li>
          <li>
            <NavLink to="/posts" activeClassName="active">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/todos" activeClassName="active">Todos</NavLink>
          </li>
        </ul>
    </nav>
    <button className='btn__main exit'><Link to='/'>Exit</Link> </button>
    </div>
  )
}

export default NavBar;