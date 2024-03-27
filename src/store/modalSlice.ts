import { IModalGalleryState, IModalState, ISidebarState, ITestState } from './../types/types';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ModalState = {
  show: boolean,
  showGallery: boolean,
  scroll: boolean,
  sidebar: boolean,
  test: boolean,
}

const initialState: ModalState = {
  show: false,
  showGallery: false,
  scroll: false,
  sidebar: false,
  test: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setTest: (state, action: PayloadAction<ITestState>) => {
      state.test = action.payload.test;
      state.scroll = action.payload.scroll;
    },
    setShow: (state, action: PayloadAction<IModalState>) => {
      state.show = action.payload.show;
      state.scroll = action.payload.scroll;
    },
    setShowGallery: (state, action: PayloadAction<IModalGalleryState>) => {
      state.showGallery = action.payload.showGallery;
      state.scroll = action.payload.scroll;
    },
    setSidebar: (state, action: PayloadAction<ISidebarState>) => {
      state.sidebar = action.payload.sidebar;
      state.scroll = action.payload.scroll;
    },
    setToggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
      state.scroll = !state.scroll;
    }
  },
});

export const {setShow, setShowGallery, setSidebar, setToggleSidebar, setTest} = modalSlice.actions;
export default modalSlice.reducer;
