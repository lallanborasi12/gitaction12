import React from 'react';
import { useNavigate } from "react-router";
export default function Nopage() {
    const navigate = useNavigate();
    return (
        <div className="mx-auto max-w-xs mt-10 mb-10 flex flex-col items-center min-h-full h-[calc(100vh-285px)]">
            <img src="./images/notpage.webp" alt="notpage" width={"100%"}  />
            <div className=" text-[14px] text-customcolor font-[500] mt-5 mb-5 text-center">I cannot find the file you requested!</div>
            <div className="text-[14px] text-customcolor font-[500] mt-5 mb-5  text-center">the page you are looking for not avaible!</div>
            <div className="bg-btnbg text-[#fff] rounded-[10px] font-[700] text-[14px]
             pt-4 pb-4 pl-7 pr-7 max-w-xs m-auto text-center w-fit" onClick={() => navigate("/")}>Go Back Home</div>
        </div>
    );
}

