import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
        <Link to="/" className='navbar-link'>Movies</Link>
        <Link to="/about" className='navbar-link'>About</Link>
        <Link to="/contact" className='navbar-link'>Contact Us</Link>
    </nav>
  )
}
