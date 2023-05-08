import { createSlice } from "@reduxjs/toolkit";

// Tạo slice cho counter
const imageSlice = createSlice({
  name: "Image",
  initialState: {
    showModal: false, //dùng để hiển thị modal
    data: [], // dữ liệu hình ảnh load ra ngoài trang chủ
    detail: {}, // dữ liệu hình ảnh load ra ngoài trang chi tiết
  },
  reducers: {
    showModal: (state) => {
      state.showModal = true;
    },
    hideModal: (state) => {
      state.showModal = false;
    },
    setData: (state, action) => {
      let newImage = state.data.concat(action.payload);
      state.data = newImage;
    },
    setDetail: (state, action) => {
      state.detail = action.payload;
    }
  },
});

export const { showModal, hideModal, setData, setDetail } = imageSlice.actions;

export default imageSlice;
