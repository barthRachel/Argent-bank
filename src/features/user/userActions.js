import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'http://localhost:3001/api/v1'

export const userGetProfile = createAsyncThunk(
    'user/profile',
    async (userToken, { rejectWithValue }) => {
      try {
        // configure header's Content-Type as JSON
        const config = {
          headers: {
            Authorization: `Bearer ${userToken}`
          },
        }
        const userProfile = await axios.post(
          `${baseURL}/user/profile`,
          userToken,
          config
        )
        return userProfile.data.body
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
  