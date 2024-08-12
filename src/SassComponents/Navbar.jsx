import React from 'react';
import '../Sassstyle/Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <a>Home</a>
        <a>About</a>
        <a>Profile</a>
        <a>Contact</a>
      </div>
      <div className='corousel'>
         <h1>Welcome to SCSS</h1>
      </div>
    </>
  )
}

export default Navbar