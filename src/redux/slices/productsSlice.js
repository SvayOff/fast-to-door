import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products.push(...action.payload);
    },
  }
});


export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;