import { createSlice } from "@reduxjs/toolkit"
import { ADD_CART, REMOVE, REMOVE_ITEM } from "./actions"



const initialStore = {
  carts: [],
}

const cartSlice = createSlice({
  name: 'addToCart',
  initialState: initialStore,
  reducers: {
    addCart(state, action) {
      // Work on later
      state.carts.push(action.payload)
    }
  }
})

export const getCart = state => state.cartReducer.carts

export const { addCart } = cartSlice.actions
// reducer
export const cartReducer = (state, { payload }) => {
  switch (action.type) {
    case ADD_CART:
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id)
      if (itemIndex >= 0) {
        state.carts[itemIndex].qty += 1
        console.log(state.carts[itemIndex].qty)
      } else {
        const temp = { ...action.payload, qty: 1 }
        return {
          ...state,
          carts: [...state.carts, temp],
        }
      }

    case REMOVE:
      const data = state.carts.filter((el) => el.id !== action.payload)
      return {
        ...state,
        carts: data,
      }

    case REMOVE_ITEM:
      const itemIndex_desc = state.carts.findIndex((item) => item.id === action.payload.id)
      if (state.carts[itemIndex_desc].qty >= 1) {
        const delete_item = (state.carts[itemIndex_desc].qty -= 1)
        console.log([...state.carts, delete_item])
        return {
          ...state,
          carts: [...state.carts],
        }
      } else if (state.carts[itemIndex_desc].qty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload.id)
        return {
          ...state,
          carts: data,
        }
      }
    default:
      return state
  }
}

export default cartSlice.reducer