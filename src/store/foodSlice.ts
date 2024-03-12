import { IFoodItem } from './../types/types';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type FoodState = {
  array: IFoodItem[],
  loading: boolean,
  error: null | string,
}

const initialState: FoodState = {
  array: [],
  loading: false,
  error: null,
}

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    foodSuccess: (state, action: PayloadAction<IFoodItem[]>) => {
      state.loading = false;
      state.error = null;
      state.array = action.payload;
    },
    foodLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.array = [];
    },
    foodError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.array = [];
    },
  },
});

export const { foodSuccess, foodLoading, foodError } = foodSlice.actions;
export default foodSlice.reducer;
