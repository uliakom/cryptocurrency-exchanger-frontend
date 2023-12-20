import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refresh, register, verifyMail, update } from './operations';

const handleUserEnter = (state, { payload }) => {
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.token = payload.token;
  state.user = payload.user;
  state.error = null;
  state.errorCode = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    error: null,
    errorCode: null,
    verifyErrorCode: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {
    resetErrors: state => {
      state.error = null;
      state.errorCode = null;
    },
    resetUser: state => {
      state.user = { name: null, email: null };
    },

    updateToken: (state, action) => {
      state.token = action.payload;
    },
    addError: (state, { payload }) => {
      state.error = payload.message;
      state.errorCode = payload.status;
      state.isLoggedIn = payload.isLoggedIn; // maybe update this logic/ change action name
    },
  },
  extraReducers: builder =>
    builder
      .addCase(logIn.fulfilled, handleUserEnter)
      .addCase(logIn.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload.message;
        state.errorCode = payload.status;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.user = payload.user;
      })
      .addCase(register.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload.message;
        state.errorCode = payload.status;
      })
      .addCase(verifyMail.fulfilled, handleUserEnter)
      .addCase(verifyMail.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(verifyMail.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload.message;
        state.verifyErrorCode = payload.status;
      })
      .addCase(logOut.fulfilled, state => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = { name: null, mail: null };
        state.error = null;
      })
      .addCase(logOut.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logOut.rejected, state => {
        state.isLoggedIn = false;
        state.token = null;
        state.isRefreshing = false;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.error = null;
        state.isRefreshing = false;
      })
      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refresh.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload.message;
        state.errorCode = payload.status;
      })
      .addCase(update.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.error = null;
        state.isRefreshing = false;
      })
      .addCase(update.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(update.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload.message;
        state.errorCode = payload.status;
      }),
});

export const { resetErrors, resetUser, updateToken, addError } = authSlice.actions;
export const authReducer = authSlice.reducer;
