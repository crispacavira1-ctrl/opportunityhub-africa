export default function Profile() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Meu Perfil</h1>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nome completo
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
            placeholder="O seu nome"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            País
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
            placeholder="O seu país"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Área de interesse
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
            placeholder="Ex: Tecnologia, Saúde, Engenharia..."
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg px-6 py-2 font-medium hover:bg-blue-700 transition-colors"
        >
          Guardar alterações
        </button>
      </form>
    </div>
  )
}