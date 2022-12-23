import React from 'react'
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

const Header = () => {
  return (
    
    <Navbar
    className="my-0"
    color="secondary"
    dark
  >
    <NavbarBrand>
      <Link to="/" className='color-link'>
       Users.com
      </Link>
    </NavbarBrand>
    <NavbarBrand>
      <Link  to="/about" className='color-link me-2'>
       About
      </Link>
      <Link to="/users" className='color-link'>
       Users
      </Link>
    </NavbarBrand>
  </Navbar>
  )
}

export default Header