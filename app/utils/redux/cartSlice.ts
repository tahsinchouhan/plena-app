import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: {
  products: Array<Product & { quantity: number }>;
  items: number;
  subtotal: number;
} = {
  products: [],
  items: 0,
  subtotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const product = state.products.find(
        item => item.id === action.payload.id,
      );
      state.items += 1;
      state.subtotal += action.payload.price;
      if (product) {
        product.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    reduceProduct: (state, action: PayloadAction<number>) => {
      const product = state.products.find(item => item.id === action.payload);
      state.items -= 1;
      state.subtotal -= product?.price ?? 0;
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.products = state.products.filter(
          item => item.id !== action.payload,
        );
      }
    },
    clearCart: state => {
      state.products = [];
      state.items = 0;
      state.subtotal = 0;
    },
  },
});

export const { addProduct, reduceProduct, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
