import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IGalleryItem } from "../data/interfaces";

type GalleryState = {
  array: IGalleryItem[],
  loading: boolean,
  error: null | string,
}

const initialState: GalleryState = {
  array: [],
  loading: false,
  error: null,
}

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    successRequest: (state, action: PayloadAction<IGalleryItem[]>) => {
      state.loading = false;
      state.error = null;
      state.array = action.payload;
    },
    loadingRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.array = [];
    },
    errorRequest: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.array = [];
    },
  },
});

export const { successRequest, loadingRequest, errorRequest } = gallerySlice.actions;
export default gallerySlice.reducer;
