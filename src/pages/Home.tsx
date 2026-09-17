import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'

const categories = [
  'Bolsas', 'Empregos', 'Estágios', 'Cursos', 'Internacional', 'Competições'
]

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Encontre oportunidades que podem mudar o seu futuro.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Descubra bolsas, empregos, estágios, cursos e oportunidades
            internacionais reunidas num só lugar.
          </p>

          <div className="flex items-center bg-white border border-gray-300 rounded-xl px-4 py-3 shadow-sm max-w-xl mx-auto mb-8">
            <Search size={20} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Procure bolsas, empregos, cursos..."
              className="flex-1 outline-none text-gray-700"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/opportunities"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Explorar oportunidades
            </Link>
            <Link
              to="/register"
              className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Criar alerta gratuito
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Categorias
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div
              key={cat}
              className="border border-gray-200 rounded-xl p-6 text-center hover:border-blue-400 hover:shadow-md transition-all cursor-pointer"
            >
              <p className="font-medium text-gray-800">{cat}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}