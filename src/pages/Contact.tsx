export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Contacto</h1>
      <p className="text-gray-600 mb-8">
        Tem alguma dúvida ou sugestão? Envie-nos uma mensagem.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nome
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
            Mensagem
          </label>
          <textarea
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
            placeholder="Escreva a sua mensagem..."
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg px-6 py-2 font-medium hover:bg-blue-700 transition-colors"
        >
          Enviar mensagem
        </button>
      </form>
    </div>
  )
}