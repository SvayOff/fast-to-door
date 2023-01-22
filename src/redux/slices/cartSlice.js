import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartProducts: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartProducts: (state, action) => {
      state.cartProducts.push({
        ...action.payload,
        count: 1
      });
    }
  }
});

export const { setCartProducts } = cartSlice.actions;
export default cartSlice.reducer;