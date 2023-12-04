import React from 'react';
import { useState } from 'react';
import Navlogo from '../assets/images/png/nav-logo.png';
import Home1 from '../assets/images/png/home1.png';
import Home2 from '../assets/images/png/home2.png';
import Whitelayer from '../assets/images/png/header-bottom-layer.webp';

function Header() {
  const [show, setshow] = useState(true);
  if (show === false) {
    document.body.classList.add("max-lg:overflow-hidden")
  } else {
    document.body.classList.remove("max-lg:overflow-hidden")
  }
  return (
    <div className='bg-gradient-to-b from-slate-900 to-fuchsia-600 relative'>
      <img src={Whitelayer} alt="Whitelayer" className='left-0 sm:bottom-[-4%] bottom-[-2%] absolute w-full' />
      <img src={Home1} alt="Home1" className='absolute left-0 xxl:bottom-[20%] lg:bottom-[17%] sm:bottom-[12%] bottom-[25%]  xl:max-w-[400px] sm:max-w-[300px] max-w-[195px] w-full' data-aos="zoom-in" />
      <img src={Home2} alt="Home2" className='absolute right-0 sm:bottom-[11%] bottom-[4%] xxl:max-w-[500px] xl:max-w-[430px] lg:max-w-[388px] sm:max-w-[284px] max-w-[195px] w-full' data-aos="zoom-in" />
      <div className='container mx-auto xl:pr-[50px]'>
        <div className='flex justify-between items-center pr-[20px] sm:pr-[0]'>
          <div className='cursor-pointer'>
            <img src={Navlogo} alt="Navlogo" className='h-full max-h-[100px] object-cover' />
          </div>
          <ul className={`${show ? "flex flex-row gap-x-12 max-lg:fixed max-lg:justify-center transition-all max-lg:left-[-100%] max-lg:items-center max-lg:top-0 max-lg:w-full max-lg:flex-col duration-300 ease-linear max-lg:min-h-screen" : "flex ease-linear max-lg:fixed z-10 gap-[30px] transition-all duration-300 max-lg:justify-center max-lg:left-[0] max-lg:items-center max-lg:top-0 max-lg:w-full max-lg:flex-col max-lg:bg-[#352460] max-lg:min-h-screen"}`}>
            <li><a href='#home' onClick={() => setshow(!show)} className='text-white text-[21px] font-bold ff_poppins after:absolute relative after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-[#CC33D9] after:start-2/4 after:rounded-sm hover:after:w-[22px] hover:after:left-[35%] after:transition-all after:duration-300 after:ease-linear '>Home</a></li>
            <li><a href='#aboutus' onClick={() => setshow(!show)} className='text-white text-[21px] font-bold whitespace-nowrap ff_poppins after:absolute relative after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-[#CC33D9] after:start-2/4 after:rounded-sm hover:after:w-[22px] hover:after:left-[35%] after:transition-all after:duration-300 after:ease-linear'>About Us</a></li>
            <li><a href='#Gallary' onClick={() => setshow(!show)} className='text-white text-[21px] font-bold ff_poppins after:absolute relative after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-[#CC33D9] after:start-2/4 after:rounded-sm hover:after:w-[22px] hover:after:left-[35%] after:transition-all after:duration-300 after:ease-linear'>Gallery</a></li>
            <li><a href='#contactus' onClick={() => setshow(!show)} className='text-white text-[21px] font-bold whitespace-nowrap ff_poppins after:absolute relative after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-[#CC33D9] after:start-2/4 after:rounded-sm hover:after:w-[22px] hover:after:left-[35%] after:transition-all after:duration-300 after:ease-linear'>Contact Us</a></li>
          </ul>
          <div onClick={() => setshow(!show)} className='w-[30px] h-[30px] relative z-[11] sm:p-0 me-[10px] transition-all lg:hidden flex flex-col justify-between items-center'>
            <span className={`${show ? "bg-white h-[4px] w-full duration-300 ease-linear transition-all" : "bg-white transition-all duration-300 ease-linear h-[4px] w-full rotate-[50deg] translate-y-[24px]"}`}></span>
            <span className={`${show ? "bg-white h-[4px] w-full duration-300 ease-linear transition-all" : "bg-white transition-all duration-300 ease-linear hidden "}`}></span>
            <span className={`${show ? "bg-white h-[4px] w-full duration-300 ease-linear transition-all" : "bg-white transition-all duration-300 ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-50%]"}`}></span>
          </div>
        </div>
      </div>
      <div id='home' className='container flex justify-center flex-col items-center mx-auto'>
        <div className='xl:pt-[160px] lg:pt-[90px] sm:pt-[40px] pt-[30px] md:pb-[500px] pb-[436px]'>
          <h2 className='ff_poppins sm:text-5xl text-3xl font-semibold text-white lg:max-w-[506px] m-0 lg:text-start text-center sm:p-[0] p-[8px]' data-aos="fade-down">We Make Your Home
            More Beautiful</h2>
          <p className='ff_poppins text-white font-normal sm:text-[21px] text-[15px] lg:max-w-[419px] sm:pb-[40px] lg:pb-[0px] lg:text-start text-center pt-[0] sm:p-[0] p-[10px]' data-aos="fade-down">From choosing the right paint to getting an expert touch - leave it on us.</p>
        </div>
      </div>
    </div>
  )
}

export default Header
