import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import danet from "../assets/Danet.jpg";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className='h-12'></div>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 shadow-md shadow-pink-500  bg-white`}
      >
        <div className='container mx-auto py-2 px-6 md:px-8'>
          <div className='flex justify-between items-center'>
            <NavLink
              to={"/"}
              className='flex items-center p-0 m-0 self-center font-bold text-gray-800 cursor-pointer select-none hover:scale-90'
            >
              <img src={danet} className='h-12' alt='Numeria' />
              Danet
            </NavLink>
            <div className='hidden md:block'>
              <ul className='flex items-center space-x-4'>
                <li>
                  <NavLink
                    to={"/"}
                    className='text-gray-800 font-semibold hover:text-pink-500 cursor-pointer select-none'
                  >
                    Inicio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/catalogo"}
                    className='text-gray-800 font-semibold hover:text-pink-500 cursor-pointer select-none'
                  >
                    Galeria
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/contact"}
                    className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors duration-300'
                  >
                    Contacto
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className='md:hidden'>
              <label className='hamburger'>
                <input type='checkbox' onClick={() => setIsOpen(!isOpen)} />
                <svg viewBox='0 0 32 32'>
                  <path
                    className='line line-top-bottom'
                    d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'
                  ></path>
                  <path className='line' d='M7 16 27 16'></path>
                </svg>
              </label>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter='transition ease-out duration-100 transform'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='transition ease-in duration-75 transform'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            {
              <div className='md:hidden mt-4'>
                <ul className='flex flex-col space-y-2'>
                  <li>
                    <NavLink
                      to={"/"}
                      className='text-gray-800 font-semibold hover:text-pink-500 cursor-pointer select-none'
                    >
                      Inicio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/catalogo"}
                      className='text-gray-800 font-semibold hover:text-pink-500 cursor-pointer select-none'
                    >
                      Galeria
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/contact"}
                      className='text-gray-800 font-semibold hover:text-pink-500 cursor-pointer select-none'
                    >
                      Contacto
                    </NavLink>
                  </li>
                </ul>
              </div>
            }
          </Transition>
        </div>
      </nav>
    </>
  );
};

export default Header;
