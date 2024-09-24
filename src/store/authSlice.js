// store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        token: null,
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload.token; // Store the token if needed
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.token = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
