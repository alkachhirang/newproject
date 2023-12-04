import React from 'react';
import { Starimg } from './IconImg';
import Satisfiedlayer from '../assets/images/png/satisfied-client.png';

function SatisfiedClient() {
    return (
        <div className='bg-gradient-to-b from-slate-900 to-fuchsia-600 relative'>
            <img src={Satisfiedlayer} alt="Satisfiedlayer" className='absolute w-full left-0 bottom-[-2%]' />
            <div className='container mx-auto sm:pb-[200px] pb-[100px] pt-[100px]'>
                <div className='flex items-center justify-center flex-col md:pt-28 pt-14 pb-9'>
                    <h3 className='ff-poppins text-[32px] font-bold text-white max-w-[373px] text-center' data-aos="fade-down"><span className='uppercase'>10,000</span> Satisfied clients
                        around the world</h3>
                    <p className='ff-poppins text-[16px] font-normal leading-[250%] max-w-[542px] text-white text-center md:pt-12 pt-6' data-aos="fade-down">Yeah! we’re proud with numbers. We’ve helped thousands of clients all around the world with our bespoke service. Hover ontop of them pic to view their testimonials.</p>
                </div>
                <div className='flex items-center lg:justify-between lg:flex-row flex-col justify-center sm:px-0 px-4'>
                    <div className='lg:w-6/12 w-full px-6' data-aos="fade-right">
                        <div className='review-card relative bg-[#C4C4C4] rounded-[15px] pt-[18px] pb-[18px] pl-6 max-w-[410px] w-full cursor-pointer'>
                            <p className='ff-poppins text-[16px] font-normal '>Neya from Goa</p>
                            <div className=' pt-1 pb-1'>
                                <Starimg />
                            </div>
                            <div>
                                <p className='ff-poppins text-[14px] font-bold leading-[142.857%] text-[#333]'>Best service</p>
                                <p className='ff-poppins text-[14px] font-normal leading-[142.857%] text-[#333]'>Good material, Thank you.</p>
                            </div>
                            <div className="top-1/3 right-[-23px] absolute w-0 h-0 border-t-[20px] border-solid border-t-transparent border-b-[20px] border-b-transparent border-l-[40px] border-l-[#C4C4C4]"></div>
                        </div>
                        <div className='flex justify-end items-center lg:mt-16 mt-10 cursor-pointer'>
                            <div className='review-card relative bg-[#C4C4C4] rounded-[15px] pt-[18px] pb-[18px] pl-6 max-w-[410px] w-full'>
                                <p className='ff-poppins text-[16px] font-normal'>Pooja from UP</p>
                                <div className=' pt-1 pb-1'>
                                    <Starimg />
                                </div>
                                <div>
                                    <p className='ff-poppins text-[14px] font-bold leading-[142.857%] text-[#333]'>Best service</p>
                                    <p className='ff-poppins text-[14px] font-normal leading-[142.857%] text-[#333]'>Good material, Thank you.</p>
                                </div>
                                <div className="top-1/3 right-[-23px] absolute w-0 h-0 border-t-[20px] border-solid border-t-transparent border-b-[20px] border-b-transparent border-l-[40px] border-l-[#C4C4C4]"></div>
                            </div>
                        </div>
                        <div className='lg:pt-12 pt-10 '>
                            <div className='review-card relative bg-[#C4C4C4] rounded-[15px] pt-[18px] pb-[18px] pl-6 max-w-[410px] w-full cursor-pointer'>
                                <p className='ff-poppins text-[16px] font-normal'>klyan from Gujarat</p>
                                <div className=' pt-1 pb-1'>
                                    <Starimg />
                                </div>
                                <div>
                                    <p className='ff-poppins text-[14px] font-bold leading-[142.857%] text-[#333]'>Best service</p>
                                    <p className='ff-poppins text-[14px] font-normal leading-[142.857%] text-[#333]'>Good material, Thank you.</p>
                                </div>
                                <div className="top-1/3 right-[-23px] absolute w-0 h-0 border-t-[20px] border-solid border-t-transparent border-b-[20px] border-b-transparent border-l-[40px] border-l-[#C4C4C4]"></div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-5/12 w-full px-6 flex flex-col justify-center' data-aos="fade-left">
                        <div className='flex justify-end items-center lg:mt-0 mt-10'>
                            <div className='review-card relative bg-[#C4C4C4] rounded-[15px] pt-[18px] pb-[18px] pl-6 max-w-[410px] w-full cursor-pointer'>
                                <p className='ff-poppins text-[16px] font-normal '>Ankit from MP</p>
                                <div className=' pt-1 pb-1'>
                                    <Starimg />
                                </div>
                                <div>
                                    <p className='ff-poppins text-[14px] font-bold leading-[142.857%] text-[#333]'>Wonderful service</p>
                                    <p className='ff-poppins text-[14px] font-normal leading-[142.857%] text-[#333]'>Good deal and very wonderful service thank you.</p>
                                </div>
                                <div className="top-1/3 right-[-23px] absolute w-0 h-0 border-t-[20px] border-solid border-t-transparent border-b-[20px] border-b-transparent border-l-[40px] border-l-[#C4C4C4]"></div>
                            </div>
                        </div>
                        <div className='lg:mt-24 mt-10'>
                            <div className='review-card relative bg-[#C4C4C4] rounded-[15px] pt-[18px] pb-[18px] pl-6 max-w-[410px] w-full cursor-pointer'>
                                <p className='ff-poppins text-[16px] font-normal '>Neya from Goa</p>
                                <div className=' pt-1 pb-1'>
                                    <Starimg />
                                </div>
                                <div>
                                    <p className='ff-poppins text-[14px] font-bold leading-[142.857%] text-[#333]'>Wonderful service</p>
                                    <p className='ff-poppins text-[14px] font-normal leading-[142.857%] text-[#333]'>Good deal and very wonderful service thank you.</p>
                                </div>
                                <div className="top-1/3 right-[-23px] absolute w-0 h-0 border-t-[20px] border-solid border-t-transparent border-b-[20px] border-b-transparent border-l-[40px] border-l-[#C4C4C4]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SatisfiedClient
