import React from 'react'
import { RefreshCw, DollarSign, Users } from 'lucide-react'

const benefits = [
  {
    icon: <RefreshCw className="w-6 h-6 text-white" />,
    title: 'Reduce el Desperdicio',
    description: 'Dale una segunda vida a productos en buen estado que ya no usas.',
  },
  {
    icon: <DollarSign className="w-6 h-6 text-white" />,
    title: 'Ahorra Dinero',
    description: 'Obtén lo que necesitas sin gastar dinero en efectivo.',
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: 'Conecta con tu Comunidad',
    description: 'Conoce personas de tu área con intereses similares.',
  },
]

export default function ImpactList() {
  return (
    <div>
      <h2 className="text-3xl xl:text-4xl font-bold mb-6 text-white">Impacto Positivo en tu Comunidad</h2>
      <p className="text-white/90 mb-8">
        Al usar TruequeApp no solo obtienes lo que necesitas, sino que también contribuyes a crear un mundo más sostenible y una economía más colaborativa.
      </p>

      <ul className="space-y-6">
        {benefits.map((item, i) => (
          <li key={i} className="flex items-start gap-4">
            <div className="mt-1">{item.icon}</div>
            <div>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-white/80 text-sm">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
