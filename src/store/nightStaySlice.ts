import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IDataNightStayItem } from "../data/interfaces";

type NightState = {
  array: IDataNightStayItem[],
  loading: boolean,
  error: null | string,
}

const initialState: NightState = {
  array: [],
  loading: false,
  error: null,
}

const nightStaySlice = createSlice({
  name: 'nightStay',
  initialState,
  reducers: {
    nightSuccess: (state, action: PayloadAction<IDataNightStayItem[]>) => {
      state.loading = false;
      state.error = null;
      state.array = action.payload;
    },
    nightLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.array = [];
    },
    nightError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.array = [];
    },
  },
});

export const { nightSuccess, nightLoading, nightError } = nightStaySlice.actions;
export default nightStaySlice.reducer;
