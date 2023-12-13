import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'http://localhost:3001/api/v1';

export const editProfile = createAsyncThunk(
    'user/profile',
    async (userData, { rejectWithValue }) => {
      try {
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            },
        }
        const params = {
            firstName: userData.firstName,
            lastName: userData.lastName,
        }
        const userProfile = await axios.put(
          `${baseURL}/user/profile`,
          params,
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
  