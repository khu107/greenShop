import { createSlice } from "@reduxjs/toolkit";

interface ModalWithLoadingType {
  loading: boolean;
  open: boolean;
}

interface ModalSliceType {
  siteMapModalVisibility: boolean;
  authModalVisibility: ModalWithLoadingType;
  inProcessModalVisibility: boolean;
}

const initialState: ModalSliceType = {
  siteMapModalVisibility: false,
  authModalVisibility: {
    loading: false,
    open: false,
  },
  inProcessModalVisibility: false,
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
    setInProcessModalVisibility(state) {
      state.inProcessModalVisibility = !state.inProcessModalVisibility;
    },
  },
});
export default modalSlice.reducer;
export const {
  setsiteMapModalVisibility,
  setAuthMapModalVisibility,
  setInProcessModalVisibility,
} = modalSlice.actions;
