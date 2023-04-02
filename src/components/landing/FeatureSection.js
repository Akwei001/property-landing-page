import React, { useEffect } from 'react';
// import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import ModernBedroom from '../../../public/modern-minimalist-bedroom-g82e84c631_1280.jpg';

const FeatureSection = ({ title, subtitle, quote, name, side, image }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos={side === 'right' ? 'fade-right' : 'fade-left'}
      className={`flex ${
        side === 'right' ? 'flex-row-reverse' : 'flex-row'
      } max-w-6xl m-auto py-8 md:py-16`}
    >
      <div
        className={`md:flex-1 px-8 py-4 border-primary ${
          side === 'right' ? 'border-r-2' : 'border-l-2'
        }`}
      >
        <div className='border-b-2 border-primary'>
          <h2 className='mt-4 text-3xl font-bold text-midnight-blue md:text-4xl'>
            {title}
          </h2>
          <p className='my-8 text-2xl font-medium text-gray-600'>{subtitle}</p>
        </div>
        <div className='mt-8'>
          <p className='text-lg text-gray-600'>{`"${quote}"`}</p>
          <div className='flex items-center mt-2'>
            <div className='w-8 h-8 mr-4 rounded-full bg-midnight-blue'></div>
            <p className='text-lg text-midnight-blue'>{name}</p>
          </div>
        </div>
      </div>
      <div>{image}</div>
      {/* <Image
        src={ModernBedroom}
        alt='Picture of Bedroom'
        className='rounded-lg md:flex-1'
        height={250}
        width={450}
      /> */}
      {/* <div className='rounded-lg md:flex-1 bg-midnight-blue'>image</div> */}
    </div>
  );
};

export default FeatureSection;
