import { Link } from 'react-router-dom'

const demoOpportunities = [
  {
    id: '1',
    title: 'Bolsa de Mestrado em Engenharia — Universidade de Lisboa',
    type: 'Bolsas',
    location: 'Portugal',
    deadline: '2026-11-30',
  },
  {
    id: '2',
    title: 'Estágio em Desenvolvimento Web — TechHub Windhoek',
    type: 'Estágios',
    location: 'Namíbia',
    deadline: '2026-10-15',
  },
  {
    id: '3',
    title: 'Programa de Jovens Profissionais — Banco Africano de Desenvolvimento',
    type: 'Empregos',
    location: 'Costa do Marfim',
    deadline: '2026-12-01',
  },
]

export default function Opportunities() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Oportunidades</h1>
      <p className="text-gray-600 mb-8">
        Explore bolsas, empregos, estágios e mais.
      </p>

      <div className="grid gap-4">
        {demoOpportunities.map((op) => (
          <Link
            key={op.id}
            to={`/opportunities/${op.id}`}
            className="block border border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start gap-4">
              <div>
                <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full mb-2">
                  {op.type}
                </span>
                <h2 className="text-lg font-semibold text-gray-900">
                  {op.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{op.location}</p>
              </div>
              <div className="text-sm text-gray-500 whitespace-nowrap">
                Prazo: {new Date(op.deadline).toLocaleDateString('pt-PT')}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}