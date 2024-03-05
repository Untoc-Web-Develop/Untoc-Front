import { createSlice } from '@reduxjs/toolkit';

export const userReducer = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'user',
  initialState: {
    userId: '',
    userName: '',
    badgeKeys: ['guest'],
  },
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.badgeKeys = action.payload.badgeKeys;
      state.isLogin = true;
    },
    clearUser: (state) => {
      state.userId = '';
      state.userName = '';
      state.badgeKeys = ['guest'];
    },
  },
});

export const { setUser, clearUser } = userReducer.actions;
