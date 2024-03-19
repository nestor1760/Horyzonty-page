import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./gallerySlice";
import foodSlice from "./foodSlice";
import vouchersSlice from "./vouchersSlice";
import guideSlice from "./guideSlice";
import nightStaySlice from "./nightStaySlice";
import tourSlice from "./tourSlice";
import aboutSlice from "./aboutSlice";
import modalSlice from "./modalSlice";
import formSlice from "./formSlice";
import selectSlice from "./selectSlice";

const store =  configureStore({
  reducer: {
    gallery: gallerySlice,
    food: foodSlice,
    voucher: vouchersSlice,
    guide: guideSlice,
    night: nightStaySlice,
    tour: tourSlice,
    about: aboutSlice,
    modal: modalSlice,
    form: formSlice,
    select: selectSlice,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch