import React from 'react';
import { useState } from 'react';
import { Google } from './IconImg';
import { Facebook } from './IconImg';
import { Twitter } from './IconImg';
import { Instagram } from './IconImg';

function Footer() {
  const [show, setshow] = useState(true);
  return (
    <div className='bg-gradient-to-b from-slate-900 to-fuchsia-600'>
      <div className='container mx-auto pt-[100px] pb-[100px]'>
        <div className='lg:flex-row flex flex-col lg:items-center lg:justify-center gap-[60px] p-[50px] sm:p-[0]'>
          <div className='lg:w-1/3 flex flex-col ld:justify-start' data-aos="fade-right">
            <p className='ff_poppins text-base font-bold text-white m-0'>RP</p>
            <p className='ff_poppins text-sm font-normal text-white m-0 pt-[8px] lg:max-w-[369px]'>Painting with RP means never painting your house again! Our special paint coating comes with a 20 years warranty.</p>
            <div className='flex items-center gap-x-[18px] pt-[18px]'>
              <Google />
              <Facebook />
              <Twitter />
              <Instagram />
            </div>
          </div>
          <div className='lg:w-1/2 flex gap-[80px] pt-[20px] lg:pt-[0]' data-aos="fade-left">
            <ul className='p-0'>
              <li><a href='' className='ff_poppins font-normal text-lg text-white'>Links </a></li>
              <li><a href='#home' onClick={() => setshow(!show)} className='ff_poppins font-normal text-sm text-slate-300 pt-[20px] inline-block after:absolute relative after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-white after:start-2/4 after:rounded-sm hover:after:w-[22px] hover:after:left-[35%] after:transition-all after:duration-300 after:ease-linear'>Home </a></li>
              <li><a href='#aboutus' onClick={() => setshow(!show)} className='ff_poppins font-normal text-sm text-slate-300 pt-[8px] whitespace-nowrap after:absolute relative after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-white after:start-2/4 after:rounded-sm hover:after:w-[22px] hover:after:left-[35%] after:transition-all after:duration-300 after:ease-linear'>About Us </a></li>
              <li><a href='#Gallary' onClick={() => setshow(!show)} className='ff_poppins font-normal text-sm text-slate-300 pt-[8px] after:absolute relative after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-white after:start-2/4 after:rounded-sm hover:after:w-[22px] hover:after:left-[35%] after:transition-all after:duration-300 after:ease-linear'>Gallery </a></li>
              <li><a href='#contactus' onClick={() => setshow(!show)} className='ff_poppins font-normal text-sm text-slate-300 pt-[8px] whitespace-nowrap after:absolute relative after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-white after:start-2/4 after:rounded-sm hover:after:w-[22px] hover:after:left-[35%] after:transition-all after:duration-300 after:ease-linear'>Contact Us </a></li>
            </ul>
            <ul className='p-0'>
              <li><a href='' className='ff_poppins font-normal text-lg text-white'>Contact Us</a></li>
              <li><a href='' className='ff_poppins font-normal text-sm text-slate-300 pt-[20px] inline-block'>+91 1234567890	 </a></li>
              <li><a href='' className='ff_poppins font-normal text-sm text-slate-300 pt-[8px]'>XYZ@gmail.com </a></li>
              <li><a href='' className='ff_poppins font-normal text-sm text-slate-300 pt-[8px]'>Address  </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
