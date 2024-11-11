import Header from '../../components/Header'
import ProdutoLista from '../../components/ProdutosLista'

const Home = () => (
  <>
    <Header></Header>
    <div className="container">
      <ProdutoLista></ProdutoLista>
    </div>
  </>
)

export default Home
