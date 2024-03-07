import { configureStore } from "@reduxjs/toolkit";
import introSlice from "./introSlice";

const store =  configureStore({
  reducer: {
    intro: introSlice,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch