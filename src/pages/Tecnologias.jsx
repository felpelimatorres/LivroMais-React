import CabecalhoPagina from '../components/CabecalhoPagina.jsx'
import { tecnologias, camadasMVC } from '../data/projeto.js'

export default function Tecnologias() {
  return (
    <>
      <CabecalhoPagina
        etiqueta="Tecnologias"
        titulo="Como o LIVRO+ foi construído"
        subtitulo="As ferramentas e a arquitetura usadas no desenvolvimento do sistema."
      />

      <section className="secao">
        <div className="container">
          <div className="titulo-secao">
            <span className="etiqueta">Stack</span>
            <h2>Tecnologias utilizadas</h2>
          </div>
          <div className="grade grade--3">
            {tecnologias.map((grupo) => (
              <div key={grupo.grupo} className="card">
                <h3>{grupo.grupo}</h3>
                <div className="chips">
                  {grupo.itens.map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao secao--cinza">
        <div className="container">
          <div className="titulo-secao">
            <span className="etiqueta">Arquitetura</span>
            <h2>Padrão MVC</h2>
            <p>O código é dividido em três camadas, cada uma com uma responsabilidade.</p>
          </div>

          {/* Diagrama simples do fluxo de uma requisição */}
          <div className="fluxo" aria-label="Fluxo: Navegador, Controller, Model, MySQL e View">
            <span className="fluxo__passo">Navegador</span>
            <span className="fluxo__seta">→</span>
            <span className="fluxo__passo fluxo__passo--destaque">Controller</span>
            <span className="fluxo__seta">→</span>
            <span className="fluxo__passo">Model</span>
            <span className="fluxo__seta">⇄</span>
            <span className="fluxo__passo">MySQL</span>
            <span className="fluxo__seta">→</span>
            <span className="fluxo__passo fluxo__passo--destaque">View</span>
          </div>

          <div className="grade grade--3">
            {camadasMVC.map((camada) => (
              <div key={camada.nome} className="card">
                <h3>{camada.nome}</h3>
                <p>{camada.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="container texto-largo">
          <div className="titulo-secao">
            <span className="etiqueta">Hospedagem</span>
            <h2>Onde o sistema roda</h2>
          </div>
          <p>
            A aplicação Flask e o banco MySQL estão hospedados no PythonAnywhere. As tarefas agendadas
            (APScheduler) cuidam das notificações de prazo e atraso. O código é versionado no GitHub e
            as tarefas da equipe são organizadas em um quadro kanban no GitHub Projects.
          </p>
          <p className="nota">
            Esta página de apresentação é um projeto separado, feito em React e publicado na Vercel.
          </p>
        </div>
      </section>
    </>
  )
}
