import React, { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Agrega aquí el código para enviar el mensaje
    console.log(`Nombre: ${name}, Email: ${email}, Mensaje: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className='bg-gray-100 py-16'>
      <div className='container mx-auto px-4'>
        <h1 className='text-5xl font-bold text-gray-900 mb-8'>Contáctanos</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 md:flex-row-reverse gap-8'>
          <div>
            <p className='text-lg text-gray-600 mb-4'>
              ¿Tienes alguna pregunta? ¿Quieres programar una cita? ¡Contáctanos
              hoy mismo!
            </p>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-gray-900 font-bold mb-2'
                >
                  Nombre
                </label>
                <input
                  type='text'
                  id='name'
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className='border border-gray-400 py-2 px-4 w-full rounded-md'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-gray-900 font-bold mb-2'
                >
                  Correo Electrónico
                </label>
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className='border border-gray-400 py-2 px-4 w-full rounded-md'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='message'
                  className='block text-gray-900 font-bold mb-2'
                >
                  Mensaje
                </label>
                <textarea
                  id='message'
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className='border border-gray-400 py-2 px-4 w-full rounded-md'
                ></textarea>
              </div>
              <button
                type='submit'
                className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors duration-300'
              >
                Enviar
              </button>
            </form>
          </div>
          <div>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              Ubicación
            </h2>
            <p className='text-lg text-gray-600 mb-4'>
              Calle 123, Reparto Peñas Altas
              <br />
              Matanzas, Cuba
            </p>
            <iframe
              title='Google Maps'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.922382367736!2d-81.53182068479565!3d23.037813184936953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d39e6fde8a69f93%3A0xb0d9a9d8d9b1c2e0!2s23.037472%2C%20-81.529632!5e0!3m2!1sen!2sus!4v1653450633051!5m2!1sen!2sus'
              className='w-full h-96 rounded-lg'
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
