import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="h-12 w-36 flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-full w-auto object-contain"
            />     
        </Link>


        {/* Navegación */}
        <nav className="hidden md:flex gap-6 text-gray-700 text-sm font-medium">
          <a href="#" className="hover:text-blue-600">Inicio</a>
          <a href="#" className="hover:text-blue-600">Cómo Funciona</a>
          <a href="#" className="hover:text-blue-600">Categorías</a>
          <a href="#" className="hover:text-blue-600">Contacto</a>
        </nav>

        {/* Botones de sesión */}
        <div className="hidden md:flex gap-4">
          <Link to="/login" className="text-sm text-gray-700 hover:text-blue-600">Iniciar Sesión</Link>
            <Link to="/register" className="text-sm bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700">
              Registrarse
            </Link>
        </div>


        {/* Menú móvil (opcional, si quieres agregar luego) */}
      </div>
    </header>
  );
}
