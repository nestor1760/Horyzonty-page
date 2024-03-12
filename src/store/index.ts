import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./gallerySlice";
import foodSlice from "./foodSlice";
import vouchersSlice from "./vouchersSlice";
import guideSlice from "./guideSlice";
import nightStaySlice from "./nightStaySlice";
import tourSlice from "./tourSlice";
import aboutSlice from "./aboutSlice";

const store =  configureStore({
  reducer: {
    gallery: gallerySlice,
    food: foodSlice,
    voucher: vouchersSlice,
    guide: guideSlice,
    night: nightStaySlice,
    tour: tourSlice,
    about: aboutSlice,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch