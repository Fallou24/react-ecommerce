import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart") || "[]") 
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const res = state.find((p) => p.id === action.payload.id);
      if (res) {
        const index = state.findIndex((el) => el.id === action.payload.id);
        state.splice(index, 1, action.payload);
      } else {
        state.push(action.payload);
      }
    },
    modifyCount: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      state[index].count = action.payload.count;
    },
    deleteProduct: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload);
      state.splice(index, 1);
    },
    clearCart:(state)=>{
        state = []
        return state
    }
  },
});
export const { addProduct, modifyCount, deleteProduct,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
