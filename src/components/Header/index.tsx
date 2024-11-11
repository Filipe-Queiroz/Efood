import { Frase, Imagem, Logo, NavBar } from './styles'

import bannerImg from '../assets/fundo.png'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
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
        <Frase>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </Frase>
      </ul>
    </NavBar>
  </Imagem>
)

export default Header
