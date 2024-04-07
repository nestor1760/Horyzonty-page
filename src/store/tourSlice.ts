import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITourItem } from "../data/interfaces";

type TourState = {
  array: ITourItem[],
  loading: boolean,
  error: null | string,
}

const initialState: TourState = {
  array: [],
  loading: false,
  error: null,
}

const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    tourSuccess: (state, action: PayloadAction<ITourItem[]>) => {
      state.loading = false;
      state.error = null;
      state.array = action.payload;
    },
    tourLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.array = [];
    },
    tourError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.array = [];
    },
  },
});

export const { tourSuccess, tourLoading, tourError } = tourSlice.actions;
export default tourSlice.reducer;
