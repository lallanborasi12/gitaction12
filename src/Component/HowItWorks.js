import React from 'react';

import { Link } from 'react-router';


const HowItWorks = () => {
  return (
    <div className="bg-[#fff] md:px-10 md:py-16 px-4 py-7 md:mb-[100px]">
      <div className='max-w-8xl md:max-w-7xl m-auto flex flex-col md:flex-row gap-10 items-center justify-between  '>
      <div className="md:w-1/2 w-full  ">
        <h2 className="text-customcolor font-[700]  !font-serif text-3xl md:text-4xl lg:text-5xl mt-10"><span className="bg-greenlite  bg-clip-text text-transparent"> How </span> It Works</h2>
        <div className="mt-10  ">
          <div className="flex items-center  space-x-4  ">
            <span className="bg-btnbg text-white text-center px-2 py-2 h-10 min-w-20  rounded-full text-lg font-[500]
            border-[#0D3B1B1A] shadow-[inset_0px_6.25px_6.25px_#FFFFFF33,inset_0px_-4px_5.5px_#0D3B1B33]"> Step 1 </span>
            <p className="text-customcolor font-[400] text-xl ">Set your health goal—weight loss, maintenance, or muscle gain</p>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <span className="bg-btnbg text-white text-center px-2 py-2 h-10 min-w-20  rounded-full text-lg font-[500] 
            border-[#0D3B1B1A] shadow-[inset_0px_6.25px_6.25px_#FFFFFF33,inset_0px_-4px_5.5px_#0D3B1B33]">Step 2</span>
            <p className="text-customcolor font-[400] text-xl">Log your meals with AI-powered recognition or barcode scanning</p>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <span className="bg-btnbg text-white text-center  px-2 py-2 h-10 min-w-20 rounded-full text-lg font-[500] 
            border-[#0D3B1B1A] shadow-[inset_0px_6.25px_6.25px_#FFFFFF33,inset_0px_-4px_5.5px_#0D3B1B33]">Step 3</span>
            <p className="text-customcolor font-[400] text-xl">Get real-time calorie, macro, and nutrient insights</p>
          </div>
        </div>
        <p className="bg-greenlite  bg-clip-text text-transparent font-[500] text-xl mt-5"> No more manual calorie counting just smart, effortless tracking. </p>
        <div className="bg-btnbg w-fit rounded-[10px]">
        {/* <Link to="/app-download"> */}
         <div className="text-white text-center  font-[700] text-lg  px-6 py-4  mt-6   mr-auto">  Download Now  </div>
         {/* </Link> */}
         </div>
      </div>
      <div className=" bg-[#F0F9F3] md:relative  md:w-1/2 w-full mt-12 md:mt-0">
        <div className="absolute  md:-left-[10%] left-2 bg-white shadow-2xl p-6 rounded-xl max-w-xs z-20">
          <div className="flex flex-col ">
             <img src="./images/fire.webp" className=' h-10 w-10 mb-2' alt='fire'/> 
            <div className="text-customcolor font-[700] text-2xl">Instant Calorie Tracking</div>
          </div>
          <p className="text-customcolor font-[400] text-[14px]  opacity-80 mt-2">
            Just click to add your calories and instantly see a detailed macro and micronutrient breakdown—no manual work needed.
          </p>
        </div>
  
        <div className='bg-[#F7F7F7] '>
        <img src="./images/howtowork.webp" alt='howtowork' className='w-auto  h-[60vh]'/> 
        </div>
      </div>
      </div>
    </div>
  );
};

export default HowItWorks;
