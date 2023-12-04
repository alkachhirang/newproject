import React from 'react';
import Create1 from '../assets/images/png/creating-img-1.png';
import Create2 from '../assets/images/png/creating-img-2.png';
import Stone from '../assets/images/png/create-stone.png';

function Creating() {
    return (
        <div className="bg-gradient-to-t from-slate-900 to-fuchsia-600 2xl:px-20 px-8 xl:pt-52 sm:pt-40 pt-28 pb-9 relative">
            <img src={Stone} alt="Stone" className='absolute right-0 bottom-0' />
            <div className="xl:flex items-center justify-between">
                <div className="w-full h-full bg-white p-2 rounded-[24px] max-w-[405px] xl:mb-0 mb-6" data-aos="fade-right">
                    <img
                        src={Create1}
                        alt="Create1"
                        className="rounded-[24px] w-full max-w-[405px]"
                    />
                </div>
                <div className="xl:ml-auto text-center">
                    <h4 className="text-white 2xl:text-[42px] xl:text-[32px] text-[22px] font-bold tracking-[3px]" data-aos="fade-down">
                        Creating a Warm,
                    </h4>
                    <h3 className="text-white 2xl:text-[42px] xl:text-[32px] text-[22px] font-bold tracking-[3px] sm:ms-20" data-aos="fade-down">
                        Welcoming Home
                    </h3>
                </div>
                <div className="w-full h-full bg-white p-2 rounded-[24px] max-w-[405px] xl:-translate-y-[40%] ml-auto xl:mt-0 mt-6 relative z-[2]">
                    <img
                        src={Create2}
                        alt="Create2"
                        className="rounded-[24px] w-full max-w-[400px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Creating
