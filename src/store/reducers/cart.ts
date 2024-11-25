import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Prato } from '../../components/ProductList'
import { Pedido } from '../../pages/Home'

type CartState = {
  items: Prato[]
  isOpen: boolean
  isAddress: boolean
  isPayment: boolean
  isConfirmed: boolean
  isCart: boolean
  pedido: Pedido[]
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isAddress: false,
  isPayment: false,
  isConfirmed: false,
  isCart: true,
  pedido: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const food = state.items.find((item) => item.id === action.payload.id)

      if (!food) {
        state.items.push(action.payload)
      } else {
        alert('O item já foi adicionado ao carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    closeAndFinish: (state) => {
      state.isOpen = false
      state.isCart = true
      state.isConfirmed = false
      state.isAddress = false
      state.isPayment = false
      state.items = []
    },
    startCheckout: (state) => {
      state.isCart = false
      state.isConfirmed = false
      state.isAddress = true
      state.isPayment = false
    },
    payment: (state) => {
      state.isConfirmed = false
      state.isAddress = false
      state.isPayment = true
      state.isCart = false
    },
    confirmed: (state) => {
      state.isConfirmed = true
      state.isAddress = false
      state.isPayment = false
      state.isCart = false
    },
    backtoCart: (state) => {
      state.isAddress = false
      state.isPayment = false
      state.isConfirmed = false
      state.isCart = true
    }
  }
})

export const {
  add,
  open,
  close,
  remove,
  closeAndFinish,
  startCheckout,
  payment,
  confirmed,
  backtoCart
} = cartSlice.actions
export default cartSlice.reducer
