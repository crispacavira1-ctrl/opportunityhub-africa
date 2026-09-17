export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
      <p className="text-gray-600 mb-8">
        Bem-vindo de volta. Aqui está um resumo da sua conta.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-500">Favoritos</p>
          <p className="text-2xl font-bold text-gray-900">0</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-500">Candidaturas</p>
          <p className="text-2xl font-bold text-gray-900">0</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-500">Alertas ativos</p>
          <p className="text-2xl font-bold text-gray-900">0</p>
        </div>
      </div>

      <div className="border border-gray-200 rounded-xl p-8 text-center text-gray-500">
        Ainda não há atividade recente. Comece por explorar oportunidades.
      </div>
    </div>
  )
}