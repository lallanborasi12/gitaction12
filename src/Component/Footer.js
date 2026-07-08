import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(pathname);
  useEffect(() => {
    setActiveLink(pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  const footerLinks = [
    { path: '/aboutus', label: 'About Us' },
    { path: 'mailto:support@calmateapp.com', label: 'support@calmateapp.com' },
    { path: '/affiliation-support', label: 'Affiliate Support' },
  ];
  const footerLinks1 = [
    { path: '/terms', label: 'Terms' },
    { path: '/privacypolicy', label: 'Privacy Policy' },
    { path: '/how-to-use-app', label: 'How to use app' },
  ];
  return (
    <div className="bg-greenlitebg md:p-6 p-7">
      <div className="max-w-8xl md:max-w-7xl mx-auto">
        <div className='max-w-md items-center  text-center justify-center flex-col m-auto mt-10 mb-5'>
          <p className='text-lg font-normal text-white text-center'>Copyright © {new Date().getFullYear()} EXPLODE MEDIA FZ LLC</p>
          <p className='text-lg font-normal text-white mt-4'>FDAU0194, Compass Building, Al Shohada Road, AL Hamra Industrial Free Zone, RAK, UAE 10055</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-4 md:gap-0">

          {/* Left Links */}
          <div className="flex flex-col sm:flex-row items-center order-1 md:order-1">
            {footerLinks.map((link, index) => (
              <div className={`p-1 ${index > 0 ? 'md:border-l-2 md:border-white' : ''}`} key={index}>
                <Link to={link.path}>
                  <div className={`mr-3 ml-3 text-lg  text-footrcolor font-[400] transition-all relative duration-200 ease-in-out hover:text-[#fb8323] hover:scale-105 ${activeLink === link?.path ? ' !bg-greenlite  bg-clip-text text-transparent' : ''}`}>
                    {link.label}
                    {activeLink === link?.path && (<span className='underlinetex1' />)}
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* Right Links */}
          <div className="flex flex-col sm:flex-row items-center order-2 md:order-3">
            {footerLinks1.map((link, index) => (
              <div className={`p-1 ${index > 0 ? 'md:border-l-2 md:border-white' : ''}`} key={index}>
                <Link to={link.path}>
                  <div className={`mr-3 ml-3 text-lg  text-footrcolor font-[400] transition-all relative duration-200 ease-in-out hover:text-[#fb8323] hover:scale-105 ${activeLink === link?.path ? ' !bg-greenlite  bg-clip-text text-transparent' : ''}`}>
                    {link.label}
                    {activeLink === link?.path && (<span className='underlinetex1' />)}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}
