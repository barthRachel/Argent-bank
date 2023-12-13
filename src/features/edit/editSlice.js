import { createSlice } from "@reduxjs/toolkit";
import { editProfile } from "./editActions";

const initialState = {
    loading: false,
    user: null,
    error: null,
    success: false,
}

const editSlice = createSlice({
    name: 'edit',
    initialState,
    reducers: {},
    extraReducers: {
        [editProfile.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [editProfile.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.user = payload
        },
        [editProfile.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})
export default editSlice.reducer