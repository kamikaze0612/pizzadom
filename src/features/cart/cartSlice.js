import { createSlice } from "@reduxjs/toolkit";

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
    },

    loadPizzas(state, { payload }) {
      state.pizzas = payload;
    },

    updateName(state, { payload }) {
      state.username = payload;
    },

    deleteItem(state, { payload }) {
      state.cart = state.cart.filter((pizza) => pizza.pizzaId !== payload);
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
