import React from "react";
;

const features = [
    {
        image: "./images/aboutbnner1.webp",
        text: "",
    },
    {
        image: "./images/aboutbanner4.webp",
        text: "Track Instantly",
    },
    {
        image: "./images/aboutbanner6.webp",
        text: "Get accurate calorie & macro breakdowns instantly",
    },
    {
        image: "./images/aboutbnner2.webp",
        text: "",
    },
    {
        image: "./images/aboutbnner3.webp",
        text: "",
    },
    {
        image: "./images/aboutbanner5.webp",
        text: "Scan, speak, or type to log food in seconds",
    },
    {
        image: "./images/aboutbanner7.webp",
        text: "AI Precision",
    },
];

const Aboutbanner = () => {
    return (
        
        <div className="max-w-8xl md:max-w-7xl mx-auto md:px-10 md:py-16 px-4 py-7 flex flex-col items-center text-center p-6 md:mb-[100px]  text-white">
            <h2 className="text-3xl md:text-5xl font-bold text-center  !font-serif bg-greenlite  bg-clip-text text-transparent">
                <span className="text-customcolor"> Smarter Health </span>  Starts Here
            </h2>
            <p className="text-customcolor font-[400] text-lg opacity-80  max-w-2xl mt-5 mb-5">
                The most advanced AI-powered calorie calculator, designed to simplify
                nutrition tracking and keep you on top of your health goals—effortlessly.
            </p>
            <div className="grid grid-cols-2  sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-8 mt-6 text-center ">
                <div>
                    <div className="relative group rounded-xl overflow-hidden flex-col flex justify-center items-center">
                        <img src={features[5].image} alt="feature" className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center p-4">
                            <p className="text-white font-bold text-[10px] md:text-base sm:text-sm 2xl:text-2xl text-center">{features[5].text}</p>
                        </div>
                    </div>
                    <div className="relative group rounded-xl overflow-hidden flex-col flex justify-center items-center mt-2">
                        <img src={features[1].image} alt="feature" className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center p-4">
                            <p className="text-white font-bold text-[10px] md:text-base sm:text-sm 2xl:text-2xl text-center">{features[1].text}</p>
                        </div>
                    </div>
                </div>
                <div className="relative group rounded-xl overflow-hidden flex-col flex  justify-start items-start md:justify-end md:items-end">
                    <img src={features[0].image} alt="feature" className="w-full h-80 object-fill transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center p-4">
                        <p className="text-white font-bold text-[10px] md:text-base sm:text-sm 2xl:text-2xl text-center">{features[0].text}</p>
                    </div>
                </div>
                <div className="relative group rounded-xl overflow-hidden flex-col flex  justify-start items-start md:justify-end md:items-end">
                    <img src={features[3].image} alt="feature" className="w-full h-60 object-fill transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center p-4">
                        <p className="text-white font-bold text-[10px]  md:text-base sm:text-sm 2xl:text-2xl text-center">{features[3].text}</p>
                    </div>
                </div>
                <div className="relative group rounded-xl overflow-hidden flex-col flex -mt-[35%] sm:-mt-[0%] md:-mt-[0%]  justify-start items-start md:justify-end md:items-end ">
                    <img src={features[4].image} alt="feature" className="w-full h-80 object-fill transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center p-4">
                        <p className="text-white font-bold text-[10px]  md:text-base sm:text-sm 2xl:text-2xl text-center">{features[4].text}</p>
                    </div>
                </div>
                <div>
                    <div className="relative group rounded-xl overflow-hidden flex-col flex justify-center items-center">
                        <img src={features[2].image} alt="feature" className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center p-4">
                            <p className="text-white font-bold text-[10px] md:text-base sm:text-sm 2xl:text-2xl text-center">{features[2].text}</p>
                        </div>
                    </div>
                    <div className="relative group rounded-xl overflow-hidden flex-col flex justify-center items-center mt-2">
                        <img src={features[6].image} alt="feature" className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center p-4">
                            <p className="text-white font-bold text-[10px] md:text-base sm:text-sm 2xl:text-2xl text-center">{features[6].text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutbanner;
