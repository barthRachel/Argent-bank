import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'http://localhost:3001/api/v1'

export const userLogin = createAsyncThunk(
  'auth/login',
  async (userLogin, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const userTok = await axios.post(
        `${baseURL}/user/login`,
        userLogin,
        config
      )
      // store user's token in local storage
      localStorage.setItem('userToken', userTok.data.body.token)
      
      return userTok
    } catch (error) {
      // return custom error message from API if any
      console.log("error")
      if (error.response && error.response.data.message) {
        console.log(error.response.request.status)
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const userGetProfile = createAsyncThunk(
  'auth/getProfile',
  async (userToken, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken}`,
        },
      }
      const userProfile = await axios.post(
        `${baseURL}/user/profile`,
        config
      )
      console.log("ouais")
      return userProfile
    } catch (error) {
      // return custom error message from API if any
      console.log("error")
      console.log(error)
      if (error.response && error.response.data.message) {

        console.log("error1")
        return rejectWithValue(error.response.data.message)
      } else {
        console.log("error2")
        return rejectWithValue(error.message)
      }
    }
  }
)
