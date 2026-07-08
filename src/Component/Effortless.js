import React from 'react';

import { Link } from 'react-router';

const AICalorieSection = () => {
  return (
    <section className="  md:px-10 md:py-16 px-4 py-7  bg-[#F7F7F7]">
      <div className='flex flex-col-reverse md:flex-row gap-12 items-center justify-between max-w-8xl md:max-w-7xl    m-auto'>
        <div className="md:w-1/3 w-full   justify-center items-center mt-5 md:mt-0  relative  ">
          <img src="./images/effoctless.webp" alt="Woman holding salad" className="w-auto h-auto  " />
        </div>
        <div className="w-full md:w-2/3 mt-10 ">
          <div className="text-customcolor  !font-serif  text-3xl md:text-4xl lg:text-5xl font-[700]"> Effortless AI Calorie Tracking <br/><span className="bg-greenlite  bg-clip-text text-transparent ">Take Control of Your Nutrition.</span>
          </div>
          <p className="text-customcolor  text-sm md:text-base lg:text-[22px] font-[500] !leading-normal opacity-80  mt-5">Join us on a smarter journey to better health with AI-powered calorie tracking. No manual logging—just scan, speak, or type, and let AI do the rest. Whether you’re losing weight, building muscle, or maintaining balance, CalMate simplifies nutrition for you.</p>
          <ul className=" mt-10">
            <li className="flex gap-2 items-center text-[20px]  text-customcolor font-[500] ">
              <img src="./images/fire1.webp"  alt='fire' className="w-4 h-4"/>
              AI food recognition for instant calorie tracking
            </li>
            <li className="flex gap-2 items-center text-[20px] mt-6 text-customcolor font-[500] ">
              <img src="./images/fire1.webp"  alt='fire1' className="w-4 h-4"/> Barcode, text & voice input for effortless logging
            </li>
            <li className="flex gap-2 items-center text-[20px] mt-6 text-customcolor font-[500]">
              <img src="./images/fire1.webp" alt='fire1' className="w-4 h-4"/>
              Accurate macro & micro breakdowns for smarter choices
            </li>
            <li className="flex gap-2 items-center text-[20px] mt-6 text-customcolor font-[500] ">
              <img src="./images/fire1.webp" alt='fire1' className="w-4 h-4" />
              Customizable goals to fit your unique lifestyle
            </li>
          </ul>
        
           <div className="bg-btnbg w-fit mr-auto rounded-[10px]">
                        {/* <Link to="/app-download"> */}
                          <div className="text-white text-center  font-[700] text-lg  px-6 py-4  mt-10  ">    Start tracking smarter today!  </div>
                          {/* </Link> */}
                      </div>
        </div>
      </div>
    </section>
  );
};

export default AICalorieSection;
