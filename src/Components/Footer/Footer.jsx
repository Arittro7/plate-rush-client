import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='mt-10'>
      <footer className="footer bg-black text-white p-10">
  <aside className='flex flex-col justify-center items-center w-full h-full'>
    <img className='w-28' src={assets.logo} alt="" />
    <p>
      Arittro Food Monitoring Association
      <br />
      Providing reliable tech since 2023
    </p>
  </aside>
  <nav className='lg:ml-5 mx-auto text-green-400'>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className='lg:ml-5 mx-auto text-green-400'>
    <h6 className="footer-title ">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className='flex flex-col items-center justify-center w-full h-full'>
    <h1 className="text-3xl font-semibold text-white">Get in touch</h1>
    <h1 className="text-3xl text-white">+123456789</h1>
    <div className='flex gap-2 mt-3 justify-center items-center '>
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.linkedin_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
    </div>
  </nav>
</footer>
    </div>
  );
};

export default Footer;