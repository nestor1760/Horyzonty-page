import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SelectState = {
  selectValue: string
}

const initialState: SelectState = {
  selectValue: '',
}

const selectSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setSelectValue: (state, action: PayloadAction<string>) => {
      state.selectValue = action.payload;
    },
  },
});

export const { setSelectValue } = selectSlice.actions;
export default selectSlice.reducer;
