import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type FormState = {
  firstName: string,
  lastName: string,
  email: string,
  comment: string,
  responce: boolean,
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  comment: '',
  responce: false,
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },
    setResponce: (state, action: PayloadAction<boolean>) => {
      state.responce = action.payload;
    },
  },
});

export const { setFirstName, setLastName, setEmail, setComment, setResponce } = formSlice.actions;
export default formSlice.reducer;
