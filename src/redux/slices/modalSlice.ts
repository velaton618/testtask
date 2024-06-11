import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/IProduct";
import { IModalState } from "../../types/IModalState";

const initialState: IModalState = { value: false, service: null };

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal: (state, action: PayloadAction<IProduct>) => {
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
