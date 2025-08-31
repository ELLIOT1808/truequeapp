import React from 'react'
import {
  Repeat,
  Users,
  ShieldCheck,
  Smartphone,
  Search,
  Bell,
  LayoutDashboard,
  LifeBuoy
} from 'lucide-react'

const features = [
  {
    icon: <Repeat className="w-7 h-7 text-teal-600" />,
    title: 'Sistema de Coincidencias',
    description: 'Algoritmo inteligente que encuentra los intercambios perfectos entre usuarios basado en sus necesidades y ofertas.',
  },
  {
    icon: <Users className="w-7 h-7 text-teal-600" />,
    title: 'Comunidad Segura',
    description: 'Plataforma confiable con sistema de verificación de usuarios e historial de intercambios exitosos.',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-teal-600" />,
    title: 'Transacciones Seguras',
    description: 'Sistema de confirmación dual y seguimiento de intercambios para garantizar transacciones exitosas.',
  },
  {
    icon: <Smartphone className="w-7 h-7 text-teal-600" />,
    title: 'Diseño Responsive',
    description: 'Accede desde cualquier dispositivo – optimizado para móviles, tabletas y computadoras.',
  },
  {
    icon: <Search className="w-7 h-7 text-teal-600" />,
    title: 'Búsqueda Avanzada',
    description: 'Filtra por categorías, ubicación y condición del producto para encontrar lo que necesitas.',
  },
  {
    icon: <Bell className="w-7 h-7 text-teal-600" />,
    title: 'Notificaciones Inteligentes',
    description: 'Recibe alertas sobre nuevas coincidencias, mensajes y actualizaciones importantes.',
  },
  {
    icon: <LayoutDashboard className="w-7 h-7 text-teal-600" />,
    title: 'Interfaz Intuitiva',
    description: 'Diseñada para ser fácil de usar, incluso si es tu primera vez en una plataforma de trueque.',
  },
  {
    icon: <LifeBuoy className="w-7 h-7 text-teal-600" />,
    title: 'Soporte Activo',
    description: 'Asistencia disponible para ayudarte en cualquier momento con tus dudas o problemas.',
  },
]

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 xl:px-20">
        <h2 className="text-3xl xl:text-4xl font-bold text-center mb-4">¿Por qué elegir TruequeApp?</h2>
        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-16 text-base xl:text-lg">
          Nuestra plataforma está diseñada para hacer que el intercambio de productos sea simple, seguro y beneficioso para todos.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-teal-50 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm xl:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
