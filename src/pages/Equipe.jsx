import { FiGithub, FiFigma, FiExternalLink, FiTrello } from 'react-icons/fi'
import CabecalhoPagina from '../components/CabecalhoPagina.jsx'
import { equipe, orientador, curso, links } from '../data/projeto.js'

// Pega as iniciais do nome para o avatar (ex.: "Felipe Lima Torres" -> "FT")
function iniciais(nome) {
  const partes = nome.split(' ')
  return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase()
}

export default function Equipe() {
  return (
    <>
      <CabecalhoPagina
        etiqueta="Equipe"
        titulo="Quem fez o LIVRO+"
        subtitulo={`${curso.nome} · ${curso.instituicao} · ${curso.ano}`}
      />

      <section className="secao">
        <div className="container">
          <div className="grade grade--2 equipe">
            {equipe.map((pessoa) => (
              <div key={pessoa.nome} className="card card--pessoa">
                <div className="avatar">{iniciais(pessoa.nome)}</div>
                <h3>{pessoa.nome}</h3>
                <p>{pessoa.papel}</p>
                <a href={pessoa.github} target="_blank" rel="noreferrer" className="link-icone">
                  <FiGithub /> GitHub
                </a>
              </div>
            ))}
          </div>

          <div className="orientador">
            <span className="etiqueta">Orientação</span>
            <p>{orientador}</p>
          </div>
        </div>
      </section>

      <section className="secao secao--cinza">
        <div className="container">
          <div className="titulo-secao">
            <span className="etiqueta">Links</span>
            <h2>Acompanhe o projeto</h2>
          </div>
          <div className="grade grade--4">
            <a className="card card--link" href={links.sistema} target="_blank" rel="noreferrer">
              <FiExternalLink className="card__icone" />
              <h3>Sistema</h3>
              <p>LIVRO+ publicado no PythonAnywhere</p>
            </a>
            <a className="card card--link" href={links.github} target="_blank" rel="noreferrer">
              <FiGithub className="card__icone" />
              <h3>Repositório</h3>
              <p>Código-fonte no GitHub</p>
            </a>
            <a className="card card--link" href={links.figma} target="_blank" rel="noreferrer">
              <FiFigma className="card__icone" />
              <h3>Protótipo</h3>
              <p>Telas desenhadas no Figma</p>
            </a>
            <a className="card card--link" href={links.kanban} target="_blank" rel="noreferrer">
              <FiTrello className="card__icone" />
              <h3>Kanban</h3>
              <p>Tarefas no GitHub Projects</p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
