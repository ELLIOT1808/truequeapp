import React from 'react'
import { Repeat } from 'lucide-react'

export default function CircularEconomyCard() {
  return (
    <div className="bg-emerald-700/40 rounded-xl p-10 flex flex-col justify-center items-center text-center">
      <Repeat className="w-14 h-14 text-white mb-4" />
      <h3 className="text-2xl font-semibold mb-2 text-white">Economía Circular</h3>
      <p className="text-white/80 text-sm">
        Forma parte del movimiento hacia una economía más sostenible donde los recursos se reutilizan y nada se desperdicia.
      </p>
    </div>
  )
}
