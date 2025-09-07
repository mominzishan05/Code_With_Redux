import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,   
  reducers: {
    addtocart: (state, action) => {
      state.items.push(action.payload);
    },
    removecart: (state, action) => {
      state.items = state.items.filter((val) => val.id !== action.payload);
    },
  },
});

export const { addtocart, removecart } = cartSlice.actions;
export default cartSlice.reducer;
