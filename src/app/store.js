

import { configureStore } from '@reduxjs/toolkit'
import productsSlice from '../features/products/productsSlice'
import cartSlice from '../features/cart/cartSlice'


export const store = configureStore({
   reducer: {
      products: productsSlice ,
      cart: cartSlice ,
   },
})