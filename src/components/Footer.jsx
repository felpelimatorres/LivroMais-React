import { Link } from 'react-router-dom'
import { FiGithub, FiFigma, FiExternalLink } from 'react-icons/fi'
import Logo from './Logo.jsx'
import { links, curso } from '../data/projeto.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grade">
        <div>
          <Logo claro />
          <p className="footer__texto">
            Projeto Final de Curso — {curso.nome}, {curso.instituicao}.
          </p>
        </div>

        <div>
          <h4>Páginas</h4>
          <ul>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/funcionalidades">Funcionalidades</Link></li>
            <li><Link to="/tecnologias">Tecnologias</Link></li>
            <li><Link to="/equipe">Equipe</Link></li>
          </ul>
        </div>

        <div>
          <h4>Links do projeto</h4>
          <ul>
            <li><a href={links.sistema} target="_blank" rel="noreferrer"><FiExternalLink /> Sistema no ar</a></li>
            <li><a href={links.github} target="_blank" rel="noreferrer"><FiGithub /> Repositório</a></li>
            <li><a href={links.figma} target="_blank" rel="noreferrer"><FiFigma /> Protótipo no Figma</a></li>
          </ul>
        </div>
      </div>
      <p className="footer__copy">© {curso.ano} LIVRO+ · Trabalho acadêmico</p>
    </footer>
  )
}
