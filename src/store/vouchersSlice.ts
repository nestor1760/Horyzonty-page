import { IVoucherItem } from './../types/types';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type VouchersState = {
  array: IVoucherItem[],
  loading: boolean,
  error: null | string,
}

const initialState: VouchersState = {
  array: [],
  loading: false,
  error: null,
}

const vouchersSlice = createSlice({
  name: 'vouchers',
  initialState,
  reducers: {
    vouchersSuccess: (state, action: PayloadAction<IVoucherItem[]>) => {
      state.loading = false;
      state.error = null;
      state.array = action.payload;
    },
    vouchersLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.array = [];
    },
    vouchersError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.array = [];
    },
  },
});

export const { vouchersSuccess, vouchersLoading, vouchersError } = vouchersSlice.actions;
export default vouchersSlice.reducer;
