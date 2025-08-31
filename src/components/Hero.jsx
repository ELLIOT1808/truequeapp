import React from 'react';
import SuggestedSwapCard from './SuggestedSwapCard';
import Stats from './Stats';

export default function Hero() {
  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-[1600px] mx-auto px-6 xl:px-20 2xl:px-32 grid md:grid-cols-2 items-center gap-16 xl:gap-24">
        {/* Texto principal */}
        <div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Intercambia sin <span className="text-teal-600">dinero</span>
          </h1>
          <p className="text-gray-700 text-lg lg:text-xl mb-8">
            Conecta con personas de tu comunidad para intercambiar productos que ya no usas por artículos que realmente necesitas. Promueve el consumo responsable y reduce el desperdicio.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <button className="bg-teal-600 text-white px-6 py-3 rounded text-base lg:text-lg hover:bg-teal-700 transition">
              Comenzar a Intercambiar
            </button>
            <button className="border border-teal-600 text-teal-600 px-6 py-3 rounded text-base lg:text-lg hover:bg-teal-100 transition">
              Ver Cómo Funciona
            </button>
          </div>
          <Stats />
        </div>

        {/* Tarjeta sugerida */}
        <SuggestedSwapCard />
      </div>
    </section>
  );
}
