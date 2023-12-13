import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import userReducer from './features/user/userSlice';
import editReducer from './features/edit/editSlice';
const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        edit: editReducer,
    },
})

export default store;