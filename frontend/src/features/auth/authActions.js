import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import constants from "../../utils/contants"; 

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
        `${constants.URL}/login`,
        userLogin,
        config
      )
      // store user's token in local storage
      localStorage.setItem('userToken', userTok.data.body.token)
      
      return userTok
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)