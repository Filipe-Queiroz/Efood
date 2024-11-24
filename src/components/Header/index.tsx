import { Link } from 'react-router-dom'
import fundoImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import Banner from '../Banner'
import { Container, Title, LinksContainer, HLink } from './styles'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

export type Props = {
  content?: 'Home' | 'Saiba mais'
}

const Header = ({ content }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

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
          <HLink onClick={openCart}>
            {items.length}
            <span> - produto(s) no carrinho</span>
          </HLink>
        </LinksContainer>
      </div>
      <Banner banner="Saiba mais" />
    </Container>
  )
}

export default Header
