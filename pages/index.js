import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
import Header from '../src/components/generic/Header';
import Separator from '../src/components/generic/Separator';
import Waitlist from '../src/components/landing/Waitlist';
import FeatureGrid from '../src/components/landing/FeatureGrid';
import FeatureSection from '../src/components/landing/FeatureSection';
import HowItWorks from '../src/components/landing/HowItWorks';
import Pricing from '../src/components/landing/Pricing';
import FAQ from '../src/components/landing/FAQ';
import CTA from '../src/components/landing/CTA';
import Footer from '../src/components/generic/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import ApartmentRoom from '../public/pexels-pixabay-271618.jpg';

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 750,
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Lorem Ipsum</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <style>{dom.css()}</style>
      </Head>
      <main className='bg-white'>
        <Header />
        <div
          data-aos='fade-up'
          className='px-4 bg-gradient-to-b from-white to-primary'
        >
          <div className='max-w-2xl pt-32 m-auto text-center md:pt-40'>
            <h1 className='mb-16 text-6xl font-bold md:text-7xl text-midnight-blue'>
              Experience the Perfect Blend of Style and Comfort at
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-primary'>
                {` LifeWay`}
              </span>
            </h1>
            <p className='my-8 text-2xl font-medium text-gray-600'>
              Step Into the Future of Apartment Living with Our Smart Home
              Technology
            </p>
            <Waitlist />
          </div>
          <Image src={ApartmentRoom} alt='Picture of apartment' />
          {/* <div className='max-w-6xl m-auto mt-20 rounded-t-lg h-96 bg-midnight-blue'></div> */}
          {/* <div className='max-w-6xl m-auto rounded-b-lg h-96 bg-midnight-blue md:mb-20'></div> */}
          <div className='max-w-2xl py-16 m-auto' data-aos='fade-up'>
            <h2 className='mt-4 text-5xl font-bold text-center text-white md:text-6xl'>
              Apartment living
            </h2>
            <p className='my-8 text-2xl font-medium text-center text-white'>
              A whole new way to rent in the heart of the cities you love. From
              fully furnished studios, 1 bed, 2 bed and 3 bed apartments to the
              penthouse collection, there is something for everyone with a
              LifeWay new build apartment.
            </p>
            <div className='justify-between m-auto md:flex'>
              <div className='py-2 mb-8 text-center md:mb-0'>
                <h2 className='mb-2 text-5xl font-bold md:text-6xl'>100%</h2>
                <p className='text-2xl font-medium'>Pepperoni</p>
              </div>
              <div className='py-2 mb-8 text-center md:mb-0'>
                <h2 className='mb-2 text-5xl font-bold md:text-6xl'>24/7</h2>
                <p className='text-2xl font-medium'>Delivery</p>
              </div>
              <div className='py-2 text-center'>
                <h2 className='mb-2 text-5xl font-bold md:text-6xl'>100k</h2>
                <p className='text-2xl font-medium'>Calories</p>
              </div>
            </div>
          </div>
        </div>
        <div className='py-8 bg-white md:py-16' data-aos='fade-up'>
          <div className='max-w-2xl py-16 m-auto'>
            <h2 className='mt-4 text-5xl font-bold text-center text-midnight-blue md:text-6xl'>
              Sunt in culpa qui officia deserunt mollit anim id
            </h2>
            <p className='mt-8 text-2xl font-medium text-center text-gray-600'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam
            </p>
          </div>
        </div>
        <div className='px-4 overflow-hidden'>
          <FeatureSection
            title='Neque porro quisquam est, qui dolorem ipsum'
            subtitle='Quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora'
            quote='The Oasis is a true gem in the heart of the city. The stunning architecture, expansive views, and high-end finishes make it the perfect place for anyone looking for a luxurious living experience.'
            name='Maria Rodriguez'
            side='left'
          />
        </div>
        <div className='px-4 mt-8 overflow-hidden md:mt-16'>
          <FeatureSection
            title='Et quasi architecto beatae vitae dicta sunt explicabo'
            subtitle='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
            quote="Harmony Heights is more than just an apartment complex, it's a community. The staff goes above and beyond to make residents feel welcome and comfortable, and the events and activities organized by the community create a real sense of belonging."
            name='Jameson Lee'
            side='right'
          />
        </div>
        <div className='py-8 mt-8 md:py-16 md:mt-16' data-aos='fade-up'>
          <HowItWorks
            title='Get up and running in minutes'
            subtitle='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam'
          />
        </div>
        <div className='py-8 md:py-16' data-aos='fade-up'>
          <Pricing
            title='Pricing plans for teams of all sizes'
            subtitle='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam'
            onClick={scroll.scrollToTop}
          />
        </div>
        <div className='px-4 py-8 md:py-16' data-aos='fade-up'>
          <FAQ />
        </div>
        <div
          className='px-4 py-8 md:py-16'
          data-aos='fade-up'
          onClick={() => scroll.scrollToTop()}
        >
          <CTA
            title='Ut enim ad minima veniam, quis nostrum exercitationem'
            subtitle='ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
            onCTAClick={scroll.scrollToTop}
          />
        </div>
        <Footer />
      </main>
    </div>
  );
}
