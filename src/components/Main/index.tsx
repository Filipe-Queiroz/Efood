import { FoodList } from '../../pages/Home'
import Product from '../Product'

import { Container } from './styles'

type Props = {
  restaurante: FoodList[]
}

const Main = ({ restaurante }: Props) => {
  return (
    <Container>
      {restaurante.map((comida) => (
        <Product
          key={comida.id}
          id={comida.id}
          capa={comida.capa}
          tipo={comida.tipo}
          titulo={comida.titulo}
          avaliacao={comida.avaliacao}
          destacado={comida.destacado}
          descricao={comida.descricao}
        />
      ))}
    </Container>
  )
}

export default Main
