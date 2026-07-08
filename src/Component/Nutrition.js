import React from "react";
import { Link } from "react-router";
const Nutrition = () => {
  return (
    <div className="md:px-10 md:pb-0  px-4  bg-[#F7F7F7]">
    <div className="max-w-8xl md:max-w-7xl m-auto ">
      <section className="flex flex-col-reverse md:flex-row items-center ">
        <div className="md:w-1/2 w-full  ">
          <img src="./images/tackecontrole.webp" alt="App UI" className="w-auto h-auto  object-fill" />
        </div>
        <div className="md:w-1/2 w-full pb-4  flex-col items-center justify-center flex md:text-right text-center">
          <div className="text-customcolor font-[700] !font-serif  text-3xl md:text-5xl lg:text-[54px]    leading-tight">
            Take Control of Your  <span className="hidden"><br /></span> <span className="bg-greenlite  bg-clip-text text-transparent"> Nutrition </span> Today!
          </div>
          <p className="text-[#222222] text-[22px] font-[500] mt-12 mx-auto lg:mr-0 "> AI-powered tracking. Zero effort. Maximum results. </p>
          <div className='flex md:flex-col lg:flex-row flex-col  gap-4 w-fit mx-auto lg:mr-0 mt-14'>
            <Link to={process.env.REACT_APP_IOS_LINK}>
            <button className="bg-[#000] text-white px-5 py-4 rounded-lg text-2xl font-bold flex items-center gap-3   w-[228px] h-20 ">
              <div><img src="./images/iconappstore.webp" alt='App Store' className='h-8' /></div>
              <div className='text-start flex flex-col'><span className='text-sm font-medium'> Download on the </span> <span>App Store</span> </div>
            </button>
            </Link>
                 <Link to={process.env.REACT_APP_ANDROID_LINK}>  
            <button className="bg-[#000] text-white px-5 py-4 rounded-lg text-2xl  font-bold flex flex-row items-center gap-3   w-[228px]  h-20  ">
              <div><img src="./images/icongoogle.webp" alt='google play' className='h-8' /></div>
              <div className='text-start flex flex-col'><span className='text-sm font-medium'> Get it on</span> <span>Google Play</span></div>
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Nutrition;
