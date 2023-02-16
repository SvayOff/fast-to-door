import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  cards: [],
  loadingSkeleton: true,
  menuActiveClass: '',
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
    },

    setMenuActiveClass: (state, action) => {
      state.menuActiveClass = action.payload;
    }
  }
});


export const { setProducts, setCards, setLoadingSkeleton, setMenuActiveClass } = productsSlice.actions;
export default productsSlice.reducer;