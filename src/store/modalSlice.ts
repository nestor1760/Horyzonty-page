import { IModalState } from './../types/types';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ModalState = {
  show: boolean | undefined,
  scroll: boolean,
}

const initialState: ModalState = {
  show: undefined,
  scroll: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setShow: (state, action: PayloadAction<IModalState>) => {
      state.show = action.payload.show;
      state.scroll = action.payload.scroll;
    },
  },
});

export const {setShow} = modalSlice.actions;
export default modalSlice.reducer;
