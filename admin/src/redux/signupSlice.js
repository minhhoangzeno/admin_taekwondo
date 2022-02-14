import { createSlice } from '@reduxjs/toolkit';
import { siginup, verifyEmail } from '../services/signup.services';
import { updateProgress } from './progressSlice';

const initialState = {
    // data: JSON.parse(localStorage.getItem(userConstants.LOGIN_USER)),
    data: null,
    error: null
};

export const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        setUser: (state, action) => {
            // localStorage.setItem(userConstants.LOGIN_USER, JSON.stringify(action.payload))

            // let { password, ...other } = data
            // state.data = other
            // state.error = null

            // state.data = action.payload;
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
export const { setUser, setError, logout } = signupSlice.actions

// Define a thunk that dispatches those action creators
export const signupThunk = (userDto) => async (dispatch) => {
    dispatch(updateProgress(0))
    try {
        const data = await siginup(userDto.username, userDto.email, userDto.password, userDto.firstName, userDto.lastName);
        console.log(data)
        // dispatch(setUser(data))
    } catch (err) {
        console.log("err", err)
        dispatch(setError(err))
    }
    //done
    dispatch(updateProgress(100))
}

export const verifyEmailThunk = (confirmationCode) => async (dispatch) => {
    try {
        const data = await verifyEmail(confirmationCode)
        return data;
    } catch (err) {
        console.log("err", err)
    }
    //done
    dispatch(updateProgress(100))
}

export default siginup.reducer