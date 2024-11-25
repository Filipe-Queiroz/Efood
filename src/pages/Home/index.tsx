import Header from '../../components/Header'
import Main from '../../components/Main'

import { useGetRestaurantsQuery } from '../../services/api'

export type Pedido = {
  id: number
  nome: string
  foto: string
  preco: number
}

export type FoodList = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data } = useGetRestaurantsQuery()

  if (!data) {
    return <h2>Carregando...</h2>
  }

  return (
    <>
      <Header content="Home" />
      <div className="container">
        <Main restaurante={data} />
      </div>
    </>
  )
}

export default Home
