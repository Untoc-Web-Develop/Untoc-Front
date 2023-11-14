import { createSlice } from '@reduxjs/toolkit';

export const userReducer = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'user',
  initialState: {
    type: 'guest',
  },
  reducers: {
    setUser: (state, action) => {
      state.type = action.payload.type;
    },
    clearUser: (state) => {
      state.type = 'guest';
    },
  },
});

export const { setUser, clearUser } = userReducer.actions;
