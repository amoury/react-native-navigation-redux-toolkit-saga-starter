// @flow

import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state, action) => state + 1,
    decrement: (state, action) => state - 1,
  },
});

const {actions, reducer} = counterSlice;

export const {increment, decrement} = actions;
export default reducer;
