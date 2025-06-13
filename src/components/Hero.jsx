import React from 'react'

const Hero = ({
  title = 'Find Your Dream Job',
  subtitle = 'Discover amazing opportunities that match your skills',
}) => {
  return (
    <section className='bg-gradient-to-r from-purple-600 to-blue-600 py-20 mb-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-4'>
            {title}
          </h1>
          <p className='my-4 text-xl text-purple-100'>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero