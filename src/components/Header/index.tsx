import { Link } from 'react-router-dom'
import fundoImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import Banner from '../Banner'
import { Container, Title, LinksContainer, HLink } from './styles'

export type Props = {
  content?: 'Home' | 'Saiba mais'
}

const Header = ({ content }: Props) => {
  if (content === 'Home') {
    return (
      <Container
        content={content}
        style={{ backgroundImage: `url(${fundoImg})` }}
      >
        <div className="content">
          <Title>
            <Link to="/">
              <img src={logo} alt="EFood" />
            </Link>
          </Title>
          <Banner banner="Home" />
        </div>
      </Container>
    )
  }

  return (
    <Container
      content={content}
      style={{ backgroundImage: `url(${fundoImg})` }}
    >
      <div className="container">
        <LinksContainer>
          <HLink href="#">Restaurantes</HLink>
          <Title>
            <Link to="/">
              <img src={logo} alt="EFood" />
            </Link>
          </Title>
          <HLink href="#">0 produto(s) no carrinho</HLink>
        </LinksContainer>
      </div>
      <Banner banner="Saiba mais" />
    </Container>
  )
}

export default Header
