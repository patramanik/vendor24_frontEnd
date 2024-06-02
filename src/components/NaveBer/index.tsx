
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import DarkModeSwitcher from '../Header/DarkModeSwitcher';
import DropdownUser from '../Header/DropdownUser';
import LogoIcon from '../../images/logo/logo-icon.svg';
import Popup from '../Popup/Popup';
import usePopup from '../../hooks/usePopup';
import { useState, useEffect } from 'react';

import UserOne from '../../images/user/user_icon.png';

const NaveBer = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const { isOpen, openPopup, closePopup } = usePopup();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Replace this useEffect with your actual authentication check
  useEffect(() => {
    // Example: Check local storage or make an API call to verify login status
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
  }, []);

  return (
    <header className="sticky top-0 z-[999] flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* Hamburger Toggle Button */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-[99999] block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-full rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${props.sidebarOpen ? 'delay-300' : ''
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-full rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${props.sidebarOpen ? 'delay-400' : ''
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-full rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${props.sidebarOpen ? 'delay-500' : ''
                    }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${props.sidebarOpen ? '!h-0 !delay-[0]' : ''
                    }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${props.sidebarOpen ? '!h-0 !delay-200' : ''
                    }`}
                ></span>
              </span>
            </span>
          </button>
          {/* Hamburger Toggle Button */}
        </div>
        <div className="inline-flex items-center space-x-2">
          <img src={LogoIcon} alt="Logo" />
          <span className="font-bold">Vendor24</span>
        </div>
        {/* <div className="hidden sm:block">
          <ul className="mt-4 mb-5.5 gap-1.5 pl-6 inline-flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  'group relative flex gap-2.5 rounded-md px-4 font-medium text-black dark:text-white duration-300 ease-in-out hover:text-white ' +
                  (isActive ? '!text-primary' : '')
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  'group relative flex gap-2.5 rounded-md px-4 font-medium text-black dark:text-white duration-300 ease-in-out hover:text-white ' +
                  (isActive ? '!text-primary' : '')
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div> */}

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
          </ul>
          {isLoggedIn ? <DropdownUser  /> : <Link
      className="flex items-center gap-4"
      to="/auth/signin"
    >
      <span className="h-12 w-12 rounded-full">
        <img src={UserOne} className='rounded-full' alt="User" />
      </span>
    </Link>}
          <Popup isOpen={isOpen} onClose={closePopup} title="Example Popup">
            <button
              onClick={closePopup}
              className="px-4 py-2 bg-red-500 text-white rounded mt-4"
            >
              Close
            </button>
          </Popup>
        </div>
      </div>
    </header>
  );
};

export default NaveBer;
