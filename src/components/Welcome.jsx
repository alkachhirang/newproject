import React from 'react';
import Paintimg from '../assets/images/png/welcome-img.png';
import Welcomelayer from '../assets/images/png/welcomr-layer.png';

function Welcome() {
    return (
        <div id='aboutus' className='relative pb-[60px]'>
            <img src={Welcomelayer} alt="Welcomelayer" className='absolute xl:bottom-[-20%] lg:bottom-[-15%] md:bottom-[-6%] sm:bottom-[-5%] bottom-[-3%] left-0 w-full z-[4]' />
            <div className='container pt-[50px] mx-auto'>
                <div className='flex justify-center items-center lg:flex-row flex-col p-[15px] sm:p-[0]'>
                    <div className='flex lg:w-3/6 justify-start items-center pl-[25px]'>
                        <img src={Paintimg} alt="Paintimg" className='lg:pt-[20px] pt-[0]' data-aos="fade-up-right" />
                    </div>
                    <div className='lg:w-3/6 pt-[25px] lg:pt-[0]'>
                        <h3 className='ff_poppins text-[32px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-fuchsia-600 lg:text-start text-center' data-aos="fade-up-left">Welcome to RP</h3>
                        <p className='lg:max-w-[639px] ff_poppins font-normal text-base text-black leading-[250%] lg:text-start text-center' data-aos="fade-up-left">A family-run business, with our own factory nestled in India, we are producing a complete range of traditional and modern paints. We formulate high performance paint, blended with the best ingredients. Our company includes interior and exterior paints, oil-based paints, floor paints and a special range of antimicrobial paints.</p>
                        <p className='lg:max-w-[639px] ff_poppins font-normal text-base text-black leading-[250%] pb-[27px] lg:text-start text-center' data-aos="fade-up-left">With a color palette you can easily mix the colors together to expand the range. The numbers of creating different textures, finishes and shades are unlimited.  </p>
                        <div className='flex lg:justify-start justify-center items-center' data-aos="fade-up-left">
                            <button className='ff_poppins font-bold text-base text-white bg-gradient-to-b from-slate-900 to-fuchsia-600 py-[17px] px-[60px] rounded-[100px] cursor-pointer hover:shadow-btn_shadow transition-all duration-400 ease-linear '>MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
