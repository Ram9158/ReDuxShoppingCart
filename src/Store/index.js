import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./Ui-slice";
import CartSlice from "./Cart-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, Cart: CartSlice.reducer },
});

export default store;
