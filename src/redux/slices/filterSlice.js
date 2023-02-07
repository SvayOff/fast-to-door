import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sort: {
    name: 'Price: High to Low',
    sortProperty: 'pricePiece',
  },

  searchValue: '',
  searchValueLocal: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
    },

    setFilter: (state, action) => {
      state.sort = action.payload.sort;
    },

    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },

    setSearchValueLocal: (state, action) => {
      state.searchValueLocal = action.payload;
    },
  }

});

export const { setSort, setFilter, setSearchValue, setSearchValueLocal } = filterSlice.actions;
export default filterSlice.reducer;