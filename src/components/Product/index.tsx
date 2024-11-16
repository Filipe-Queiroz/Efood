import estrela from '../../assets/images/estrela.png'

import {
  Content,
  ItemContainer,
  TitleContainer,
  Title,
  Text,
  Button,
  Score,
  TagContainer,
  Tag
} from './styles'

type Props = {
  id: number
  capa: string
  tipo: string
  titulo: string
  avaliacao: number
  descricao: string
  destacado: boolean
}

const Product = ({
  id,
  capa,
  tipo,
  titulo,
  avaliacao,
  descricao,
  destacado
}: Props) => {
  const getTags = (tag: boolean) => {
    const tags = []

    if (tag) {
      tags.push('Destaque do dia')
    }

    return tags
  }

  return (
    <ItemContainer key={id}>
      <img src={capa} alt="Foto da comida" />
      <TagContainer>
        {getTags(destacado).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
        <Tag>{tipo}</Tag>
      </TagContainer>
      <Content>
        <TitleContainer>
          <Title>{titulo}</Title>
          <Score>
            <span>{avaliacao}</span>
            <img src={estrela} alt="" />
          </Score>
        </TitleContainer>
        <Text>{descricao}</Text>
        <Button to={`/saiba-mais/${id}`}>Saiba mais</Button>
      </Content>
    </ItemContainer>
  )
}

export default Product
