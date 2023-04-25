import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <><div className="h-16"></div>
      <header className='fixed z-50 top-0 right-0 left-0 bg-white shadow-md shadow-pink-500'>
        <nav className='container mx-auto px-4 py-5 flex justify-between items-center '>
          <Link to='/' className='font-bold text-xl uppercase text-gray-800'>
            Danet
          </Link>
          <ul className='flex space-x-4'>
            <li>
              <Link
                to='/catalogo'
                className='text-gray-800 hover:text-pink-500'
              >
                Catalogo
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors duration-300'
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
