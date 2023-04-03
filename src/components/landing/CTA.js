import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CTA = ({ title, subtitle, onCTAClick }) => {
  return (
    <div>
      <div className='max-w-6xl px-4 py-8 m-auto rounded-lg shadow-lg bg-primary md:py-16'>
        <div className='max-w-2xl m-auto text-center'>
          <h2 className='mt-4 text-3xl font-bold text-center text-white md:text-4xl'>
            {title}
          </h2>
          <p className='my-8 text-2xl font-medium text-center text-white'>
            {subtitle}
          </p>
          <div
            onClick={onCTAClick}
            className='inline-block w-full py-3 text-xl font-medium duration-200 bg-white border-2 border-white rounded-lg cursor-pointer md:w-auto px-7 text-primary hover:opacity-50'
          >
            Enquire now
          </div>
        </div>
      </div>
    </div>
  );
};
export default CTA;
