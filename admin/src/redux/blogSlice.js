import { createSlice } from '@reduxjs/toolkit';
import { getBlog } from '../services/blog.service';

const initialState = {
    data: null,
    error: null
};

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
            state.error = null;
        },
        setError: (state, action) => {
            state.data = null
            state.error = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setData, setError } = blogSlice.actions;

// Define a thunk that dispatches those action creators
export const getBlogThunk = () => async (dispatch) => {

    try {
        const data = await getBlog();
        console.log("data",data)
        dispatch(setData(data))
    } catch (err) {
        dispatch(setError(err))
    }
    //done
}

export default blogSlice.reducer