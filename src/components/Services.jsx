import React from "react";
import Manicura from "../assets/Manicura.jpg";
import Pedicura from "../assets/Pedicura.jpg";
import Depilacion from "../assets/Depilacion.jpg";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <section className='bg-white py-16 max-w-7xl mx-auto'>
      <div className="flex flex-col px-10">
        <h2 className='text-5xl self-center font-bold mb-2'>Servicios</h2>
        <div className='w-44 h-1 self-center rounded-lg bg-pink-500 shadow-md shadow-pink-500'></div>
      </div>
      <div className='flex flex-wrap justify-center'>
        {/* Manicura */}
        <div className='max-w-sm rounded overflow-hidden shadow-lg m-4'>
          <img className='w-full' src={Manicura} alt='Manicura' />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>Manicura</div>
            <p className='text-gray-700 text-base'>
              Nuestro servicio de manicura incluye limpieza de cutículas, limado
              y pulido de uñas, aplicación de esmalte y masaje de manos. ¡Deja
              que tus manos luzcan hermosas!
            </p>
          </div>
          <div className='px-6 py-4'>
            <Link
              to='/catalogo#manicura'
              className='bg-pink-500 hover:bg-gray-900 uppercase text-white font-bold py-2 px-4 rounded'
            >
              Galeria
            </Link>
          </div>
        </div>
        {/* Pedicura */}
        <div className='max-w-sm rounded overflow-hidden shadow-lg m-4'>
          <img className='w-full' src={Pedicura} alt='Pedicura' />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>Pedicura</div>
            <p className='text-gray-700 text-base'>
              Siéntete mimada con nuestro servicio de pedicura, que incluye
              remoción de durezas, limpieza de cutículas, limado y pulido de
              uñas, y aplicación de esmalte. ¡Tus pies se lo merecen!
            </p>
          </div>
          <div className='px-6 py-4'>
            <Link
              to='/catalogo'
              className='bg-pink-500 hover:bg-gray-900 uppercase text-white font-bold py-2 px-4 rounded'
            >
              Galeria
            </Link>
          </div>
        </div>

        {/* Depilación */}
        <div className='max-w-sm rounded overflow-hidden shadow-lg m-4'>
          <img className='w-full' src={Depilacion} alt='Depilación' />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>Depilación</div>
            <p className='text-gray-700 text-base'>
              Ofrecemos servicios de depilación en diversas áreas del cuerpo,
              utilizando técnicas suaves y efectivas. ¡Libérate del vello no
              deseado y siéntete cómoda en tu propia piel!
            </p>
          </div>
          <div className='px-6 py-4'>
            <Link
              to='/catalogo'
              className='bg-pink-500 hover:bg-gray-900 uppercase text-white font-bold py-2 px-4 rounded'
            >
              Galeria
            </Link>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};
