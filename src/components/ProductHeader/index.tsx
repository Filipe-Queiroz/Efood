import Logo from '../../assets/images/logo.svg'
import { ProductContainer, ProductLayout, ProductText } from './styles'
const ProductHeader = () => (
  <ProductLayout>
    <div className="container">
      <ProductContainer>
        <ProductText>Restaurantes</ProductText>
        <a href="http://localhost:3000">
          <img src={Logo} alt="logo" />
        </a>
        <ProductText>0 produto(s) no carrinho</ProductText>
      </ProductContainer>
    </div>
  </ProductLayout>
)

export default ProductHeader
