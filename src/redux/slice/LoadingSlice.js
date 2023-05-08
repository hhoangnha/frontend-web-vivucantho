import { createSlice } from "@reduxjs/toolkit";

// Tạo slice cho counter
const loadingSlice = createSlice({
  name: "loading",
  initialState: { loading: false },
  reducers: {
    showLoading: (state) => {
      state.loading = true;
    },
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});
export const { showLoading, hideLoading } = loadingSlice.actions;
export default loadingSlice;
