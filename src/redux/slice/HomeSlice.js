import { createSlice } from "@reduxjs/toolkit";

// Tạo slice cho counter
const homeSlice = createSlice({
  name: "home",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export default homeSlice;
