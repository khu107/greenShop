import { createSlice } from "@reduxjs/toolkit";

interface ModalSliceType {
  siteMapModalVisibility: boolean;
}

const initialState: ModalSliceType = {
  siteMapModalVisibility: false,
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setsiteMapModalVisibility(state) {
      state.siteMapModalVisibility = !state.siteMapModalVisibility;
    },
  },
});
export default modalSlice.reducer;
export const { setsiteMapModalVisibility } = modalSlice.actions;
