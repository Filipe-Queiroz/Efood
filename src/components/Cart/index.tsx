/* eslint-disable react/jsx-key */
import { useDispatch, useSelector } from 'react-redux'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Card,
  Title,
  Price,
  Trash,
  TotalPrice,
  BuyButton
} from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrices = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  console.log(items)

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => {
            return (
              <Card>
                <img src={item.foto} alt="" />
                <div>
                  <Title>{item.nome}</Title>
                  <Price>R${item.preco}</Price>
                  <Trash onClick={() => removeItem(item.id)} />
                </div>
              </Card>
            )
          })}
        </ul>
        <TotalPrice>
          Valor total
          <span>R$ {getTotalPrices()}</span>
        </TotalPrice>
        <BuyButton>Continuar com a entrega</BuyButton>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
