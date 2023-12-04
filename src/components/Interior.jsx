import React from "react";
import InteriorLayer from "../assets/images/png/interior_layer.png";
import ExteriorImg from "../assets/images/png/ExteriorHouse.webp";
import InteriorImg from "../assets/images/png/Interior.webp";
import PerfectColors from "../assets/images/png/ColorSamples.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Interior = () => {
  const settings = {
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-gradient-to-b from-slate-900 to-fuchsia-600 relative">
        <img
          src={InteriorLayer}
          alt="InteriorLayer"
          className="absolute xl:bottom-[-8%] bottom-[-4%] w-full"
        />
        <div className="container mx-auto lg:pt-[200px] lg:pb-[250px] pt-[100px] pb-[100px] px-6 lg:px-0">
          <Slider {...settings} className="lg:py-11 py-0">
            <div className="px-6 md:px-0">
              <div className="slide_card bg-white py-[28px] px-[46px] rounded-2xl transition-all duration-300 ease-linear cursor-pointer group">
                <p className=" pb-6 text-[#888888] font-['poppins'] lg:text-[20px] text-[15px] font-bold">
                  Exterior{" "}
                </p>
                <img
                  src={ExteriorImg}
                  alt="ExteriorImg"
                  className=" w-full pb-[21px] transition-all duration-300 ease-linear"
                />
                <button className="uppercase bg-[#888888] font-['poppins'] font-bold py-[14px] px-[32px] text-white rounded-[100px] text-[14px]">
                  MORE
                </button>
              </div>
            </div>
            <div className="px-6 md:px-0">
              <div className="slide_card bg-white py-[28px] px-[46px] rounded-2xl transition-all duration-300 ease-linear cursor-pointer group">
                <p className=" pb-6 text-[#888888] font-['poppins'] lg:text-[20px] text-[15px] font-bold">
                  Interior{" "}
                </p>
                <img
                  src={InteriorImg}
                  alt="InteriorImg"
                  className=" w-full pb-[21px]"
                />
                <button className="uppercase bg-[#888888] font-['poppins'] font-bold py-[14px] px-[32px] text-white rounded-[100px] text-[14px]">
                  MORE
                </button>
              </div>
            </div>
            <div className="px-6 md:px-0">
              <div className="slide_card bg-white py-[28px] px-[46px] rounded-2xl transition-all duration-300 ease-linear cursor-pointer group">
                <p className=" pb-6 text-[#888888] font-['poppins'] lg:text-[20px] text-[15px] font-bold">
                  your perfect color{" "}
                </p>
                <img
                  src={PerfectColors}
                  alt="PerfectColors"
                  className="w-full pb-[21px]"
                />
                <button className=" uppercase bg-[#888888] font-['poppins'] font-bold py-[14px] px-[32px] text-white rounded-[100px] text-[14px]">
                  MORE
                </button>
              </div>
            </div>
            <div className="px-6 md:px-0">
              <div className="slide_card bg-white py-[28px] px-[46px] rounded-2xl transition-all duration-300 ease-linear cursor-pointer group">
                <p className=" pb-6 text-[#888888] font-['poppins'] lg:text-[20px] text-[15px] font-bold">
                  your perfect color{" "}
                </p>
                <img
                  src={PerfectColors}
                  alt="PerfectColors"
                  className="w-full pb-[21px]"
                />
                <button className=" uppercase bg-[#888888] font-['poppins'] font-bold py-[14px] px-[32px] text-white rounded-[100px] text-[14px]">
                  MORE
                </button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Interior;

