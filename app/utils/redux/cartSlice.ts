import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    items: 0,
    subtotal: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const product = state.products.find(
        item => item.id === action.payload.id,
      );
      if (product) {
        product.quantity += 1;
      } else {
        state.products.push({...action.payload, quantity: 1});
      }
    },
    reduceProduct: (state, action) => {
      const product = state.products.find(
        item => item.id === action.payload.id,
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.products = state.products.filter(
          item => item.id !== action.payload.id,
        );
      }
    },
    clearCart: state => {
      state.products = [];
    },
  },
});

export const {addProduct, reduceProduct, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
