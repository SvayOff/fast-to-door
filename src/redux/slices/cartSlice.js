import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartProducts: [],
  totalCartPrice: 0,
  isAddedToCart: false,
  cartActiveClass: '',
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartProducts: (state, action) => {
      state.cartProducts.push(
        ...action.payload,
      );
    },

    addProductToCart: (state, action) => {
      const findProduct = state.cartProducts.find((product) => product.id === action.payload.id);

      if (findProduct) {
        findProduct.count++;
        findProduct.priceFull = findProduct.count * findProduct.pricePiece;
      } else {
        state.cartProducts = [...state.cartProducts, action.payload];
      }
    },

    removeProductFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter((product) => product.id !== action.payload);
    },

    calcTotalCartPrice: (state, action) => {
      state.totalCartPrice = state.cartProducts.reduce((sum, product) => {
        return product.priceFull + sum;
      }, 0);
    },

    plusProductCart: (state, action) => {
      const findProduct = state.cartProducts.find((product) => product.id === action.payload);

      if (findProduct) {
        findProduct.count++;

        findProduct.priceFull = findProduct.count * findProduct.pricePiece;
      }
    },

    minusProductCart: (state, action) => {
      const findProduct = state.cartProducts.find((product) => product.id === action.payload);

      if (findProduct) {
        findProduct.count--;

        findProduct.priceFull = findProduct.count * findProduct.pricePiece
      }

      if (findProduct.count <= 0) {
        findProduct.count = 1;
        findProduct.priceFull = findProduct.pricePiece;
      }
    },

    visibleAddedToCart: (state, action) => {
      state.isAddedToCart = action.payload;
    },

    setCartActiveClass: (state, action) => {
      state.cartActiveClass = action.payload;
    },
  }
});

export const {
  setCartProducts,
  addProductToCart,
  removeProductFromCart,
  calcTotalCartPrice,
  calcProductPrice,
  plusProductCart,
  minusProductCart,
  visibleAddedToCart,
  setCartActiveClass
} = cartSlice.actions;

export default cartSlice.reducer;