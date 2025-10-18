import { createSlice } from "@reduxjs/toolkit";
import { shortenURL } from "./URLthunks";

export const initialState = {
  loading: false,
  error: null,
  listOfShortenURL: [],
};
const URLSlice = createSlice({
  name: "URLShortening",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(shortenURL.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(shortenURL.fulfilled, (state, action) => {
        state.loading = false;
        const { originalUrl, short } = action.payload;
        state.listOfShortenURL.push({
          original: originalUrl,
          short: short,
        });
        state.error = null;
      })
      .addCase(shortenURL.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "something went wrong";
      });
  },
});

export default URLSlice.reducer;
