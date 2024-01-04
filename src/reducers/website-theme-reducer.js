import { createSlice } from "@reduxjs/toolkit";
import alldata from "../utils/consts";

const initialState = {
  theme: alldata.themeConstants.LIGHT_THEME,
};

const themeSlice = createSlice({
  name: "website-theme",
  initialState,
  reducers: {
    lightTheme: (state) => {
      state.theme = alldata.themeConstants.LIGHT_THEME;
    },
    darkTheme: (state) => {
      state.theme = alldata.themeConstants.DARK_THEME;
    },
  },
});

export const { lightTheme, darkTheme } = themeSlice.actions;

export default themeSlice.reducer;
