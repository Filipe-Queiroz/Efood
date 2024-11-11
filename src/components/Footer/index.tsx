import { Frase, Imagem, Logo, NavBar, Redes } from './styles'
import { Link } from 'react-router-dom'

import bannerImg from '../assets/fundo.png'
import logo from '../assets/logo.png'
import redeSociais from '../assets/redes sociais.png'

const Footer = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <NavBar>
      <ul>
        <Logo>
          <Link to="/">
            <img src={logo} alt="Logo Efood" />
          </Link>
        </Logo>
      </ul>
      <ul>
        <Redes>
          <img src={redeSociais} alt="Logo Efood" />
        </Redes>
      </ul>
      <ul>
        <Frase>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, <br /> qualidade dos produtos é toda do
          estabelecimento contratado.
        </Frase>
      </ul>
    </NavBar>
  </Imagem>
)

export default Footer
