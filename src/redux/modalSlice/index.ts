import { createSlice } from "@reduxjs/toolkit";

interface ModalWithLoadingType {
  loading: boolean;
  open: boolean;
}

interface ModalSliceType {
  siteMapModalVisibility: boolean;
  authModalVisibility: ModalWithLoadingType;
}

const initialState: ModalSliceType = {
  siteMapModalVisibility: false,
  authModalVisibility: {
    loading: false,
    open: false,
  },
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setsiteMapModalVisibility(state) {
      state.siteMapModalVisibility = !state.siteMapModalVisibility;
    },
    setAuthMapModalVisibility(state, { payload }) {
      state.authModalVisibility = payload;
    },
  },
});
export default modalSlice.reducer;
export const { setsiteMapModalVisibility, setAuthMapModalVisibility } =
  modalSlice.actions;
