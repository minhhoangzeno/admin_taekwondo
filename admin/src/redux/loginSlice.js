import { createSlice } from '@reduxjs/toolkit';
import { forgotPassword, verifyPassword } from '../services/account.services';
import { changePassword, login } from '../services/login.services';
import { updateProgress } from './progressSlice';

const initialState = {
    data: null,
    error: null
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem("token", JSON.stringify(action.payload.access_token))
            let { password, ...other } = action.payload.user;
            state.data = other;
            state.error = null;

        },
        setError: (state, action) => {
            state.data = null
            // state.error = action.payload
        },
        logout: (state, action) => {
            state.data = null
            state.error = null
            // localStorage.removeItem(userConstants.LOGIN_USER)
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser, setError, logout } = loginSlice.actions

// Define a thunk that dispatches those action creators
export const loginThunk = (username, password) => async (dispatch) => {
    dispatch(updateProgress(0))
    try {
        const data = await login(username, password);
        // return data;
        // dispatch(setUser(data))
    } catch (err) {
        console.log("err", err)
        dispatch(setError(err))
    }
    //done
    dispatch(updateProgress(100))
}

export const changePasswordThunk = (newPassword) => async (dispatch) => {
    dispatch(updateProgress(0))
    try {
        const data = await changePassword(newPassword);
        return data;
    } catch (err) {
        console.log("err", err)
        // dispatch(setError(err))
    }
    //done
    dispatch(updateProgress(100))
}


export const forgotPasswordThunk = (email) => async (dispatch) => {
    dispatch(updateProgress(0))
    try {
        const data = await forgotPassword(email);
        console.log("data", data)
    } catch (err) {
        console.log("err", err)
        // dispatch(setError(err))
    }
    //done
    dispatch(updateProgress(100))
}


export const verifyPasswordThunk = (confirmationCode, newPassword) => async (dispatch) => {
    dispatch(updateProgress(0))
    try {
        const data = await verifyPassword(confirmationCode, newPassword);
        console.log("data", data)
    } catch (err) {
        console.log("err", err)
        // dispatch(setError(err))
    }
    //done
    dispatch(updateProgress(100))
}



export default loginSlice.reducer