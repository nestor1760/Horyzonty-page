import { IModalGalleryState, IModalState } from './../types/types';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ModalState = {
  show: boolean,
  showGallery: boolean,
  scroll: boolean,
}

const initialState: ModalState = {
  show: false,
  showGallery: false,
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
    setShowGallery: (state, action: PayloadAction<IModalGalleryState>) => {
      state.showGallery = action.payload.showGallery;
      state.scroll = action.payload.scroll;
    },
  },
});

export const {setShow, setShowGallery} = modalSlice.actions;
export default modalSlice.reducer;
