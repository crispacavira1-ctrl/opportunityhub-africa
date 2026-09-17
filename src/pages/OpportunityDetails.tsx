import { useParams, Link } from 'react-router-dom'

const demoOpportunities: Record<string, {
  title: string
  type: string
  location: string
  deadline: string
  description: string
}> = {
  '1': {
    title: 'Bolsa de Mestrado em Engenharia — Universidade de Lisboa',
    type: 'Bolsas',
    location: 'Portugal',
    deadline: '2026-11-30',
    description:
      'Bolsa que cobre propinas e alojamento para estudantes africanos admitidos no programa de Mestrado em Engenharia. Inclui apoio para deslocação inicial.',
  },
  '2': {
    title: 'Estágio em Desenvolvimento Web — TechHub Windhoek',
    type: 'Estágios',
    location: 'Namíbia',
    deadline: '2026-10-15',
    description:
      'Estágio remunerado de 6 meses para estudantes ou recém-formados em áreas de tecnologia, com foco em desenvolvimento frontend e backend.',
  },
  '3': {
    title: 'Programa de Jovens Profissionais — Banco Africano de Desenvolvimento',
    type: 'Empregos',
    location: 'Costa do Marfim',
    deadline: '2026-12-01',
    description:
      'Programa de dois anos para jovens profissionais africanos, com rotação por diferentes departamentos do banco.',
  },
}

export default function OpportunityDetails() {
  const { id } = useParams()
  const opportunity = id ? demoOpportunities[id] : undefined

  if (!opportunity) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Oportunidade não encontrada
        </h1>
        <Link to="/opportunities" className="text-blue-600 hover:underline">
          Voltar às oportunidades
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/opportunities"
        className="text-sm text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Voltar às oportunidades
      </Link>

      <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full mb-3">
        {opportunity.type}
      </span>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        {opportunity.title}
      </h1>

      <div className="flex gap-6 text-sm text-gray-500 mb-6">
        <span>{opportunity.location}</span>
        <span>
          Prazo: {new Date(opportunity.deadline).toLocaleDateString('pt-PT')}
        </span>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        {opportunity.description}
      </p>

      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
        Candidatar-me
      </button>
    </div>
  )
}