import { createSlice } from '@reduxjs/toolkit';

export const userReducer = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userReducer.actions;
