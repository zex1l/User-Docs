import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
    isAuth: false
}

const authSlice = createSlice({
    initialState,
    name: 'authSlice',
    reducers: {
        handleLogout: (state) => {
            state.isAuth = false
        },
        handleSignIn: (state )=> {
            state.isAuth = true
        }
    }
})

export const {
    handleLogout,
    handleSignIn
} = authSlice.actions

export const getisAuth = (state: RootState) => state.auth.isAuth

export default authSlice.reducer