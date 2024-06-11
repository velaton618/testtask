import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: { value: false, service: null },
  reducers: {
    openModal: (state, action) => {
      state.value = true;
      state.service = action.payload;
    },
    closeModal: (state) => {
      state.value = false;
      state.service = null;
    }
  }
})

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
