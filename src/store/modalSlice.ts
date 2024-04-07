import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IModalState {
  show: boolean,
  scroll: boolean,
}

interface IModalGalleryState {
  scroll: boolean,
  showGallery: boolean,
}

interface ISidebarState {
  sidebar: boolean,
  scroll: boolean,
}

type ModalState = {
  show: boolean,
  showGallery: boolean,
  scroll: boolean,
  sidebar: boolean,
}

const initialState: ModalState = {
  show: false,
  showGallery: false,
  scroll: false,
  sidebar: false,
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

export const {setShow, setShowGallery, setSidebar, setToggleSidebar} = modalSlice.actions;
export default modalSlice.reducer;
