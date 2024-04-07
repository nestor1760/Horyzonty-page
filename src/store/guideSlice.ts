import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IDataGuides } from "../data/interfaces";

type GuideState = {
  array: IDataGuides[],
  loading: boolean,
  error: null | string,
}

const initialState: GuideState = {
  array: [],
  loading: false,
  error: null,
}

const guideSlice = createSlice({
  name: 'guide',
  initialState,
  reducers: {
    guideSuccess: (state, action: PayloadAction<IDataGuides[]>) => {
      state.loading = false;
      state.error = null;
      state.array = action.payload;
    },
    guideLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.array = [];
    },
    guideError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.array = [];
    },
  },
});

export const { guideSuccess, guideLoading, guideError } = guideSlice.actions;
export default guideSlice.reducer;
