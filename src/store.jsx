import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import { authApi } from './features/auth/authApi'

const token = localStorage.getItem("token")
const user = JSON.parse(localStorage.getItem("user"))

const preloadedState = {
  auth: {
    user: user || null,
    token: token || null,
    isAuthenticated : token ? true : false
  }
}

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
  preloadedState,
})
