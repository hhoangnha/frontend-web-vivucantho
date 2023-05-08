import { createSlice } from "@reduxjs/toolkit";

// Tạo slice cho counter
const searchSlice = createSlice({
  name: "Search",
  initialState: {
    query: {
      page: 1,
      per_page: 20,
      query: "cat",
    },
    data: [],
    total: 0,
  },
  reducers: {
    setSearchData: (state, action) => {
      state.data = action.payload;
      state.total = action.payload.length;
    },
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setSearchData, setSearchQuery } = searchSlice.actions;

export default searchSlice;
