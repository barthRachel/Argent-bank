import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import constants from "../../utils/contants";

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
          `${constants.URL}/profile`,
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
          `${constants.URL}/profile`,
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