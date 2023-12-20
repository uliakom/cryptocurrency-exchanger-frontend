import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'shared/api/auth';

export const register = createAsyncThunk('users/register', async (credentials, thunkAPI) => {
  try {
    const data = await api.register(credentials);
    return data;
  } catch ({ response }) {
    const { status, data } = response;
    const error = {
      status,
      message: data.message,
    };
    return thunkAPI.rejectWithValue(error);
  }
});

export const logIn = createAsyncThunk('users/logIn', async (credentials, thunkAPI) => {
  try {
    const data = await api.login(credentials);
    return data;
  } catch ({ response }) {
    const { status, data } = response;
    const error = {
      status,
      message: data.message,
    };
    return thunkAPI.rejectWithValue(error);
  }
});

export const logOut = createAsyncThunk('users/logOut', async (_, thunkAPI) => {
  try {
    await api.logout();
  } catch ({ response }) {
    const { status, data } = response;
    const error = {
      status,
      message: data.message,
    };
    return thunkAPI.rejectWithValue(error);
  }
});

export const verifyMail = createAsyncThunk('users/verify', async (credentials, thunkAPI) => {
  try {
    const data = await api.verifyMail(credentials);
    return data;
  } catch ({ response }) {
    const { status, data } = response;
    const error = {
      status,
      message: data.message,
    };
    return thunkAPI.rejectWithValue(error);
  }
});

export const refresh = createAsyncThunk('users/refresh', async (_, thunkAPI) => {
  const { token } = await thunkAPI.getState().auth;
  if (token === null) {
    return thunkAPI.rejectWithValue('No token');
  }
  try {
    const data = await api.getCurrent(token);
    return data;
  } catch ({ response }) {
    const { status, data } = response;
    const error = {
      status,
      message: data.message,
    };
    return thunkAPI.rejectWithValue(error);
  }
});

export const update = createAsyncThunk('users/update', async (credentials, thunkAPI) => {
  try {
    const data = await api.update(credentials);
    return data;
  } catch ({ response }) {
    const { status, data } = response;
    const error = {
      status,
      message: data.message,
    };
    return thunkAPI.rejectWithValue(error);
  }
});
