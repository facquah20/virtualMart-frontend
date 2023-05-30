import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';


export default function Navbar(){
  const [open,setOpen] = useState(false);

  const toggleOpen = ()=>setOpen(!open);


  return (
    <nav className='side_navbar'>
      <div onClick={toggleOpen} className='navbar_bugger'>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {open &&
        <div className='nav_links'>
          <div>
            <Link to='/' className='nav_link'>Home</Link>
          </div>
          <div>
            <Link to='/' className='nav_link'>About</Link>
          </div>
          <div>
            <Link to='/' className='nav_link'>Product</Link>
          </div>
          <div>
            <Link to='/' className='nav_link'>Home</Link>
          </div>
          <div>
            <Link to='/' className='nav_link'>Home</Link>
          </div>
      </div>
 }
    </nav>

  );
}