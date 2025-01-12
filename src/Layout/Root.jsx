import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import LoginPopup from '../Components/User/LoginPopup/LoginPopup';

const Root = () => {
  const [showLogin, setShowLogin] =useState(false);
  return (
    <div>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}></LoginPopup>:<></>}
      <Navbar setShowLogin={setShowLogin}></Navbar>
      <div className='max-w-7xl mx-auto'>
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;