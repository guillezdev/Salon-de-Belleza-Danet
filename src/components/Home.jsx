import { Services } from "./Services";
import { FaPhoneAlt } from "react-icons/fa";
function Home() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      {/* Banner */}
      <div className='bg-gradient-to-r from-gray-900 to-pink-500 py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-5xl font-bold text-white mb-4'>
            Tu belleza es nuestra prioridad
          </h2>
          <p className='text-gray-100 text-lg mb-8'>
            En nuestro salón de belleza ofrecemos una amplia variedad de
            servicios para que te veas y te sientas radiante. ¡Agenda tu cita
            hoy mismo!
          </p>
          <a href='tel:+5355389929'>
            <button className='btn'>Agenda tu cita</button>
          </a>
        </div>
      </div>
      <Services />
      <section className='bg-gray-100 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <h2 className='text-base text-pink-600 font-semibold tracking-wide uppercase'>
              Cómo encontrarnos
            </h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Visítanos en nuestro salón de belleza
            </p>
          </div>

          <div className='mt-10'>
            <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center h-12 w-12 rounded-md bg-pink-600 text-white'>
                    <svg
                      className='h-6 w-6'
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z'
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className='ml-4'>
                  <dt className='text-lg leading-6 font-medium text-gray-900'>
                    Dirección
                  </dt>
                  <dd className='mt-2 text-base text-gray-500'>
                    Calle 123, Reparto Peñas Altas, Matanzas, Cuba
                  </dd>
                </div>
              </div>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center h-12 w-12 rounded-md bg-pink-600 text-white'>
                    <FaPhoneAlt />
                  </div>
                </div>
                <div className='ml-4'>
                  <dt className='text-lg leading-6 font-medium text-gray-900'>
                    Teléfono
                  </dt>
                  <dd className='mt-2 text-base text-gray-500'>
                    <a href='tel:+5355389929'>+5355389929</a>
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
