import React from "react";
import { Link } from "react-router";
const WhatMake = () => {
  return (
    <div className=" bg-[#fff]  md:px-10 md:py-16 px-4 py-7 ">
      <div className="max-w-8xl md:max-w-7xl m-auto    ">
        <div className="flex md:flex-row flex-col lg:flex-row gap-14 items-center justify-center">
          <div className="md:w-1/2 w-full flex-1  ">
            <div className="text-customcolor !font-serif  text-3xl md:text-4xl lg:text-5xl font-[700]  mb-8">
              What Makes Us <span className="bg-greenlite  bg-clip-text text-transparent">Unique?</span>
            </div>
            <ul >
              {[
                {
                  title: "AI-Powered Food Analysis",
                  desc: "Smarter calorie tracking with machine learning",
                },
                // {
                //   title: "Personalised Nutritional Guidance",
                //   desc: "AI adapts to your preferences",
                // },
                {
                  title: "Instant Meal Logging",
                  desc: "Just snap, scan, tell or type, and AI does the rest",
                },
                {
                  title: "Advanced Macro & Micro Tracking",
                  desc: "Precision beyond just calories",
                },
              ].map((feature) => (
                <li key={feature.title} className="flex items-start gap-3  mt-7">
                  <img src="./images/fire1.webp" alt="fire" className="w-4 h-4" />
                  <div>
                    <p className="text-customcolor text-[22px] font-[500]">
                      {feature.title} –
                    </p>
                    <p className="text-customcolor text-[22px] font-[400]">{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="bg-btnbg w-fit mr-auto rounded-[10px]">
              {/* <Link to="/app-download"> */}
              <div className="text-white text-center  font-[700] text-lg  px-6 py-4  mt-20  ">  See what you eat  </div>
              {/* </Link> */}
            </div>

          </div>
          <div className=" md:w-1/2 w-full flex-1 ttt   justify-center items-center mt-5 md:mt-0 ">
            <img src="./images/healthfoofd.webp" alt="Healthy Food" className="rounded-2xl  w-full h-auto  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMake;
