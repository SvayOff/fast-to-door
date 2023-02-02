import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  cards: [],
  loadingSkeleton: true,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    setCards: (state, action) => {
      state.cards = action.payload;
    },

    setLoadingSkeleton: (state, action) => {
      state.loadingSkeleton = action.payload;
    }
  }
});


export const { setProducts, setCards, setLoadingSkeleton } = productsSlice.actions;
export default productsSlice.reducer;