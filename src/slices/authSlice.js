import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as services from '../services/authService';

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ name, username, email, password }) => {

    const data = await services.signupService({ name, username, email, password });

    return data;

  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {

    const data = await services.loginService({ username, password });

    return data;

  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    access_token: '',
    user: {}
  },
  extraReducers: builder => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.access_token = action.payload.access_token,
        state.user = action.payload.data;
      })
      .addCase(login.fulfilled, (state, action) => {
        // console.log(action);
        state.access_token = action.payload.access_token,
        state.user = action.payload.data;
      })
  }
});

export default authSlice.reducer;