import { Link } from 'react-router-dom'
import { FiArrowRight, FiBookOpen, FiUsers, FiBell } from 'react-icons/fi'
import { links, numeros, perfis } from '../data/projeto.js'

export default function Inicio() {
  return (
    <>
      {/* Seção principal (hero) */}
      <section className="hero">
        <div className="container hero__grade">
          <div>
            <span className="etiqueta">PFC · Sistemas de Informação · UMC</span>
            <h1>
              A biblioteca da faculdade <span className="destaque">conectada às suas aulas</span>
            </h1>
            <p className="hero__texto">
              O LIVRO+ é um sistema web de biblioteca educacional que liga o acervo às disciplinas,
              aproxima professores e alunos e digitaliza os empréstimos.
            </p>
            <div className="hero__botoes">
              <a className="botao botao--amarelo" href={links.sistema} target="_blank" rel="noreferrer">
                Acessar o sistema <FiArrowRight />
              </a>
              <Link className="botao botao--contorno" to="/sobre">
                Conhecer o projeto
              </Link>
            </div>
          </div>

          {/* Cartão ilustrativo com um "livro recomendado" */}
          <div className="hero__cartao" aria-hidden="true">
            <div className="mini-card">
              <FiBookOpen className="mini-card__icone" />
              <div>
                <strong>Engenharia de Software</strong>
                <small>Recomendado pelo professor</small>
              </div>
              <span className="selo selo--verde">Disponível</span>
            </div>
            <div className="mini-card">
              <FiUsers className="mini-card__icone" />
              <div>
                <strong>Banco de Dados II</strong>
                <small>3 livros na disciplina</small>
              </div>
            </div>
            <div className="mini-card">
              <FiBell className="mini-card__icone" />
              <div>
                <strong>Devolução em 2 dias</strong>
                <small>Notificação automática</small>
              </div>
              <span className="selo selo--amarelo">Prazo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Números do projeto */}
      <section className="secao secao--curta">
        <div className="container grade grade--4">
          {numeros.map((item) => (
            <div key={item.legenda} className="numero">
              <strong>{item.valor}</strong>
              <span>{item.legenda}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Resumo dos perfis */}
      <section className="secao secao--cinza">
        <div className="container">
          <div className="titulo-secao">
            <span className="etiqueta">Para quem é</span>
            <h2>Um sistema, quatro perfis</h2>
            <p>Cada pessoa vê só o que precisa, de acordo com o seu papel na faculdade.</p>
          </div>
          <div className="grade grade--4">
            {perfis.map((perfil) => (
              <div key={perfil.id} className="card">
                <h3>{perfil.nome}</h3>
                <p>{perfil.resumo}</p>
              </div>
            ))}
          </div>
          <div className="centro">
            <Link className="botao botao--azul" to="/funcionalidades">
              Ver todas as funcionalidades <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Chamada final */}
      <section className="chamada">
        <div className="container chamada__conteudo">
          <h2>Quer ver o LIVRO+ funcionando?</h2>
          <p>O sistema está publicado e pode ser acessado agora.</p>
          <a className="botao botao--amarelo" href={links.sistema} target="_blank" rel="noreferrer">
            Abrir o sistema <FiArrowRight />
          </a>
        </div>
      </section>
    </>
  )
}
