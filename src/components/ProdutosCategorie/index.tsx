import { Botao, Card, Conteudo, Descricao, Titulo } from './styles'

import estrela from '../assets/estrela.png'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  description: string
  image: string
}

const ProdutoCategoria = ({ title, description, image }: Props) => (
  <Card>
    <Descricao>
      <img src={image} alt={title} />
      <Conteudo>
        <Titulo>{title}</Titulo>
        <p>{description}</p>
        <Botao>Adicionar ao carrinho</Botao>
      </Conteudo>
    </Descricao>
  </Card>
)

export default ProdutoCategoria
