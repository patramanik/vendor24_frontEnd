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
export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  const response = await axios.get(`${base_url}/api/user/logout`, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  console.log(response);

  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // increment: (state) => {
    // 	// Redux Toolkit allows us to write "mutating" logic in reducers. It
    // 	// doesn't actually mutate the state because it uses the Immer library,
    // 	// which detects changes to a "draft state" and produces a brand new
    // 	// immutable state based off those changes
    // 	state.value += 1;
    // },
  },

  extraReducers: (builder) => {
    builder

      // logout user
      .addCase(logoutUser.pending, (state) => {
        state.status.logoutStatus = 'loading';
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.status.logoutStatus = 'succeeded';
        state.user = {};
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
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
