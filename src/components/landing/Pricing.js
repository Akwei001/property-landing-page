import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PLANS = [
  {
    name: '1 Bedroom Apartment',
    price: 'From £100,000',
    descriptor: '',
    description: '',
    buttonTitle: 'Get access',
    features: [
      'A light and airy open plan living space which boasts panoramic views across the city centre',
      'One bedroom with either a king size or double bed',
      'A fitted kitchen is accompanied by a dining space with options for a balcony',
    ],
  },
  {
    name: '2 Bedroom Apartment',
    price: 'From £200,000',
    descriptor: '',
    description: '',
    buttonTitle: 'Get access',
    features: [
      'A light and spacious living area boasting beautiful panoramic views across the city',
      'Two bedrooms with a variety of layouts',
      'Available with a balcony or Juliet balcony, dual aspect view or views across the city',
      ,
    ],
  },
  {
    name: '3 Bedroom Apartment',
    price: 'From £300,000',
    descriptor: '',
    description: '',
    buttonTitle: 'Contact sales',
    features: [
      'A master bedroom with a king size bed and an en-suite bathroom featuring a rainfall shower',
      'A king-size and double bedroom with the flexibility to become an office',
      'Your open-plan living space combines a seating area with a bespoke fitted kitchen and dining space for up to six guests',
    ],
  },
];

const Card = ({ plan, index, onClick }) => {
  const textPrimaryColor = index === 1 ? 'text-white' : 'text-primary';
  const textSecondaryColor = index === 1 ? 'text-white' : 'text-midnight-blue';
  return (
    <div className='flex flex-col flex-1 px-4 mb-8 md:mb-0 basis-full'>
      <div
        className={`shadow-lg flex flex-col flex-1 p-8 ${
          index === 1 ? 'bg-midnight-blue' : 'bg-white border-2 border-primary'
        } rounded-lg`}
      >
        <p className={`text-2xl font-medium mb-4 ${textPrimaryColor}`}>
          {plan.name}
        </p>
        <p className='py-4 mb-2 text-white'>
          <span className={`text-4xl font-bold ${textPrimaryColor}`}>
            {`${plan.price} `}
          </span>
          <span className={`text-lg font-bold ${textSecondaryColor}`}>
            {plan.descriptor}
          </span>
        </p>
        <p className={`text-lg font-medium py-4 ${textSecondaryColor}`}>
          {plan.description}
        </p>
        <div className='flex-1 '>
          {plan.features.map((f, fIndex) => {
            return (
              <div
                className={`py-4 ${
                  fIndex !== plan.features.length - 1
                    ? 'border-b-2 border-gray-200'
                    : ''
                }`}
                key={`Feature-${f}`}
              >
                <p className={`text-lg font-medium ${textSecondaryColor}`}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={`text-lg mr-2 ${textPrimaryColor}`}
                  />
                  {f}
                </p>
              </div>
            );
          })}
        </div>
        <div
          onClick={onClick}
          className={`text-center mt-4 px-7 py-3 rounded-lg border-2 ${
            index === 1
              ? 'bg-white text-primary border-white'
              : 'bg-midnight-blue text-white border-midnight-blue'
          } text-xl font-medium cursor-pointer hover:opacity-50 duration-200`}
        >
          {plan.buttonTitle}
        </div>
      </div>
    </div>
  );
};

const Pricing = ({ title, subtitle, onClick }) => {
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
      <div className='py-8 m-auto justify-evenly max-w-8xl md:py-16 lg:flex'>
        {PLANS.map((p, index) => {
          return (
            <Card
              plan={p}
              index={index}
              onClick={onClick}
              key={`Plan-${p.name}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
