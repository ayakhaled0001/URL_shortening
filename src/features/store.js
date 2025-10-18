import { configureStore } from "@reduxjs/toolkit";
import URLReducer from "./URLslice";

const store = configureStore({
  reducer: {
    URLShortening: URLReducer,
  },
});

export default store;
