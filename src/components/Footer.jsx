import React from 'react'
import { Facebook, Twitter, Instagram, Leaf } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 pt-16 pb-10">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-center items-start gap-12 text-center lg:text-left">
        {/* Marca */}
        <div className="flex-1 min-w-[230px]">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <Leaf className="text-green-500 w-5 h-5" />
            <h3 className="text-white text-xl font-bold">TruequeApp</h3>
          </div>
          <p className="text-sm mb-4">
            La plataforma líder en intercambio de productos que promueve el consumo responsable y la economía colaborativa.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a href="#" className="hover:text-white"><Facebook size={18} /></a>
            <a href="#" className="hover:text-white"><Twitter size={18} /></a>
            <a href="#" className="hover:text-white"><Instagram size={18} /></a>
          </div>
        </div>

        {/* Enlaces Rápidos */}
        <div className="flex-1 min-w-[180px]">
          <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Cómo Funciona</a></li>
            <li><a href="#" className="hover:text-white">Categorías</a></li>
            <li><a href="#" className="hover:text-white">Seguridad</a></li>
            <li><a href="#" className="hover:text-white">Ayuda</a></li>
          </ul>
        </div>

        {/* Soporte */}
        <div className="flex-1 min-w-[180px]">
          <h4 className="text-white font-semibold mb-4">Soporte</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Centro de Ayuda</a></li>
            <li><a href="#" className="hover:text-white">Contacto</a></li>
            <li><a href="#" className="hover:text-white">Términos de Uso</a></li>
            <li><a href="#" className="hover:text-white">Privacidad</a></li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
        © 2024 TruequeApp. Todos los derechos reservados.
      </div>
    </footer>
  )
}
