import { configureStore } from "@reduxjs/toolkit";

import cartSliceReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
  },
});

export default store;
