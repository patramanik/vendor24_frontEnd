import { base_url } from '../../main';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface CounterState {
  user: {};
  isAuthenticated: boolean;
  status: {
    logoutStatus: string;
  };
  error: string | undefined;
}

const initialState: CounterState = {
  user: {},
  isAuthenticated: false,
  status: {
    logoutStatus: 'idle',
  },
  error: '',
};

// logout user
export const signupUser = createAsyncThunk(
  'user/signupUser',
  async (formData: any) => {
    console.log(formData, 'of redux');

    const response = await axios.post(`${base_url}/api/user/logout`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    console.log(response);

    return response.data;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // logout user
      .addCase(signupUser.pending, (state) => {
        state.status.logoutStatus = 'loading';
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status.logoutStatus = 'succeeded';
        state.user = {};
        state.isAuthenticated = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status.logoutStatus = 'failed';
        state.error = 'Try Again';
      });
  },
});

// Action creators are generated for each case reducer function
// export const { increment } = userSlice.actions;

export default userSlice.reducer;

// Export any actions you need
export const selectUser = (state: any) => state.user;
