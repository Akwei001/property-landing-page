import React from 'react';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const STEPS = [
  {
    title: 'On-Site Gym',
    subtitle:
      'Get Fit Without Leaving Home: Our On-Site Gym Has Everything You Need',
    imagepath: '/workout-gc488fd0d4_1280.jpg',
  },
  {
    title: 'Private Cinema',
    subtitle:
      'Movie Nights Made Easy: Our Cinema Room is the Perfect Spot for Relaxing and Entertaining',
    imagepath: '/pexels-pavel-danilyuk-7234230.jpg',
  },
  {
    title: 'Roof Terrace',
    subtitle:
      'A Scenic Escape: Take in the Views from Our Stunning Roof Terrace',
    imagepath: '/brands-people-en-u6xqnbsg-unsplash.jpg',
  },
];

const Step = ({ step }) => {
  return (
    <div className='flex-1 px-4 py-4 '>
      {/* <div className="w-full h-64 rounded-lg bg-midnight-blue"></div> */}
      <div className=''>
        <Image
          className='rounded-lg'
          src={step.imagepath}
          alt=''
          height={300}
          width={300}
        />
      </div>
      <div className='mt-4'>
        <p className='mb-2 text-2xl font-bold text-center text-gray-600 md:text-left'>
          {step.title}
        </p>
        <p className='text-lg font-medium text-center text-midnight-blue md:text-left'>
          {step.subtitle}
        </p>
      </div>
    </div>
  );
};

const HowItWorks = ({ title, subtitle }) => {
  return (
    <div>
      <div className='max-w-2xl m-auto'>
        <h2 className='mt-4 text-5xl font-bold text-center text-midnight-blue md:text-6xl'>
          {title}
        </h2>
        <p className='my-8 text-2xl font-medium text-center text-gray-600'>
          {subtitle}
        </p>
      </div>
      <div className='justify-around max-w-6xl py-8 m-auto md:flex md:py-16'>
        {STEPS.map((s, index) => {
          return <Step step={s} key={`Step-${index}`} />;
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
