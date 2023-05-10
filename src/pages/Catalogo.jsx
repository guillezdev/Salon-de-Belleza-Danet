import React from "react";
import { useEffect } from "react";

const gallery = [
  {
    title: "Manicura",
    images: [
      {
        src: "https://st2.depositphotos.com/1033977/5701/i/450/depositphotos_57014635-stock-photo-burgundy-manicure.jpg",
        title: "Manicura 1",
      },
      {
        src: "https://st2.depositphotos.com/4368651/6753/i/450/depositphotos_67531037-stock-photo-floral-design-on-nails.jpg",
        title: "Manicura 2",
      },
      {
        src: "https://st2.depositphotos.com/4368651/6555/i/450/depositphotos_65550039-stock-photo-nails-sea-design.jpg",
        title: "Manicura 3",
      },
      {
        src: "https://st3.depositphotos.com/29384342/50041/i/450/depositphotos_500417456-stock-photo-beautiful-manicure-bright-pattern-black.jpg",
        title: "Manicura 4",
      },
      {
        src: "https://st.depositphotos.com/1033977/2186/i/450/depositphotos_21862717-stock-photo-floral-french-manicure.jpg",
        title: "Manicura 5",
      },
      {
        src: "https://st3.depositphotos.com/29384342/50039/i/450/depositphotos_500397326-stock-photo-beautiful-manicure-nail-polish-wooden.jpg",
        title: "Manicura 6",
      },
    ],
  },
  {
    title: "Pedicura",
    images: [
      {
        src: "https://st.depositphotos.com/1310704/2335/i/450/depositphotos_23357848-stock-photo-pink-manicure-and-pedicure-with.jpg",
        title: "Pedicura 1",
      },
      {
        src: "https://st.depositphotos.com/2283979/3222/i/450/depositphotos_32227561-stock-photo-relaxing-pink-manicure-and-pedicure.jpg",
        title: "Pedicura 2",
      },
      {
        src: "https://static8.depositphotos.com/1450950/942/i/450/depositphotos_9427395-stock-photo-care-for-beautiful-woman-skin.jpg",
        title: "Pedicura 3",
      },
      {
        src: "https://st3.depositphotos.com/8174188/15124/i/450/depositphotos_151249608-stock-photo-female-feet-in-spa-salon.jpg",
        title: "Pedicura 4",
      },
      {
        src: "https://st3.depositphotos.com/29384342/33877/i/450/depositphotos_338777462-stock-photo-beautiful-feet-french-pedicure-resting.jpg",
        title: "Pedicura 5",
      },
      {
        src: "https://st2.depositphotos.com/4431055/11852/i/450/depositphotos_118526140-stock-photo-feet-with-pedicure-and-hands.jpg",
        title: "Pedicura 5",
      },
    ],
  },
  {
    title: "Depilación",
    images: [
      {
        src: "https://st3.depositphotos.com/1177973/18429/i/450/depositphotos_184291186-stock-photo-young-man-with-beautiful-eyebrows.jpg",
        title: "Depilación 1",
      },
      {
        src: "https://st4.depositphotos.com/1177973/20041/i/450/depositphotos_200418822-stock-photo-young-woman-beautiful-eyebrow-closeup.jpg",
        title: "Depilación 2",
      },
      {
        src: "https://st4.depositphotos.com/1177973/20041/i/450/depositphotos_200417482-stock-photo-young-woman-correcting-eyebrow-shape.jpg",
        title: "Depilación 3",
      },
      {
        src: "https://st3.depositphotos.com/1177973/14757/i/450/depositphotos_147577263-stock-photo-beautician-waxing-young-womans-eyebrows.jpg",
        title: "Depilación 4",
      },
      {
        src: "https://st2.depositphotos.com/1518767/8182/i/600/depositphotos_81825092-stock-photo-hand-waxing-womans-eyebrow.jpg",
        title: "Depilación 5",
      },
      {
        src: "https://st.depositphotos.com/5586752/53278/i/450/depositphotos_532780542-stock-photo-macro-photography-model-hairs-master.jpg",
        title: "Depilación 6",
      },
    ],
  },
];

function Catalogo() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mb-6">
          <h2 className="text-3xl font-bold">Galería</h2>
          <div className="w-24 h-1 rounded-lg bg-pink-500 shadow-md shadow-pink-500"></div>
        </div>
        <div className="grid ">
          {gallery.map((section) => (
            <div
              key={section.title}
              className="bg-gray-100 rounded-lg overflow-hidden"
            >
              <h3 className="text-lg font-bold px-4 py-2 bg-gray-200">
                {section.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-1 p-4">
                {section.images.map((image) => (
                  <img
                    key={image.title}
                    src={image.src}
                    alt={image.title}
                    className="rounded-sm h-64 object-cover"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Catalogo;
