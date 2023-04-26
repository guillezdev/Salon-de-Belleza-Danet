import React from "react";

const tables = [
    {
      title: "Manicura ",
      data: [
        { name: "Aplicación de pintura de gel", price: "$150" },
        { name: "Uñas Acrílicas Cortas", price: "$750" },
        { name: "Rellenos", price: "$500" },
        { name: "Uñas Acrílicas Medianas", price: "$850" },
        { name: "Rellenos", price: "$600" },
        { name: "Uñas Acrílicas Largas", price: "$1000" },
        { name: "Rellenos", price: "$850" },
        { name: "Uñas Acrílicas XXL", price: "$1500" },
        { name: "Rellenos", price: "$1000" },
      ],
    },
    {
        title: "Uñas Curvatura C ",
        data: [
          { name: "Uñas Acrílicas Cortas", price: "$800" },
          { name: "Rellenos", price: "$600" },
          { name: "Uñas Acrílicas Medianas", price: "$900" },
          { name: "Rellenos", price: "$700" },
          { name: "Uñas Acrílicas Largas", price: "$1200" },
          { name: "Rellenos", price: "$900" },
          { name: "Uñas Acrílicas XXL", price: "$1500" },
          { name: "Rellenos", price: "$1200" },
        ],
      },
    {
      title: "Servicios de Depilación",
      data: [
        { name: "Cejas", price: "$180" },
        { name: "Bigotes", price: "$80" },
        { name: "Mentón", price: "$80" },
      ],
    },
  ];

const Table = ({ title, data }) => {
  return (
    <div className='w-full md:w-1/2 p-4'>
      <h2 className='text-2xl font-medium text-gray-900 mb-4'>{title}</h2>
      <div className='overflow-x-auto'>
        <table className='w-full table-fixed'>
          <thead>
            <tr>
              <th className='w-1/2 py-2 px-4 border-gray-400 border-b-2 bg-gray-200 text-left text-sm font-medium text-gray-700 uppercase tracking-wider'>
                Nombre
              </th>
              <th className='w-1/2 py-2 px-4 border-gray-400 border-b-2 bg-gray-200 text-right text-sm font-medium text-gray-700 uppercase tracking-wider'>
                Precio
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className='py-2 px-4 border-gray-400 border-b'>
                  {row.name}
                </td>
                <td className='py-2 px-4 border-gray-400 border-b text-right'>
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const Price = () => {
  return (
    <section className='py-12'>
      <div className='flex flex-col px-10'>
        <h2 className='text-5xl self-center font-bold mb-2'>Precios</h2>
        <div className='w-40 h-1 self-center rounded-lg bg-pink-500 shadow-md shadow-pink-500'></div>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-wrap'>
          {tables.map((table, index) => (
            <Table key={index} title={table.title} data={table.data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
