import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import type { Opportunity } from '../types/opportunity'

export default function OpportunityDetails() {
  const { id } = useParams()
  const [opportunity, setOpportunity] = useState<Opportunity | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchOpportunity() {
      if (!id) return

      const { data, error } = await supabase
        .from('opportunities')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        setError('Oportunidade não encontrada.')
      } else {
        setOpportunity(data as Opportunity)
      }
      setLoading(false)
    }

    fetchOpportunity()
  }, [id])

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center text-gray-500">
        A carregar...
      </div>
    )
  }

  if (error || !opportunity) {
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

      <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full mb-3 capitalize">
        {opportunity.type}
      </span>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        {opportunity.title}
      </h1>

      <div className="flex gap-6 text-sm text-gray-500 mb-6">
        <span>{opportunity.location}</span>
        {opportunity.deadline && (
          <span>
            Prazo: {new Date(opportunity.deadline).toLocaleDateString('pt-PT')}
          </span>
        )}
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        {opportunity.description}
      </p>

      {opportunity.external_url && (
        <a
          href={opportunity.external_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Candidatar-me
        </a>
      )}

      {!opportunity.external_url && (
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Candidatar-me
        </button>
      )}
    </div>
  )
}