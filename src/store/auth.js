import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'Auth',
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: state => {
      state.token = null;
    },
  },
});

export const setToken = authSlice.actions.setToken;
export const clearToken = authSlice.actions.clearToken;

export default authSlice.reducer;
