import { Link } from 'react-router-dom'

// Mostrada quando a URL não corresponde a nenhuma página
export default function NaoEncontrada() {
  return (
    <section className="secao centro nao-encontrada">
      <div className="container">
        <h1>404</h1>
        <p>Essa página não está no nosso acervo.</p>
        <Link className="botao botao--azul" to="/">Voltar ao início</Link>
      </div>
    </section>
  )
}
