import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "uFH8UIuk0R0OiyF8U5ldFsbpgMrSuiBCXwnNHSpR1sD7lADje9zKeCjq7IOx";
const BASE_URL = "https://api.tinyurl.com/";
export const shortenURL = createAsyncThunk(
  "urls/shortenUrl",
  async (originalUrl, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "https://api.tinyurl.com/create",
        { url: originalUrl }, // 👈 URL-encoded form data
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      return { originalUrl, short: res.data.data.tiny_url };
    } catch (err) {
      return rejectWithValue(err.response?.data || "something went wrong");
    }
  }
);
