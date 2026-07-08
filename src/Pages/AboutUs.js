import React, { useEffect } from "react";
import Nutrition from "../Component/Nutrition";
import Aboutbanner from "../Component/Aboutbanner";
import Aboutwhy from "../Component/Aboutwhy";
import FaqSection from "../Component/FaqSection";
import HowItWorks from "../Component/HowItWorks";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (

    <div >
      <Aboutbanner/>
      <HowItWorks/>
      <Aboutwhy/>
      <section className="md:px-10 md:py-16 px-4 py-7 bg-hedbg md:mb-[100px] ">
        <div className="md:max-w-7xl max-w-8xl  mx-auto flex flex-col gap-5 items-center  ">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-greenlite bg-clip-text text-transparent">
          Calorie  <span className="text-customcolor">calculation Used by 200k people</span>
          </h2>
          <div>
            <img src="./images/wordmap.webp" alt="woldmap" />
          </div>
        </div>
      </section>
      <FaqSection/>
      <Nutrition/>
    </div>

  );
};

export default AboutUs;
