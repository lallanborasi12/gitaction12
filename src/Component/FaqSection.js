import React, { useState } from "react";
import { Link } from "react-router";

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        {
            title: "How accurate is CalMate's AI calorie calculator?",
            desc: "CalMate’s AI is trained on a vast food database and machine learning algorithms, ensuring highly accurate calorie and macro breakdowns. It also improves over time based on your usage.",
        },
        {
            title: "Can I use CalMate for different diet plans (Keto, Vegan, etc.)?",
            desc: "Yes, CalMate supports various diet plans like Keto, Vegan, and more by providing personalized calorie and nutrient tracking tailored to your dietary preferences and goals.",
        },
        {
            title: "How accurate is the calorie tracking?",
            desc: "CalMate uses AI trained on an extensive food database, delivering highly accurate calorie and macro estimates with every log.",
        },
        {
            title: "Do I need to log every ingredient manually?",
            desc: "Nope! Just scan, speak, or type the food—CalMate does the rest with AI-powered recognition and automatic breakdowns.",
        },
        {
            title: "How does AI improve my calorie tracking experience?",
            desc: "AI simplifies tracking by recognizing foods, calculating accurate calories and nutrients instantly, and providing personalized insights based on your habits—saving you time and boosting accuracy.",
        },
    ];
    const handleToggle = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };
    return (
        <div className=" bg-[#fff]  md:px-10 md:py-16 px-4 py-7 md:mb-[100px] ">
            <div className="max-w-8xl md:max-w-7xl m-auto  ">
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                    <div className="mb-0 md:mb-10 md:w-1/2">
                        <div className="text-customcolor font-[500]  !font-serif  text-3xl md:text-4xl lg:text-5xl mt-10 mb-6 leading-tight">
                            Have Questions? <br />
                            <span className="bg-greenlite  bg-clip-text text-transparent">We‘ve Got Answers.</span>
                        </div>
                          {/* <div className="bg-btnbg w-fit mr-auto rounded-[10px]">
                                       <Link to="/contactus">
                                        <div className="text-white text-center  font-[700] text-sm  px-6 py-4  mt-6  ">  Contact Us  </div>
                                      </Link>
                             </div> */}
                       
                    </div>
                    <div className="lg:w-1/2 w-full  ">
                        {faqs.map((question, index) => (
                            <div key={index} className={`cursor-pointer p-5 transition 
                                ${openIndex === index ? 'bg-[#F7F7F7] rounded-tl-xl rounded-tr-xl border-b-2 border-[#222222]'
                               : index === faqs.length - 1 ? '' : 'border-b-2 border-[#22222233]'}`}
                                onClick={() => handleToggle(index)} >
                                <p className="text-customcolor font-[700] text-xl flex justify-between items-center">
                                    {question.title}
                                    {/* <span className="text-xl">
                                    {openIndex === index ? "−" : "+"}
                                </span> */}
                                </p>
                                {openIndex === index && (
                                    <p className="text-customcolor font-[400] text-lg  opacity-40  mt-2"> {question.desc} </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
