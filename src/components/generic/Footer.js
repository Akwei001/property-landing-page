import React from 'react';

const Footer = () => {
  return (
    <div className='flex justify-between max-w-2xl p-4 m-auto border-t-2'>
      <h3 className='text-gray-600 text-md'>Copyright 2023.</h3>
      <div className='flex'>
        <p className='text-gray-600 text-md'>Terms</p>
        <p className='ml-4 text-gray-600 text-md'>Privacy</p>
      </div>
    </div>
  );
};

export default Footer;
