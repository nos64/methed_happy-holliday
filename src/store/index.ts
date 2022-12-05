import { configureStore } from "@reduxjs/toolkit";

import holidaysReducer from "./holidaysSlice";
import textReducer from './textSlice';
import imageReducer from './imgSlice';

const store = configureStore({
  reducer: {
    holidays: holidaysReducer,
    text: textReducer,
    image: imageReducer,
  }
})

export  default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;