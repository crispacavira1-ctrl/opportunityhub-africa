import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import type { Opportunity } from '../types/opportunity'

export default function Opportunities() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchOpportunities() {
      const { data, error } = await supabase
        .from('opportunities')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        setError('Não foi possível carregar as oportunidades. Tente novamente mais tarde.')
      } else {
        setOpportunities(data as Opportunity[])
      }
      setLoading(false)
    }

    fetchOpportunities()
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Oportunidades</h1>
      <p className="text-gray-600 mb-8">
        Explore bolsas, empregos, estágios e mais.
      </p>

      {loading && (
        <p className="text-gray-500">A carregar oportunidades...</p>
      )}

      {error && (
        <p className="text-red-600">{error}</p>
      )}

      {!loading && !error && opportunities.length === 0 && (
        <p className="text-gray-500">Ainda não há oportunidades publicadas.</p>
      )}

      <div className="grid gap-4">
        {opportunities.map((op) => (
          <Link
            key={op.id}
            to={`/opportunities/${op.id}`}
            className="block border border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start gap-4">
              <div>
                <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full mb-2 capitalize">
                  {op.type}
                </span>
                <h2 className="text-lg font-semibold text-gray-900">
                  {op.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{op.location}</p>
              </div>
              {op.deadline && (
                <div className="text-sm text-gray-500 whitespace-nowrap">
                  Prazo: {new Date(op.deadline).toLocaleDateString('pt-PT')}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}