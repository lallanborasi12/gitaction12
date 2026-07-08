import { useState, useEffect } from 'react';
import { TfiMenu } from "react-icons/tfi";
import { MdOutlineClose } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  const navItems = [
    { id: "about", label: "Why Us!" },
    // { id: "process", label: "Process" },
    { id: "standup", label: "Stand Out" },
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuClick = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        setActiveMenu(id);
        scrollTo(id);
      }, 100);
    } else {
      setActiveMenu(id);
      scrollTo(id);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      // scroll to hash on refresh or direct access
      const hash = location.hash;
      if (hash) {
        const idname = hash.replace("#", "");
        setActiveMenu(idname);
        setTimeout(() => {
          scrollTo(idname);
          // Remove hash from URL after scrolling
          window.history.replaceState(null, '', '/');
        }, 100);
      }
    } else {
      // other page -> clear active menu
      setActiveMenu('');
    }
  }, [location]);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
      if (location?.pathname !== '/') return;

      let currentId = '';
      for (let item of navItems) {
        const section = document.getElementById(item?.id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 100 && top >= -section.offsetHeight + 100) {
            currentId = item?.id;
            break;
          }
        }
      }

      if (currentId && currentId !== activeMenu) {
        setActiveMenu(currentId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeMenu, location.pathname]);

  return (
    <div className="w-full bg-hedbg sticky top-0 z-50 transition-all duration-300">
      <div className={"max-w-8xl md:max-w-7xl m-auto md:py-5   py-2 md:px-6 px-4"}>
        <div className="flex justify-between items-center">

          <Link to={'/'}>
            <img src="./images/logo.webp" className="w-[120px]" alt="Logo" />
          </Link>

          <div className="hidden md:flex gap-10 items-center">
            {navItems.map(item => (
              <a 
                key={item.id} 
                href={`/#${item.id}`} 
                onClick={() => handleMenuClick(item.id)}
              >
                <div className={`text-[18px] text-customcolor hover:text-[#fb8323] hover:scale-105 font-[500] cursor-pointer ${activeMenu === item.id ? '!bg-greenlite bg-clip-text text-transparent' : ''}`}>
                  {item.label}
                </div>
              </a>
            ))}
            <Link to={'/support'}>
              <div className={`text-[18px] text-customcolor hover:text-[#fb8323] hover:scale-105 font-[500] cursor-pointer ${window?.location?.pathname === "/support" ? '!bg-greenlite bg-clip-text text-transparent' : ''}`}> 
                Support 
              </div>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <MdOutlineClose className='text-customcolor font-extrabold text-[24px]' />
              ) : (
                <TfiMenu className='text-customcolor font-extrabold text-[24px]' />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 mb-4 flex flex-col gap-5 justify-between items-center">
            {navItems.map(item => (
              <a key={item.id}  href={`/#${item.id}`}  onClick={() => handleMenuClick(item.id)}>
                <div className={`text-[18px] text-customcolor hover:text-[#fb8323] hover:scale-105 font-[500] cursor-pointer ${activeMenu === item.id ? '!bg-greenlite bg-clip-text text-transparent' : ''}`}>
                  {item.label}
                </div>
              </a>
            ))}
            <Link to={'/support'}>
              <div className={`text-[18px] text-customcolor hover:text-[#fb8323] hover:scale-105 font-[500] cursor-pointer ${window?.location?.pathname === "/support" ? '!bg-greenlite bg-clip-text text-transparent' : ''}`}> 
                Support 
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}