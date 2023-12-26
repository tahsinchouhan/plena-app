import { createSlice } from '@reduxjs/toolkit';

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    fav_products: [],
  },
  reducers: {
    addFavProduct: (state, action) => {
      state.fav_products.push(action.payload);
    },
    removeFavProduct: (state, action) => {
      state.fav_products = state.fav_products.filter(
        item => item.id !== action.payload,
      );
    },
  },
});

export const {addFavProduct, removeFavProduct} = favouriteSlice.actions;

export default favouriteSlice.reducer;
