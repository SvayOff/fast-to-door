import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sort: {
    name: 'Price: High to Low',
    sortProperty: 'price',
  }
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setFilter: (state, action) => {
      console.log(state.action)
      state.sort = action.payload.sort

    }
  }

});

export const { setSort, setFilter } = filterSlice.actions;
export default filterSlice.reducer;