import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "ui",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItemToCartItem(state, action) {
      const NewItem = action.payload;
      const ExistingItem = state.items.find((item) => item.id === NewItem.id);
      state.totalQuantity++;
      if (!ExistingItem) {
        state.items.push({
          id: NewItem.id,
          price: NewItem.price,
          quantity: 1,
          totalPrice: NewItem.price,
          name: NewItem.title,
        });
      } else {
        ExistingItem.quantity++;
        ExistingItem.totalPrice = ExistingItem.totalPrice + NewItem.price;
      }
    },
    removeItemFromCartItem(state, action) {
      const id = action.payload;
      const ExistingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (ExistingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        ExistingItem.quantity--;
      }
    },
  },
});
export const CartActions = CartSlice.actions;
export default CartSlice;
