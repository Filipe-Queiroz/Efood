import { Botao, Card, Conteudo, Descricao, Titulo } from './styles'

import estrela from '../assets/estrela.png'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  description: string
  image: string
  nota: string
}

const Produto = ({ title, description, image, nota }: Props) => (
  <Card>
    <Descricao>
      <img src={image} alt={title} />
      <Conteudo>
        <Titulo>
          <h2>{title}</h2>
          <h2>
            {nota} <img src={estrela} alt="estrela" />
          </h2>
        </Titulo>
        <p>{description}</p>
        <Botao>
          <Link to="/Categories">Saiba mais</Link>
        </Botao>
      </Conteudo>
    </Descricao>
  </Card>
)

export default Produto
