import { useState } from 'react'
import { FoodList } from '../../pages/Home'
import Header from '../Header'
import {
  Container,
  ItemContainer,
  Title,
  Text,
  Button,
  Modal,
  ModalContent,
  Close,
  Detalhes
} from './styles'
import close from '../../assets/images/close.png'

type Props = {
  comida: FoodList
}

const ProductList = ({ comida }: Props) => {
  const [modal, setModal] = useState({
    isVisible: false,
    nome: '',
    preco: 0,
    descricao: '',
    porcao: '',
    id: 0,
    foto: ''
  })

  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }

  return (
    <>
      <Header content="Saiba mais" />
      <div className="container">
        <Container>
          {comida.cardapio.map((c) => (
            <ItemContainer key={c.id}>
              <div className="itemContainer">
                <img src={c.foto} alt={c.nome} />
                <Title>{c.nome}</Title>
                <Text>{getDescricao(c.descricao)}</Text>
              </div>
              <Button
                onClick={() => {
                  setModal({
                    isVisible: true,
                    nome: c.nome,
                    preco: c.preco,
                    descricao: c.descricao,
                    porcao: c.porcao,
                    id: c.id,
                    foto: c.foto
                  })
                }}
              >
                Mais detalhes
              </Button>
            </ItemContainer>
          ))}
        </Container>
        {modal && modal.isVisible
          ? comida.cardapio.map((c) => (
              <Modal key={c.id}>
                <ModalContent className="container">
                  <Close
                    onClick={() => {
                      setModal({
                        isVisible: false,
                        nome: '',
                        preco: 0,
                        descricao: '',
                        porcao: '',
                        id: 0,
                        foto: ''
                      })
                    }}
                  >
                    <img src={close} alt="fechar" />
                  </Close>
                  <Detalhes>
                    <img src={modal.foto} alt="" />
                    <div>
                      <h2>{modal.nome}</h2>
                      <p>{modal.descricao}</p>
                      <p>Serve: de {modal.porcao}</p>
                      <button>
                        Adicionar ao carrinho - R$
                        {modal.preco.toFixed(2).replace('.', ',')}
                      </button>
                    </div>
                  </Detalhes>
                </ModalContent>
                <div className="overlay"></div>
              </Modal>
            ))
          : ''}
      </div>
    </>
  )
}

export default ProductList
