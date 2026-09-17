import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Entrar na sua conta
      </h1>

      <form className="space-y-4">
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
          Entrar
        </button>
      </form>

      <p className="text-sm text-gray-600 text-center mt-6">
        Ainda não tem conta?{' '}
        <Link to="/register" className="text-blue-600 hover:underline">
          Registe-se
        </Link>
      </p>
    </div>
  )
}