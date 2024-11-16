import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { FoodList } from '../Home'
import ProductList from '../../components/ProductList'

const SaibaMais = () => {
  const [comida, setComida] = useState<FoodList>()

  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setComida(res)
      })
  }, [id])

  if (!comida) {
    return <h2>Carregando...</h2>
  }

  return (
    <>
      <ProductList comida={comida} />
    </>
  )
}

export default SaibaMais
