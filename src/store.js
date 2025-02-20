import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 1, name: "Grey Yordan", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  //state 변경함수 action
  reducers: {
    addCount(state, action) {
      let countNum = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[countNum].count++;
    },

    reduceCount(state, action) {
      let countNum = state.findIndex((a) => {
        return a.id === action.payload;
      });

      if (state[countNum].count > 1) {
        state[countNum].count--;
      } else if (window.confirm("삭제하시겠어요?")) {
        return state.filter((a) => a.id !== action.payload);
      }
    },

    addItem(state, action) {
      state.push(action.payload);
    },

    deleteItem(state, action) {
      return state.filter((a) => a.id !== action.payload);
    },
  },
});

export let { addCount, addItem, reduceCount, deleteItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
