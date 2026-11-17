import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi'
import CabecalhoPagina from '../components/CabecalhoPagina.jsx'
import { problemas, solucoes } from '../data/projeto.js'

export default function Sobre() {
  return (
    <>
      <CabecalhoPagina
        etiqueta="Sobre o projeto"
        titulo="Por que o LIVRO+ existe"
        subtitulo="O problema que encontramos nas bibliotecas acadêmicas e como o sistema resolve."
      />

      <section className="secao">
        <div className="container">
          <div className="titulo-secao">
            <span className="etiqueta">O problema</span>
            <h2>Como funciona hoje</h2>
          </div>
          <div className="grade grade--3">
            {problemas.map((item) => (
              <div key={item.titulo} className="card card--problema">
                <FiAlertCircle className="card__icone" />
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao secao--cinza">
        <div className="container">
          <div className="titulo-secao">
            <span className="etiqueta">A solução</span>
            <h2>Como fica com o LIVRO+</h2>
          </div>
          <div className="grade grade--3">
            {solucoes.map((item) => (
              <div key={item.titulo} className="card card--solucao">
                <FiCheckCircle className="card__icone" />
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="container texto-largo">
          <div className="titulo-secao">
            <span className="etiqueta">Objetivo</span>
            <h2>O que queremos alcançar</h2>
          </div>
          <p>
            O objetivo do LIVRO+ é aproximar a biblioteca da sala de aula. O professor indica as leituras
            de cada disciplina, o aluno encontra os livros com facilidade e o bibliotecário controla o
            acervo e os empréstimos sem papel.
          </p>
          <p>
            O sistema foi pensado para a Universidade de Mogi das Cruzes e desenvolvido como Projeto
            Final de Curso do Bacharelado em Sistemas de Informação.
          </p>
        </div>
      </section>
    </>
  )
}
