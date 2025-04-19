
import React from 'react'
import { motion } from 'framer-motion';

const dummyPerfume = [
  {
    "pid": "idpbaa",
    "brand": "Teresa Helbig",
    "name": "Georgette",
    "parent": null,
    "img": "https://media.parfumo.com/perfumes/9d/9d1f0c-georgette-teresa-helbig_1200.jpg",
    "imgs": "[\"https://media.parfumo.com/perfume_imagery/0a/0abd57-georgette-teresa-helbig_1200.jpg\"]",
    "sex": "F",
    "origin": "ES",
    "year": 2018,
    "type": "M",
    "available": "Y",
    "limited": "N",
    "collector": "N",
    "rating": 3.72,
    "ratingVotes": 20,
    "longevity": 3.96,
    "sillage": 3.4,
    "video": null,
    "brandUrl": "https://www.teresahelbig.com",
    "brandImg": "https://fimgs.net/mdimg/dizajneri/m.2972.jpg",
    "perfumers": "[]",
    "designers": null,
    "accords": "[\"Floral\",\"Spicy\",\"Woody\",\"Resinous\",\"Sweet\"]",
    "top": "[]",
    "heart": "[]",
    "base": "[\"Vanilla\",\"Benzoin\",\"Cardamom\",\"Cedarwood\",\"Magnolia\",\"Nutmeg\",\"Orange\",\"Sandalwood\",\"Grapefruit\",\"Mandarin Orange\",\"Labdanum\",\"Patchouli\"]"
  },
  {
    "pid": "b3OLkD",
    "brand": "Unifrom",
    "name": "Limbo",
    "parent": null,
    "img": "https://media.parfumo.com/perfumes/01/019e84-limbo-unifrom_1200.jpg",
    "imgs": "[\"https://media.parfumo.com/perfume_imagery/aa/aa99a5-limbo-unifrom_1200.jpg\",\"https://media.parfumo.com/perfume_imagery/65/658de3-limbo-unifrom_1200.jpg\"]",
    "sex": "U",
    "origin": "SE",
    "year": 2020,
    "type": "M",
    "available": "N",
    "limited": "N",
    "collector": "N",
    "rating": 3.92,
    "ratingVotes": 4,
    "longevity": null,
    "sillage": null,
    "video": null,
    "brandUrl": null,
    "brandImg": null,
    "perfumers": "[\"Marie Schnirer\"]",
    "designers": null,
    "accords": "[\"Synthetic\",\"Woody\",\"Floral\",\"Sweet\"]",
    "top": "[]",
    "heart": "[]",
    "base": "[\"Hay\",\"Myrrh\",\"Rhubarb\",\"Sandalwood\",\"Vanilla\",\"White Musk\",\"Ylang-ylang\"]"
  },
  {
    "pid": "iBAaCZ",
    "brand": "Eau d'Italie",
    "name": "Fior Fiore",
    "parent": null,
    "img": "https://media.parfumo.com/perfumes/1a/1a3850-fior-fiore-eau-d-italie_1200.jpg",
    "imgs": "[\"https://media.parfumo.com/perfume_imagery/f5/f59964-fior-fiore-eau-d-italie_1200.jpg\",\"https://media.parfumo.com/perfume_imagery/70/7055f3-fior-fiore-eau-d-italie_1200.jpg\"]",
    "sex": "U",
    "origin": "IT",
    "year": 2018,
    "type": "M",
    "available": "Y",
    "limited": "N",
    "collector": "N",
    "rating": 3.61,
    "ratingVotes": 44,
    "longevity": 3.68,
    "sillage": 3.52,
    "video": null,
    "brandUrl": null,
    "brandImg": null,
    "perfumers": "[\"Olivier Cresp\"]",
    "designers": null,
    "accords": "[\"Fresh\",\"Floral\",\"Fruity\",\"Sweet\",\"Green\"]",
    "top": "[\"Lily Of The Valley\",\"Pear\"]",
    "heart": "[\"Jasmine\",\"Jasmine Sambac\"]",
    "base": "[\"Ambrette Seed\"]"
  },
]

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <motion.section
        className="relative min-h-[calc(100vh)] bg-gradient-to-b from-white to-[#FAB26F] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero content */}
        <div className="container mx-auto px-4 pt-8 pb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#764929] text-center max-w-6xl mt-8">
            Discover the Essence of Elegance
          </h2>
          <p className="text-lg md:text-xl text-center max-w-3xl">
            Elevate your presence with scents designed for beauty, grace, and allure.
          </p>

          {/* Perfume Bottle */}
          <motion.div
            className="relative w-full max-w-md h-[400px] my-8"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/assets/hero.png"
              alt="Luxury perfume bottle"
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Scroll Down */}
          <motion.div
            className="flex flex-col items-center mt-8 cursor-pointer hover:opacity-80 transition-opacity"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="text-black mb-1">scroll down</span>
            <svg
              className="scroll-down-arrow"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <section className="mx-auto pt-16 bg-gradient-to-b from-[#FAB26F] via-[#FFE2B4] to-white min-h-[680px] px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold inline-block font-playfair">About Us</h2>
          <div className="h-px bg-black w-48 mx-auto mt-2"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-20 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div>
              <p className="text-lg md:text-xl leading-relaxed">
                <span className="text-3xl md:text-4xl lg:text-5xl font-serif block mb-4 text-[#764929] font-medium">
                  Fleur de Janes
                </span>
                is an online perfume boutique that brings timeless elegance through carefully curated fragrances. Our
                collection is designed for individuals who seek sophistication in every scent they wear.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[url(/assets/udobg.png)] bg-no-repeat bg-cover bg-center text-white p-10 md:p-12 rounded-xl max-w-5xl mx-auto relative z-10 shadow-lg">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] bg-cover bg-center opacity-20 rounded-xl"></div>

          <h3 className="text-3xl md:text-4xl font-serif mb-8 relative">What you can do:</h3>

          <ul className="space-y-2 relative">
            <li className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-white">•</span>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-1">Curated Selection</h4>
                <p className="text-white/90 text-lg">
                  Explore a range of exclusive fragrances crafted with premium ingredients.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-white">•</span>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-1">Smart Product Discovery</h4>
                <p className="text-white/90 text-lg">
                  Use our intuitive search to find the perfect scent for any occasion.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-white">•</span>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-1">Personal Assistance</h4>
                <p className="text-white/90 text-lg">
                  Connect with our customer support for personalized fragrance recommendations.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-10 flex justify-end">
            <a
              href="#contact"
              className="inline-flex items-center text-lg font-medium border-b border-white/70 pb-1 hover:border-white transition-colors"
            >
              Contact our team
              <svg
                className="ml-2 w-5 h-5 arrow-right"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Best Seller Section */}
      <motion.section
        className="py-16 container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold inline-block font-playfair">Best Seller</h2>
          <div className="h-px bg-black w-48 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dummyPerfume.map((perfume) => (
            <motion.div
              key={perfume.pid}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="bg-[#d9d9d9] w-full aspect-square mb-4">
                <img
                  src={perfume.img}
                  alt={perfume.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif">{perfume.name}</h3>
              <p className="text-sm text-gray-600">
                {perfume.type === "M" ? "Eau de parfum" : "Other type"} · {perfume.year}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* New Launch Section */}
      <motion.section
        className="py-16 container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold inline-block font-playfair">New Launch</h2>
          <div className="h-px bg-black w-55 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto jus ">
          {/* New Product 1 */}
          <motion.div
            className="bg-[#fef6ee] p-8 flex flex-col items-center rounded-sm shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full max-w-[200px] aspect-square mb-4">
              <img
                src="/assets/fahrenheit.png"
                alt="Fahrenheit perfume"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-serif">Fahrenheit</h3>
            <p className="text-sm text-gray-600">Castoreum and Gaiac Wood</p>
          </motion.div>

          {/* New Product 2 */}
          <motion.div
            className="bg-[#fef6ee] p-8 flex flex-col items-center rounded-sm shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full max-w-[200px] aspect-square mb-4 ">
              <img
                src="/assets/sunkiss.png"
                alt="Sunkiss perfume"
                width={300}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-serif">Celcius</h3>
            <p className="text-sm text-gray-600">Kahili, Ginger, and Wild Rose</p>
          </motion.div>

          {/* New Product 3 */}
          <motion.div
            className="bg-[#fef6ee] p-8 flex flex-col items-center rounded-sm shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full max-w-[200px] aspect-square mb-4 ">
              <img
                src="/assets/kelvin.png"
                alt="Kelvin perfume"
                width={300}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-serif">Kelvin</h3>
            <p className="text-sm text-gray-600">cedarwood, musk, and vanilla</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section
        className="md:pt-16 md:py-0 py-16 container mx-auto px-4 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div className="aspect-[3/4] relative">
            <img
              src="/assets/girl.png"
              alt="Person holding perfume"
              className="w-full h-full object-cover rounded-special"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left font-playfair">
              This is what they say
            </h2>
            <blockquote className="mb-8">
              <p className="text-md text-center md:text-left">
                "Fleur de Janes scent is delicate yet lasting, effortlessly elevating my presence wherever I go. Every note feels carefully crafted—sophisticated, timeless, and uniquely mine. I receive compliments every time I wear it. Truly a masterpiece in a bottle." - Alexa
              </p>
            </blockquote>
            <div className="text-center md:text-left">
              <a
                href="#"
                className="bg-[#d97f41] text-white py-4 px-8 rounded-md text-center text-lg font-light hover:bg-[#c06a30] transition-colors max-w-xs mx-auto md:mx-0 drop-shadow-md"
              >
                Find Your Signature
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home