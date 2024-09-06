import React from 'react';
import logo from '../assest/banner/logo.png';

const Logo = () => {
  return (
    <img 
      src={logo} 
      alt="Logo" 
      style={{ width: '100px', height: '64px' }} 
    />
  );
};

export default Logo;
