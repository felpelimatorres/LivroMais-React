import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import Logo from './Logo.jsx'
import { links } from '../data/projeto.js'

const paginas = [
  { caminho: '/', nome: 'Início' },
  { caminho: '/sobre', nome: 'Sobre' },
  { caminho: '/funcionalidades', nome: 'Funcionalidades' },
  { caminho: '/tecnologias', nome: 'Tecnologias' },
  { caminho: '/equipe', nome: 'Equipe' },
]

export default function Navbar() {
  // Controla se o menu está aberto no celular
  const [aberto, setAberto] = useState(false)
  const fechar = () => setAberto(false)

  return (
    <header className="navbar">
      <div className="container navbar__conteudo">
        <Link to="/" onClick={fechar} aria-label="Página inicial do LIVRO+">
          <Logo />
        </Link>

        <button
          className="navbar__botao-menu"
          onClick={() => setAberto(!aberto)}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
        >
          {aberto ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav className={`navbar__links ${aberto ? 'navbar__links--aberto' : ''}`}>
          {paginas.map((pagina) => (
            <NavLink
              key={pagina.caminho}
              to={pagina.caminho}
              end={pagina.caminho === '/'}
              onClick={fechar}
              className={({ isActive }) => (isActive ? 'ativo' : '')}
            >
              {pagina.nome}
            </NavLink>
          ))}
          <a className="botao botao--amarelo botao--pequeno" href={links.sistema} target="_blank" rel="noreferrer">
            Acessar sistema
          </a>
        </nav>
      </div>
    </header>
  )
}
