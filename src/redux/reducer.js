import { createSlice } from "@reduxjs/toolkit";
import homeSlice from "./slice/HomeSlice";
import loadingSlice from "./slice/LoadingSlice";
import imageSlice from "./slice/ImageSlice";
import searchSlice from "./slice/SearchSlice";



// Kết hợp các reducers lại với nhau
const reducer = {
  home: homeSlice.reducer,
  image: imageSlice.reducer,
  searchImage: searchSlice.reducer,
  loading: loadingSlice.reducer,
};

export default reducer;
