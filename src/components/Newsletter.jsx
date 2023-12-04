import React from 'react'

function Newsletter() {
    return (
        <div id='contactus' className='container mx-auto md:pt-[150px] pb-[100px] pt-[90px]'>
            <div className='flex justify-center items-center flex-col p-[30px] sm:p-[0]'>
                <h4 className='font-bold ff_poppins sm:text-[28px] text-[23px] bg-clip-text text-transparent bg-gradient-to-t from-slate-900 to-fuchsia-600 m-0 pb-[37px]' data-aos="fade-down">Subscribe our newsletter</h4>
                <p className='ff_poppins font-normal text-base text-black lg:max-w-[378px] text-center pb-[30px] leading-[250%]' data-aos="fade-down">Subscribe to our newsletter for daily/weekly update of our products and services.</p>

                <div className='flex justify-center items-center mt-9 gap-5 w-full' data-aos="fade-down">
                    <div className='bg-clip-padding bg-gradient-to-b from-[#FD749B] to-[#281AC8] p-[1px] rounded-[100px] w-full max-w-[420px]'>
                        <input type="text" placeholder='EMAIL' className='py-3 rounded-[100px] pl-7 w-full outline-none text-black !placeholder-black' />
                    </div>
                    <button className='ff-poppins font-bold text-[14px] text-white py-4 px-10 rounded-[100px] bg-gradient-to-b from-[#FD749B] to-[#281AC8] hover:shadow-btn_shadow transition-all duration-300 ease-linear'>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
