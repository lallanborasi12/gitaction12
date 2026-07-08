import React from "react";
;
const features = [
    {
        title: "Effortless Tracking",
        text: "Log meals instantly with AI-powered scanning, voice, or text input for accurate calorie and nutrient tracking—no manual work needed!",
        img: "./images/aboutbanner1.webp",
    },
    {
        title: "Accurate Insights",
        text: "Get precise calorie, macro, and micronutrient breakdowns with AI-powered analysis for smarter, data-driven nutrition tracking.",
        img: "./images/aboutbanner2.webp",
    },
    {
        title: "Personalized Experience",
        text: "CalMate adapts to your diet and goals, providing tailored insights for smarter, more effective nutrition tracking.",
        img: "./images/aboutbanner3.webp",
    },
];
const Aboutwhy = () => {
    return (
        <section className="md:px-10 md:py-16 px-4 py-7 bg-hedbg md:mb-[100px] ">
            <div className="max-w-8xl md:max-w-7xl  mx-auto flex flex-col gap-5  ">
                <h2 className=" text-2xl md:text-4xl lg:text-5xl font-bold text-center  !font-serif bg-greenlite  bg-clip-text text-transparent">
                <span className="text-customcolor"> Why Choose </span> CalMate?
                </h2>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
                    {features.map((feature, index) => (
                        <div key={index} className="relative rounded-2xl overflow-hidden shadow-sm p-3">
                            <img src={feature.img} alt={feature.title} className="w-full h-80 object-cover rounded-2xl" />
                            <h3 className="text-customcolor font-[800] text-[26px] mt-5">{feature.title}</h3>
                            <p className="text-customcolor font-[400] text-[20px] mt-5">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Aboutwhy;
