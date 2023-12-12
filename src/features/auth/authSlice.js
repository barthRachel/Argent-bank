import { createSlice } from '@reduxjs/toolkit';
import { userLogin, userGetProfile } from './authActions';

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

let logged;
userToken ? logged = true : logged = false

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
  logged,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.userToken
      state.logged = true
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    [userGetProfile.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userGetProfile.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload 
    },
    [userGetProfile.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})
export default authSlice.reducer

