import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Main from '../../components/Main'

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
  const [comidas, setComidas] = useState<FoodList[]>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setComidas(res))
  }, [])

  if (!comidas) {
    return <h2>Carregando...</h2>
  }

  return (
    <>
      <Header content="Home" />
      <div className="container">
        <Main restaurante={comidas} />
      </div>
    </>
  )
}

export default Home
