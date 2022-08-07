import React from 'react'
import logo from './site_transparent_logo.jpg'

import {Link} from "react-router-dom"
import './Navbar.css'
const Navbar=()=>  {
    return(
            <div className='navbar'>
                 <img className='logo' src={logo} alt="logo"></img>
             <nav className='navcontainer'>
               
                <Link id="nv" to='/'>Home</Link>
                <Link id="nv" to='/about'>About</Link>
                <Link id="nv" to='/listofhotels'>Hotels</Link>
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