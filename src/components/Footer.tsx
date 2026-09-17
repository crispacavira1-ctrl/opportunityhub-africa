import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-3">
              OpportunityHub Africa
            </h3>
            <p className="text-sm">
              Conectamos estudantes e jovens profissionais africanos a
              oportunidades reais de crescimento.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Início</Link></li>
              <li><Link to="/opportunities" className="hover:text-white">Oportunidades</Link></li>
              <li><Link to="/about" className="hover:text-white">Sobre</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Categorias</h4>
            <ul className="space-y-2 text-sm">
              <li>Bolsas de estudo</li>
              <li>Empregos</li>
              <li>Estágios</li>
              <li>Cursos</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>Termos de uso</li>
              <li>Política de privacidade</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
          © {new Date().getFullYear()} OpportunityHub Africa. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}