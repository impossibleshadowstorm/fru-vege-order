import { configureStore } from '@reduxjs/toolkit'
import websiteThemeReducer from './reducers/website-theme-reducer'

export const store = configureStore({
  reducer: {
    websiteTheme: websiteThemeReducer,
  },
})