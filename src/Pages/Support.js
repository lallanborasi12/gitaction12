import React, { useEffect, useState } from "react";
import { API } from '../Api';
import { END_POINT } from '../Api/UrlProvider';
import { Link, json, useNavigate } from "react-router-dom";
import Loders from './Loders';
const Support = ({ user, isLoggedIn }) => {
    const navigate = useNavigate();
    const [errrms, seterrr] = useState();
    const [Description, setDescription] = useState();
    const [username, setusername] = useState();
    const [Emailid, setEmail] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [thankview, setthankview] = useState(0);
    const handleSubmit = async () => {
        const body = {
            fullname: username,
            email: Emailid,
            description: Description,
          };
        API.postAuthAPI(body, END_POINT?.Supportuser, navigate)
            .then((res) => {
                setIsLoading(false);
                if (res.data) {
                    setDescription(null);
                    setthankview(1);
             setTimeout(() => {
          navigate("/");
        }, 5000);
                } else {
                    setIsLoading(false);
                    seterrr(res.error || "An error occurred");
                }
            })
            .catch((error) => {
                setIsLoading(false);
                seterrr(error);
            });
    };

    return (
    <div>
  <Loders isLoading={isLoading} />
  <div className=' md:max-w-7xl max-w-8xl mx-auto  py-7 flex flex-col   p-6 min-h-[calc(100vh-316px)] '>
    { thankview === 0 ?
    <>
  <div className="text-2xl text-center font-semibold border-b pb-2 mb-4 ">Support</div>
    <div className="px-4">
     <div className="bg-white shadow-md rounded-md p-6">
      <form className="w-full">
        <div className="text-lg font-medium text-left mb-4">We want to hear from you</div>
        <label className="block text-sm font-medium text-[#000] mb-1">Full Name</label>
        <input type="text"  value={username || ""}  name="username" placeholder="Enter Name"  onChange={(e) => setusername(e.target.value,"username")} 
         className="w-full p-2 border border-gray-300 rounded mb-4" required />
        <label className="block text-sm font-medium text-black mb-1">Email Address</label>
        <input type="email" value={Emailid || ""} name="email" placeholder="Enter Email id"   onChange={(e) => setEmail(e.target.value,"email")} 
        className="w-full p-2 border border-[#000] rounded mb-4"  required/>
        <label className="block text-sm font-medium text-[#000] mb-1">Description</label>
        <textarea   rows={6}  value={Description || ""} name="Description" placeholder="Description" 
        onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border border-[#000] rounded h-[90px] mb-6" required/>
        <div onClick={handleSubmit}  type="button"  className={`w-full text-center py-2 px-4 rounded 
            ${  Description ? "bg-black text-white hover:bg-[#fb8323] cursor-pointer" : "bg-[#fb8323] text-white cursor-not-allowed"  }`} >
          Submit
        </div>
      </form>
    </div>
  </div>
  </>
  :

  <>
  <div className=' md:max-w-7xl  max-w-8xl mx-auto   flex  '>
<div className="    text-center p-4">
  <div className="flex flex-col p-6 rounded-lg shadow-lg">
    <img src="/images/thankyou.webp" alt="Thakyou" width="auto" height={126} className="mx-auto" />
    <div className="my-2" />
    {/* <div className="text-lg font-medium text-[#000]"> Thakyou  support <span className="text-greenlitecolor font-semibold">{username}</span></div>
    <div className="my-2" /> */}
    <div className="text-lg font-medium text-[#000]"> Submit your query Successfully  </div>
        <div className="my-2" />
       <div className="text-lg font-medium text-[#000]">Contact soon within 24 hours  </div>
        <div className="my-2" />
  </div>
</div>
</div>
  </>
    }
</div>
</div>
    );
};

export default Support;
