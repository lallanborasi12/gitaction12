import React from 'react'

import { QRCodeCanvas } from "qrcode.react";
import "swiper/css";
// import 'swiper/css/effect-creative';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
export default function BannerSection() {
  return (
    <div className=' bannerbg md:px-10  md:pt-0 pt-6 pb-6  px-4  md:pb-[5%]'>
      <div className="  max-w-8xl md:max-w-7xl m-auto  ">
        <div className=" flex flex-col md:flex-row justify-between gap-12   flex-1 w-full">
          <div className="flex flex-col  justify-center md:w-[55%] lg:w-[55%] w-full" >
            <h2 className="text-4xl md:text-[52px] font-bold !font-serif !text-start text-customcolor leading-tight mt-[10%]"> Snap • Scan • Eat Smart </h2>
            <h2 className="text-4xl md:text-[45px] font-bold !font-serif !text-start text-customcolor leading-tight">Instant <span className="bg-greenlite  bg-clip-text text-transparent">   Calorie </span>Calculator </h2>
            <p className="text-customcolor text-[22px] font-medium !text-start mt-10 opacity-80">   Powered by AI | CalMateApp</p>
            <p className="text-customcolor text-[22px]  font-medium   leading-normal !text-start mt-10 opacity-80">
              Discover the nutritional content of your meals with a simple photo. Our smart technology identifies your food and calculates calories instantly—no manual logging required. Effortless nutrition tracking in the palm of your hand.</p>
            
            <div className="flex  flex-col-reverse md:flex-col   mt-10 md:max-w-md w-full">
              <div className='flex md:flex-col lg:flex-row flex-col gap-4 m-auto'>
                 <Link to={process.env.REACT_APP_IOS_LINK}>
                <button className="bg-[#000] text-white px-5 py-4 rounded-lg text-2xl font-bold flex items-center gap-3   w-[228px]  h-16 ">
                  <div><img src="./images/iconappstore.webp" alt='App Store' className='h-8' /></div>
                  <div className='text-start flex flex-col'><span className='text-sm font-medium'> Download on the </span> <span>App Store</span> </div>
                </button>
                </Link>
                     <Link to={process.env.REACT_APP_ANDROID_LINK}>
                <button className="bg-[#000] text-white px-5 py-4 rounded-lg text-2xl  font-bold flex flex-row items-center gap-3  w-[228px]  h-16  ">
                  <div><img src="./images/icongoogle.webp" alt='google play' className='h-8' /></div>
                  <div className='text-start flex flex-col'><span className='text-sm font-medium'> Get it on</span> <span>Google Play</span></div>

                </button>
                </Link>
              </div>
              {/* <div className="!text-center  mt-14 mb-5">
                <QRCodeCanvas value={"#"} fgColor={"#0D3B1B"} bgColor="transparent" className='m-auto ' />
                <p className="text-base font-medium  text-customcolor mt-5">Scan to download now</p>
              </div> */}
            </div>

          </div>
          <div className="flex items-center justify-center  md:w-[45%] lg:w-[45%] w-full">
            <img src="./images/banner.webp" />
            {/* <Swiper
              modules={[EffectFade, Autoplay]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              centeredSlides={true}
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: false, }}
              speed={3000} className="w-full" >
              <SwiperSlide>
                <img src={ImgProvider?.downloadapp1} alt="downloadapp" className="w-full max-w-[700px] h-auto max-h-[650px] transition-all duration-1000 ease-in-out" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImgProvider?.downloadapp2} alt="downloadapp" className="w-full max-w-[700px] h-auto max-h-[650px] transition-all duration-1000 ease-in-out" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImgProvider?.downloadapp3} alt="downloadapp" className="w-full max-w-[700px] h-auto max-h-[650px] transition-all duration-1000 ease-in-out" />
              </SwiperSlide>
            </Swiper> */}
          </div>
        </div>
      </div>
    </div>
  )
}
