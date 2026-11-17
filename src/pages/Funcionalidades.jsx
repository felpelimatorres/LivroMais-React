import { useState } from 'react'
import { FiCheck, FiShield } from 'react-icons/fi'
import CabecalhoPagina from '../components/CabecalhoPagina.jsx'
import { perfis, seguranca } from '../data/projeto.js'

export default function Funcionalidades() {
  // Guarda qual aba (perfil) está selecionada
  const [perfilAtivo, setPerfilAtivo] = useState(perfis[0].id)
  const perfil = perfis.find((p) => p.id === perfilAtivo)

  return (
    <>
      <CabecalhoPagina
        etiqueta="Funcionalidades"
        titulo="O que o sistema faz"
        subtitulo="Escolha um perfil para ver o que cada tipo de usuário pode fazer no LIVRO+."
      />

      <section className="secao">
        <div className="container">
          {/* Abas dos perfis */}
          <div className="abas" role="tablist">
            {perfis.map((p) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={p.id === perfilAtivo}
                className={`aba ${p.id === perfilAtivo ? 'aba--ativa' : ''}`}
                onClick={() => setPerfilAtivo(p.id)}
              >
                {p.nome}
              </button>
            ))}
          </div>

          {/* Conteúdo do perfil escolhido */}
          <div className="painel-perfil">
            <div>
              <h2>{perfil.nome}</h2>
              <p>{perfil.resumo}</p>
            </div>
            <ul className="lista-check">
              {perfil.funcoes.map((funcao) => (
                <li key={funcao}>
                  <FiCheck /> {funcao}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="secao secao--cinza">
        <div className="container">
          <div className="titulo-secao">
            <span className="etiqueta">Segurança e privacidade</span>
            <h2>Dados protegidos</h2>
            <p>Recursos de segurança presentes em todo o sistema.</p>
          </div>
          <div className="grade grade--4">
            {seguranca.map((item) => (
              <div key={item.titulo} className="card">
                <FiShield className="card__icone" />
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
            <span className="etiqueta">Regras de negócio</span>
            <h2>Como o sistema decide</h2>
          </div>
          <ul className="lista-check">
            <li><FiCheck /> O usuário se cadastra sozinho, confirma o e-mail e aguarda a aprovação do administrador.</li>
            <li><FiCheck /> Aluno com empréstimo em atraso não pode fazer um novo empréstimo.</li>
            <li><FiCheck /> Aluno e professor não têm acesso à lista de usuários cadastrados.</li>
            <li><FiCheck /> O administrador não pode excluir a própria conta.</li>
          </ul>
        </div>
      </section>
    </>
  )
}
