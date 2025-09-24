import React from 'react';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white">
        <div className="bg-white p-10 rounded shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-bold mb-4 text-center text-blue-700">Crea tu cuenta</h2>
            <p className="text-sm text-center text-gray-500 mb-6">Únete a nuestra comunidad</p>
            <form>
                <input type="text" placeholder="Nombre completo" className="w-full mb-4 px-4 py-2 border rounded" />
                <input type="email" placeholder="Correo electrónico" className="w-full mb-4 px-4 py-2 border rounded" />
                <input type="password" placeholder="Contraseña" className="w-full mb-4 px-4 py-2 border rounded" />
                <input type="password" placeholder="Confirmar contraseña" className="w-full mb-4 px-4 py-2 border rounded" />
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Registrarse</button>
            </form>
        </div>
    </div>

  );
}
