import React from 'react'
import logo from './site_transparent_logo.jpg'

import './Navbar.css'
const Navbar=()=>  {
    return(
            <div className='navbar'>
                 <img className='logo' src={logo} alt="logo"></img>
             <nav className='navcontainer'>
               
                <span id="nv">Home</span>
                <span id="nv">About</span>
                <span id="nv">Features</span>
                <span id="nv">Blog</span>
                <span id="nv">Contact</span>
                <span id="nv">Booking</span>
                </nav>
                <div className='buttons'>
                <button className='sign-in'>Sign in</button>
                <button className='sign-up'>Sign up</button>
                </div>
               


           
               
            </div>
    )
          }

   

export default Navbar;