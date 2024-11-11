import { Imagem, Logo, NavBar, Paragrafo } from './styles'

import bannerImg from '../assets/fundo2.png'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const HeaderCategorie = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <NavBar className="container">
      <ul>
        <Paragrafo>Restaurantes</Paragrafo>
      </ul>
      <ul>
        <Logo>
          <Link to="/">
            <img src={logo} alt="Logo Efood" />
          </Link>
        </Logo>
      </ul>
      <ul>
        <Paragrafo>0 produto(s) no carrinho</Paragrafo>
      </ul>
    </NavBar>
  </Imagem>
)

export default HeaderCategorie
