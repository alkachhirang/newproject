import React from 'react';
import LivingRoom from '../assets/images/png/living-room.png';
import Kitchen from '../assets/images/png/kitchen.png';
import Office from '../assets/images/png/office.png';
import Bath from '../assets/images/png/bath.png';
import BedRoom from '../assets/images/png/bed-room.png';
import GallaryLayer from '../assets/images/png/gallary-layer.webp';

function Gallary() {
    return (
        <div id='Gallary' className='relative'>
            <img src={GallaryLayer} alt="GallaryLayer" className='absolute lg:bottom-[-6%] md:bottom-[-3%] sm:bottom-[-2%] bottom-[-2%] left-0 w-full z-[3]' />
            <div className='container lg:pt-[130px] pb-[130px] mx-auto'>
                <h4 className='ff_poppins font-bold text-[32px] bg-clip-text text-transparent bg-gradient-to-t from-[#F16D92] to-[#281AC8] text-center md:pb-[90px] pb-[50px]' data-aos="fade-down">Gallery</h4>
                <div className='flex flex-row flex-wrap items-center p-[20px] sm:p-[0]'>
                    <div className='lg:w-3/6 w-full flex flex-col items-center lg:gap-36 gap-[50px]'>
                        <div data-aos="fade-up-right">
                            <div className='rounded-[16px] p-[8px] bg-gradient-to-tr from-[#cc33d9] to-[#2f245c] overflow-hidden'>
                                <img src={LivingRoom} alt="LivingRoom" className='rounded-[16px] hover:scale-[1.02] transition-all duration-300 ease-linear' />
                            </div>
                            <p className='ff_poppins text-[28px] bg-clip-text text-transparent bg-gradient-to-t from-[#FD749B] to-[#281AC8] m-0 font-medium pt-[8px]'>Living Room</p>
                        </div>
                        <div data-aos="fade-up-right">
                            <div className='rounded-[16px] p-[8px] bg-gradient-to-tr from-[#cc33d9] to-[#2f245c] overflow-hidden'>
                                <img src={Kitchen} alt="Kitchen" className='rounded-[16px] hover:scale-[1.02] transition-all duration-300 ease-linear' />
                            </div>
                            <p className='ff_poppins text-[28px] bg-clip-text text-transparent bg-gradient-to-t from-[#FD749B] to-[#281AC8] m-0 font-medium pt-[8px]'>Kitchen</p>
                        </div>
                    </div>
                    <div className='lg:w-3/6 w-full flex flex-col items-center lg:gap-28 gap-[50px]'>
                        <div className='lg:pt-[0] md:pt-[50px]' data-aos="fade-up-left">
                            <div className='rounded-[16px] p-[8px] bg-gradient-to-tr from-[#cc33d9] to-[#2f245c] overflow-hidden'>
                                <img src={Office} alt="Office" className='rounded-[16px] hover:scale-[1.02] transition-all duration-300 ease-linear' />
                            </div>
                            <p className='ff_poppins text-[28px] bg-clip-text text-transparent bg-gradient-to-t from-[#FD749B] to-[#281AC8] m-0 font-medium pt-[8px]'>Office</p>
                        </div>
                        <div data-aos="fade-up-left">
                            <div className='rounded-[16px] p-[8px] bg-gradient-to-tr from-[#cc33d9] to-[#2f245c] overflow-hidden'>
                                <img src={Bath} alt="Bath" className='rounded-[16px] hover:scale-[1.02] transition-all duration-300 ease-linear' />
                            </div>
                            <p className='ff_poppins text-[28px] bg-clip-text text-transparent bg-gradient-to-t from-[#FD749B] to-[#281AC8] m-0 font-medium pt-[8px]'>Bath</p>
                        </div>
                        <div data-aos="fade-up-left">
                            <div className='rounded-[16px] p-[8px] bg-gradient-to-tr from-[#cc33d9] to-[#2f245c] overflow-hidden'>
                                <img src={BedRoom} alt="BedRoom" className='rounded-[16px] hover:scale-[1.02] transition-all duration-300 ease-linear' />
                            </div>
                            <p className='ff_poppins text-[28px] bg-clip-text text-transparent bg-gradient-to-t from-[#FD749B] to-[#281AC8] m-0 font-medium pt-[8px]'>Bed Room</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallary
