import React from 'react'

const categories = [
  'Electrónicos',
  'Ropa y Accesorios',
  'Hogar y Jardín',
  'Deportes',
  'Libros',
  'Juguetes',
  'Arte y Manualidades',
  'Música',
]

export default function PopularCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 xl:px-20 text-center">
        <h2 className="text-3xl xl:text-4xl font-bold mb-4">Categorías Populares</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Explora las diferentes categorías de productos disponibles para intercambio.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className="border border-teal-400 text-teal-600 px-6 py-2 rounded-full hover:bg-teal-50 transition"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
