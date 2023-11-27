

import { createSlice } from '@reduxjs/toolkit'

const initialState = [
]

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addProduct: (state, action) => {
         state.push(action.payload)
      },
      deleteProduct: (state, action) => {
         state.value += action.payload
      },
      increment: (state, action) => {
         state.map((item)=>item.id === action.payload.id ? item.curNumber++ : item.curNumber)
      },
      decrement: (state, action) => {
         state.map((item)=>item.id === action.payload.id ? --item.curNumber : item.curNumber)
      },
   },
})


export const { addProduct, deleteProduct, increment, decrement } = cartSlice.actions

export default cartSlice.reducer