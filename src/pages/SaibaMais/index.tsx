import { useParams } from 'react-router-dom'

import ProductList from '../../components/ProductList'
import { useGetRestaurantQuery } from '../../services/api'

type FoodParams = {
  id: string
}

const SaibaMais = () => {
  const { id } = useParams() as FoodParams
  const { data } = useGetRestaurantQuery(id)

  if (!data) {
    console.log('carregando')
    return <h2>Carregando...</h2>
  }

  return (
    <>
      <ProductList comida={data!} />
    </>
  )
}

export default SaibaMais
