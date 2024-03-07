import { IDataIntroItem } from './../types/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IntroState = {
  array: IDataIntroItem[],
  loading: boolean,
  error: null | boolean,
}

const initialState: IntroState = {
  array: [],
  loading: false,
  error: null,
}

const introSlice = createSlice({
  name: 'intro',
  initialState,
  reducers: {
    successRequest: (state, action: PayloadAction<IDataIntroItem[]>) => {
      state.loading = false;
      state.error = null;
      state.array = action.payload;
    },
    loadingRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.array = [];
    },
    errorRequest: (state, action: PayloadAction<boolean>) => {
      state.loading = false;
      state.error = action.payload;
      state.array = [];
    },
  },
});

export const { successRequest, loadingRequest, errorRequest } = introSlice.actions;
export default introSlice.reducer;
