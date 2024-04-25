import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk('fetchData',
    async (userId) => {
        const response = await fetch(`https://fakestoreapi.com/products`);
        return (await response.json())
    },
)


const initialState = {
    modal: false,
    getData: [],
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        modalOpenFunc: (state) => {
            state.modal = !state.modal;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.getData = action.payload;
                state.loading = true;
            })
    }
})

// Action creators are generated for each case reducer function
export const { modalOpenFunc } = modalSlice.actions

export default modalSlice.reducer