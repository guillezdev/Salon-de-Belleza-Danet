import React from "react";
import Depilacion from "../assets/Depilacion.jpg";
import Manicura from "../assets/Manicura.jpg";
import Pedicura from "../assets/Pedicura.jpg";
import { useEffect } from "react";

function Catalogo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section className='py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold mb-6'>Galería</h2>
        <div className='grid '>
          <div id='manicura' className='bg-gray-100 rounded-lg overflow-hidden'>
            <h3 className='text-lg font-bold px-4 py-2 bg-gray-200'>
              Manicura
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-1 p-4'>
              <img
                src={Manicura}
                alt='Manicura'
                className='rounded-sm h-64 object-cover'
              />
              <img
                src={Manicura}
                alt='Manicura'
                className='rounded-sm h-64 object-cover'
              />
              <img
                src={Manicura}
                alt='Manicura'
                className='rounded-sm h-64 object-cover'
              />
              <img
                src={Manicura}
                alt='Manicura'
                className='rounded-sm h-64 object-cover'
              />
              <img
                src={Manicura}
                alt='Manicura'
                className='rounded-sm h-64 object-cover'
              />
              <img
                src={Manicura}
                alt='Manicura'
                className='rounded-sm h-64 object-cover'
              />
            </div>
          </div>
          <div className='bg-gray-100 rounded-lg overflow-hidden'>
            <h3 className='text-lg font-bold px-4 py-2 bg-gray-200'>
              Pedicura
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 p-4'>
              <img
                src={Pedicura}
                alt='Manicura'
                className='rounded-sm h-64 object-cover'
              />
              <img
                src={Pedicura}
                alt='Manicura'
                className='rounded-sm h-64 object-cover'
              />
              <img
                src={Pedicura}
                alt='Manicura'
                className='rounded-sm h-64 object-cover'
              />
              <img
                src={Pedicura}
                alt='Manicura'
                className='rounded-sm h-64 object-cover'
              />
              <img
                src={Pedicura}
                alt='Manicura'
                className='rounded-sm h-64 object-cover'
              />
              <img
                src={Pedicura}
                alt='Manicura'
                className='rounded-sm h-64 object-cover'
              />
            </div>
          </div>
          <div className='bg-gray-100 rounded-lg overflow-hidden'>
            <h3 className='text-lg font-bold px-4 py-2 bg-gray-200'>
              Microblanding
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 p-4'>
              <img
                src={Depilacion}
                alt='Manicura'
                className='rounded-sm h-64 object-cover'
              />
              <img
                src={Depilacion}
                alt='Manicura'
                className='rounded-sm h-64 object-cover'
              />
              <img
                src={Depilacion}
                alt='Manicura'
                className='rounded-sm h-64 object-cover'
              />
              <img
                src={Depilacion}
                alt='Manicura'
                className='rounded-sm h-64 object-cover'
              />
              <img
                src={Depilacion}
                alt='Manicura'
                className='rounded-sm h-64 object-cover'
              />
              <img
                src={Depilacion}
                alt='Manicura'
                className='rounded-sm h-64 object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalogo;
