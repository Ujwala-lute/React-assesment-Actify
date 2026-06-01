import { createSlice } from "@reduxjs/toolkit";
import dummyData from "../data/dummyData";

const tableSlice = createSlice({
  name: "table",

  initialState: {
    data: dummyData,
  },

  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
    },

   deleteUser: (state, action) => {
  state.data = state.data.filter(
    (user) => user.id !== action.payload
  );
} 
  },
});

export const { addUser, deleteUser } = tableSlice.actions;

export default tableSlice.reducer;