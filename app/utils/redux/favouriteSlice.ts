import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  fav_products: Array<Product>;
} = {
  fav_products: [],
};

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addFavProduct: (state, action: PayloadAction<Product>) => {
      state.fav_products.push(action.payload);
    },
    removeFavProduct: (state, action) => {
      state.fav_products = state.fav_products.filter(
        item => item.id !== action.payload,
      );
    },
  },
});

export const { addFavProduct, removeFavProduct } = favouriteSlice.actions;

export default favouriteSlice.reducer;
