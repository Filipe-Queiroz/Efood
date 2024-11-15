import { HeaderContainer, HeaderLayout, HeaderText } from './styles'
import Logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderLayout>
    <HeaderContainer>
      <a href="http://localhost:3000">
        <img src={Logo} alt="logo" />
      </a>
      <HeaderText>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </HeaderText>
    </HeaderContainer>
  </HeaderLayout>
)

export default Header
