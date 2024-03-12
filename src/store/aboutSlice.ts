import { IAboutItem } from './../types/types';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AboutState = {
  array: IAboutItem[],
  loading: boolean,
  error: null | string,
}

const initialState: AboutState = {
  array: [],
  loading: false,
  error: null,
}

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    aboutSuccess: (state, action: PayloadAction<IAboutItem[]>) => {
      state.loading = false;
      state.error = null;
      state.array = action.payload;
    },
    aboutLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.array = [];
    },
    aboutError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.array = [];
    },
  },
});

export const { aboutSuccess, aboutLoading, aboutError } = aboutSlice.actions;
export default aboutSlice.reducer;
