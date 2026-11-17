// Faixa azul no topo das páginas internas, com título e subtítulo.
export default function CabecalhoPagina({ etiqueta, titulo, subtitulo }) {
  return (
    <section className="cabecalho-pagina">
      <div className="container">
        <span className="etiqueta">{etiqueta}</span>
        <h1>{titulo}</h1>
        <p>{subtitulo}</p>
      </div>
    </section>
  )
}
