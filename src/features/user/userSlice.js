import { createSlice } from "@reduxjs/toolkit";
import { userGetProfile } from "./userActions";

const initialState = {
  loading: false,
  user: null,
  error: null,
  success: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [userGetProfile.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userGetProfile.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.user = payload 
    },
    [userGetProfile.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  }
})
export default userSlice.reducer