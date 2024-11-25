import { useDispatch, useSelector } from 'react-redux'

import {
  Overlay,
  CartContainer,
  Sidebar,
  CartStage,
  ItemCart,
  ImageItem,
  InfosItem,
  DeleteItemButton,
  InfosCart,
  AddCartButton,
  EmptyText
} from './styles'

import { RootReducer } from '../../store'
import { close, remove, startCheckout } from '../../store/reducers/cart'
import Checkout from '../Checkout'
import { priceFormat } from '../../Utils'

export type PayState = {
  paidStage: boolean
}

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items, isAddress, isCart } = useSelector(
    (state: RootReducer) => state.cart
  )

  const getTotalPrices = () => {
    return items.reduce((accumulator, currentItem) => {
      if (currentItem.preco) {
        return (accumulator += currentItem.preco)
      }
      return 0
    }, 0)
  }

  const activeCheckout = () => {
    if (getTotalPrices() > 0) {
      dispatch(startCheckout())
    } else {
      alert('Não há itens no carrinho')
    }
  }

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          <CartStage className={!isCart ? 'is-checkout' : ''}>
            <ul>
              {items.map((p) => (
                <ItemCart key={p.id}>
                  <ImageItem src={p.foto} alt="" />
                  <InfosItem>
                    <h3>{p.nome}</h3>
                    <span>{priceFormat(p.preco)}</span>
                  </InfosItem>
                  <DeleteItemButton
                    type="button"
                    onClick={() => removeItem(p.id)}
                  />
                </ItemCart>
              ))}
            </ul>
            <InfosCart>
              <p>Valor total</p>
              <span>{priceFormat(getTotalPrices())}</span>
            </InfosCart>
            <AddCartButton onClick={activeCheckout}>
              Continuar com a entrega
            </AddCartButton>
          </CartStage>
        ) : (
          <EmptyText>O carrinho está vazio</EmptyText>
        )}

        <Checkout checkoutStart={isAddress} priceTotal={getTotalPrices()} />
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
