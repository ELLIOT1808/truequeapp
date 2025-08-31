import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Regístrate',
    description: 'Crea tu cuenta gratuita y completa tu perfil para comenzar a intercambiar.',
  },
  {
    number: '02',
    title: 'Publica tus productos',
    description: 'Sube fotos y describe los artículos que quieres intercambiar con detalles y categorías.',
  },
  {
    number: '03',
    title: 'Encuentra coincidencias',
    description: 'Nuestro sistema te sugerirá intercambios perfectos basados en tus intereses.',
  },
  {
    number: '04',
    title: 'Intercambia',
    description: 'Envía solicitudes, confirma intercambios y disfruta de tus nuevos productos.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-screen-xl mx-auto px-6 xl:px-20">
        <h2 className="text-3xl xl:text-4xl font-bold text-center mb-4">Cómo Funciona</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          En solo 4 pasos simples puedes comenzar a intercambiar productos y formar parte de nuestra comunidad colaborativa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 text-center">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <div className="bg-teal-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-lg font-semibold mb-3">
                {step.number}
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
