import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pizzas: [],
  cart: [],
  username: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, { payload }) {
      state.cart.push(payload);
      toast.success("Pizza added to cart");
    },

    loadPizzas(state, { payload }) {
      state.pizzas = payload;
    },

    updateName(state, { payload }) {
      state.username = payload;
    },

    deleteItem(state, { payload }) {
      state.cart = state.cart.filter((pizza) => pizza.pizzaId !== payload);
      toast.success("Pizza removed from cart");
    },

    increaseQuantity(state, { payload }) {
      const pizzaItem = state.cart.find((pizza) => pizza.pizzaId === payload);
      pizzaItem.quantity += 1;
      pizzaItem.totalPrice = pizzaItem.quantity * pizzaItem.unitPrice;
    },

    decrementQuantity(state, { payload }) {
      const pizzaItem = state.cart.find((pizza) => pizza.pizzaId === payload);
      pizzaItem.quantity -= 1;
      pizzaItem.totalPrice = pizzaItem.quantity * pizzaItem.unitPrice;

      if (pizzaItem.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, { payload });
      }
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decrementQuantity,
  clearCart,
  updateName,
  loadPizzas,
} = cartSlice.actions;

export default cartSlice.reducer;
