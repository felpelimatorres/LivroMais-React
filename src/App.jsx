import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Inicio from './pages/Inicio.jsx'
import Sobre from './pages/Sobre.jsx'
import Funcionalidades from './pages/Funcionalidades.jsx'
import Tecnologias from './pages/Tecnologias.jsx'
import Equipe from './pages/Equipe.jsx'
import NaoEncontrada from './pages/NaoEncontrada.jsx'

// Estrutura fixa (Navbar e Footer) + a página que muda conforme a URL.
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/funcionalidades" element={<Funcionalidades />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
