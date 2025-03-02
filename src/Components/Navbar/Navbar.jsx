import { Link } from 'react-router-dom';
import logo from '../../assets/platerushlogo.png';
import { useState } from 'react';


const Navbar = ({setShowLogin}) => {


  const navlink = <>
  <li><Link>Home</Link></li>
  <li><a href='#menu-item'>Menu</a></li>
  <li><a href='#contact'>Services</a></li>
  <li><a href='#footer'>Contact Us</a></li>
  </>
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navlink}
        
      </ul>
    </div>
    <img className='w-10 ml-10' src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      {navlink}
    </ul>
  </div>
  <div className="navbar-end mr-10">
    <a className="btn bg-green-500 rounded-xl text-white font-semibold"
      onClick={()=>setShowLogin(true)}
    >Sign In</a>
  </div>
</div>
    </div>
  );
};

export default Navbar;