import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { BsArrowRight } from "react-icons/bs";
import SearchBar from './SearchBar'; // Import your SearchBar component

const Hero = () => {
  return (
    <div className='container'>
      <div className='grid xl:grid-cols-4 xl:grid-rows-2 gap-8'>
        <div className='xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative'>
          <img className='w-full h-full object-cover rounded-lg' src="https://github.com/adehogun/Enterprise-netz-proj/blob/main/src/assets/samsung3.jpg?raw=true" alt="apple" />
          <div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4'>
            <p className='bg-black bg-opacity-25 text-white sm:text-xl font-semibold hidden sm:block'>Experience the future in the palm of your hand with our revolutionary smartphone</p>
            <h2 className='bg-black bg-opacity-25 text-white sm:text-1xl md:text-2xl font-bold'> Elevate your everyday with the device that's ahead of its time.</h2>
            {/* Link to navigate to the SearchBar component */}
            <Link to="/search" className='bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-sm sm:text-base sm:px-6 sm:py-3 cursor-pointer'>
              Shop Now! <BsArrowRight/>
            </Link>
          </div>
        </div>
     
      </div>
    </div>
  )
}

export default Hero;
