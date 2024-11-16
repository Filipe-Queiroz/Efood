import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SaibaMais from './pages/SaibaMais'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/saiba-mais/:id" element={<SaibaMais />} />
  </Routes>
)

export default Rotas
