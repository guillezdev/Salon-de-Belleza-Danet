import { Services } from "./Services";
import { Price } from "./Price";
import { FaPhoneAlt, FaWhatsapp, FaClock } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=' min-h-screen'>
      {/* Banner */}
      <div className='bg-gradient-to-r from-gray-900 to-pink-500 py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-5xl font-bold text-white mb-4'>
            Tu belleza es nuestra prioridad
          </h2>
          <p className='text-gray-100 text-lg mb-8'>
            Resalta tu belleza natural con nuestros exclusivos servicios de alta
            calidad. ¡Agenda hoy y disfruta de una experiencia única y
            personalizada!
          </p>
          <a href='tel:+5355389929'>
            <button className='flex justify-center items-center btn'>
              <span className='relative pr-3 '>
                <FaPhoneAlt size={20} />
              </span>
              Agenda tu cita
            </button>
          </a>
        </div>
      </div>
      <Services />
      <Price />
      <section className='bg-gray-100 py-12'>
        {" "}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {" "}
          <div className='lg:text-center'>
            {" "}
            <h2 className='text-base text-pink-500 font-semibold tracking-wide uppercase'>
              {" "}
              Cómo encontrarnos{" "}
            </h2>{" "}
            <p className='mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl'>
              {" "}
              Visítanos en nuestro salón de belleza{" "}
            </p>{" "}
          </div>
          <div className='mt-10'>
            <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white'>
                    <SlLocationPin className='text-white' size={30} />
                  </div>
                </div>
                <div className='ml-4'>
                  <dt className='text-lg leading-6 font-medium text-gray-900'>
                    Dirección
                  </dt>
                  <dd className='mt-2 text-base text-gray-500'>
                    Calle 165, Reparto Peñas Altas, Matanzas, Cuba
                  </dd>
                </div>
              </div>
              <a href='tel:+5355389929' className='flex'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white'>
                    <FaPhoneAlt size={30} />
                  </div>
                </div>
                <div className='ml-4'>
                  <dt className='text-lg leading-6 font-medium text-gray-900'>
                    Teléfono
                  </dt>
                  <dd className='mt-2 text-base text-gray-500'>+5355389929</dd>
                </div>
              </a>
              <a href='https://wa.me/+5355389929' className='flex'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white'>
                    <FaWhatsapp size={30} />
                  </div>
                </div>
                <div className='ml-4'>
                  <dt className='text-lg leading-6 font-medium text-gray-900'>
                    Whatsapp
                  </dt>
                  <dd className='mt-2 text-base text-gray-500'>+5355389929</dd>
                </div>
              </a>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white'>
                    <FaClock size={30} />
                  </div>
                </div>
                <div className='ml-4'>
                  <dt className='text-lg leading-6 font-medium text-gray-900'>
                    Horario
                  </dt>
                  <dd className='mt-2 text-base text-gray-500'>
                    Martes a Domingo: 10:00am - 8:00pm
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
