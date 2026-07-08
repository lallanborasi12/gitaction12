import { useEffect, useState } from 'react'
import { Link } from 'react-router';
// import { Link } from 'react-router-dom'
const HowUseApp = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const handleAppRedirect = () => {
    const ua = navigator.userAgent.toLowerCase();

    const playStore = process.env.REACT_APP_ANDROID_LINK
    const appStore = process.env.REACT_APP_IOS_LINK

    if (ua.includes("android")) {
      window.open(playStore, "_blank");
    } else if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod")) {
      window.open(appStore, "_blank");
    } else {
      // default Android
      window.open(playStore, "_blank");
    }
  };
  return (
    <div className=' md:max-w-7xl max-w-8xl mx-auto  py-7 flex flex-col   p-6 min-h-[calc(100vh-175px)] '>
          <h1 className="text-[44px] mb-7 text-center  !font-serif font-bold text-customcolor">How to use Calmate App</h1>    
          {/* <!------------section-1-------------------> */}
          <div className="md:grid md:grid-cols-12 gap-8 items-center mt-12">
            <div className="col-span-4 text-customcolor ">
              <img src="./images/howuseapp1.webp" alt="Log Meals" className="m-auto w-auto  object-cover" />
            </div>
            <div className="col-span-8 text-customcolor">
              <h3 className=" font-bold text-[36px] mb-4  !font-serif text-customcolor" id="navigate-through-app"> Download & Set Up </h3>
              <ul className="list-decimal pl-6 leading-6 md:leading-7 font-normal text-xl sm:text-[22px] 2xl:text-2xl">
                <li className="mb-3" style={{ lineHeight: "1.5" }}><b>Download the App:</b>  Install 
                <span onClick={handleAppRedirect} >
                   <span className='bg-greenlite  bg-clip-text text-transparent font-bold cursor-pointer'> CalMateApp </span> 
                  </span> from your app store.</li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}><b>Complete Your Profile: </b> Enter your age, weight, height, and dietary preferences to personalize your experience.</li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}><b>Create an Account:</b>  Sign up using your email or preferred social login.</li>
                 </ul>
         
            </div>
          </div>
          {/* <!------------section-2-------------------> */}
          <div className="md:grid md:grid-cols-12 gap-8 items-center">
            <div className="col-span-4 text-customcolor order-1 md:order-2">
              <img src="./images/howuseapp2.webp" alt="Log Meals" className="m-auto w-auto object-cover" />
            </div>
            <div className="col-span-8 text-customcolor order-2 md:order-1">
              <h3 className="font-bold text-[32px] mt-10 mb-4  !font-serif text-customcolor"  id="navigate-through-app"> Track Your Calories Easily:</h3>
              <ul className="list-decimal pl-6 leading-6 md:leading-7 font-normal text-xl sm:text-[22px] 2xl:text-2xl">
                <li className="mb-3" style={{ lineHeight: "1.5" }}> <b>Log Your Meals:</b> Add breakfast, lunch, dinner, and snacks with ease—search, scan, or snap!</li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}><b>Smart Suggestions:</b> Get food ideas and serving size recommendations tailored to your goals. </li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}> <b>Custom Meals:</b> Save favorite meals for quicker logging in the future. </li>
              </ul>
            </div>
          </div>
          {/* <!------------section-3-------------------> */}
          <div className="md:grid md:grid-cols-12 gap-8 items-center mt-10">
            <div className="col-span-4 text-customcolor ">
              <img src="./images/howuseapp3.webp" alt="Log Meals" className="m-auto w-auto  object-cover" />
            </div>
            <div className="col-span-8 text-customcolor">
              <h3 className=" font-bold text-[32px] mt-10  !font-serif text-customcolor" id="navigate-through-app">   Set Your Goals: </h3>
              <ul className="list-decimal pl-6 leading-6 md:leading-7 font-normal text-xl sm:text-[22px] 2xl:text-2xl">
                <li className="mb-3" style={{ lineHeight: "1.5" }}><b>Calorie Goals:</b> Choose your daily calorie target based on your health goals.</li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}><b>Macronutrient Focus: </b>Monitor your carbs, fats, and protein balance.</li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}><b>Activity Level: </b>Adjust your daily calorie burn based on how active you are.</li>
              </ul>
            </div>
          </div>
          {/* <!------------section-4-------------------> */}
          <div className="md:grid md:grid-cols-12 gap-8 items-center">
          <div className="col-span-4 text-customcolor order-1 md:order-2">
              <img src="./images/howuseapp4.webp" alt="Log Meals" className="m-auto w-auto  object-cover" />
            </div>
            <div className="col-span-8 text-customcolor order-2 md:order-1 ">
              <h3 className=" font-bold text-[32px] mt-10  !font-serif text-customcolor" id="navigate-through-app">  Stay on Track: </h3>
              <ul className="list-decimal pl-6 leading-6 md:leading-7 font-normal text-xl sm:text-[22px] 2xl:text-2xl">
                <li className="mb-3" style={{ lineHeight: "1.5" }}><b>Daily Reminders: </b> Set helpful notifications for logging meals and staying hydrated.</li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}><b>Smart Alerts: </b> Get nudges when you're nearing or exceeding your daily calorie goal.</li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}><b>Visual Progress:  </b>View charts and trends showing how you’re progressing toward your goals.</li>
              </ul>
            </div>
          </div>
          {/* <!------------section-5-------------------> */}
          <div className="md:grid md:grid-cols-12 gap-8 items-center mt-10">
            <div className="col-span-4 text-customcolor ">
              <img src="./images/howuseapp5.webp" alt="Log Meals" className="m-auto w-auto  object-cover" />
            </div>
            <div className="col-span-8 text-customcolor">
              <h3 className=" font-bold text-[32px] mt-10  !font-serif text-customcolor" id="navigate-through-app"> Explore App Features: </h3>
              <ul className="list-decimal pl-6 leading-6 md:leading-7 font-normal text-xl sm:text-[22px] 2xl:text-2xl">
                <li className="mb-3" style={{ lineHeight: "1.5" }}><b>Recipe Ideas:</b> Discover healthy, calorie-friendly recipes you can make in minutes.</li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}><b>CalMate Insights: </b>Learn about your eating habits with powerful data insights.</li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}><b>Weight Tracker:</b> Keep an eye on your progress with weekly or monthly updates.</li>
                {/* <li className="mb-3" style={{ lineHeight: "1.5" }}><b>Water Tracker:</b> Stay hydrated by logging water throughout the day.</li> */}
              </ul>
            </div>
          </div>
          {/* <!------------section-6-------------------> */}
          <div className="md:grid md:grid-cols-12 gap-8 items-center">
          <div className="col-span-4 text-customcolor  order-1 md:order-2">
              <img src="./images/howuseapp6.webp" alt="Log Meals" className="m-auto w-auto  object-cover" />
            </div>
            <div className="col-span-8 text-customcolor order-2 md:order-1">
              <h3 className=" font-bold text-[32px]  !font-serif mt-10 text-customcolor" id="navigate-through-app"> Final Tips: </h3>
              <ul className="list-decimal pl-6 leading-6 md:leading-7 font-normal text-xl sm:text-[22px] 2xl:text-2xl">
                <li className="mb-3" style={{ lineHeight: "1.5" }}><b>Stay Consistent:</b> Log every meal, even the small ones—they add up!</li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}><b>Be Honest:</b> Track everything you eat for the most accurate results.</li>
                <li className="mb-3" style={{ lineHeight: "1.5" }}><b>Celebrate Progress:</b> Every step forward counts—small wins lead to big results.</li>
              </ul>
            </div>
          </div>
        </div>
  

  )
}

export default HowUseApp
