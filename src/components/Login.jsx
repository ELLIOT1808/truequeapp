import React from 'react';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Bienvenido de nuevo</h2>
            <form>
                <input type="email" placeholder="Correo" className="w-full mb-4 px-4 py-2 rounded bg-gray-700 text-white" />
                <input type="password" placeholder="Contraseña" className="w-full mb-4 px-4 py-2 rounded bg-gray-700 text-white" />
                <button className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700">Entrar</button>
                <p className="mt-4 text-sm text-center text-gray-400 hover:text-white cursor-pointer">¿Olvidaste tu contraseña?</p>
            </form>
        </div>
    </div>
  );
}



