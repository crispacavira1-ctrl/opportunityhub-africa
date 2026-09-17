import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Criar conta gratuita
      </h1>

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
            Palavra-passe
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700 transition-colors"
        >
          Criar conta
        </button>
      </form>

      <p className="text-sm text-gray-600 text-center mt-6">
        Já tem conta?{' '}
        <Link to="/login" className="text-blue-600 hover:underline">
          Entrar
        </Link>
      </p>
    </div>
  )
}