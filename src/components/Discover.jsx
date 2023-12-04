import React from 'react';
import Discoverlayer from '../assets/images/png/descover-layer.webp';

function Discover() {
  return (
      <div className='relative'>
          <img src={Discoverlayer} alt="Discoverlayer" className='absolute xl:bottom-[-38%] lg:bottom-[-29%] md:bottom-[-22%] sm:bottom-[-20%] bottom-[-9%] w-full left-0' />
          <div className='container sm:py-[100px] py-[60px] mx-auto'>
              <div className='flex justify-center items-center flex-col p-[20px] sm:p-[0]'>
          <p className='ff_poppins font-bold sm:text-[28px] text-[20px] bg-clip-text text-transparent bg-gradient-to-t from-slate-900 to-fuchsia-600 md:pb-[60px] pb-[20px] text-center' data-aos="fade-down">Discover exclusive deals and discounts </p>  
          <p className='ff_poppins text-black font-normal text-base' data-aos="fade-down">add Link </p>
              </div>
          </div>
      
    </div>
  )
}

export default Discover
