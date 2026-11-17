// Logo do LIVRO+ desenhado em SVG (livro aberto azul e amarelo).
export default function Logo({ claro = false }) {
  return (
    <span className={`logo ${claro ? 'logo--claro' : ''}`}>
      <svg viewBox="0 0 64 64" width="34" height="34" aria-hidden="true">
        {/* No rodapé (fundo escuro) o quadrado fica um pouco mais claro para aparecer */}
        <rect width="64" height="64" rx="14" fill={claro ? '#16335c' : '#0b1f3a'} />
        <path d="M16 18h13c2 0 3 1 3 3v27c0-2-1-3-3-3H16z" fill="#ffffff" />
        <path d="M48 18H35c-2 0-3 1-3 3v27c0-2 1-3 3-3h13z" fill="#f5b700" />
      </svg>
      <span className="logo__texto">
        LIVRO<span className="logo__mais">+</span>
      </span>
    </span>
  )
}
