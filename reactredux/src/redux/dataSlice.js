import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { STATUS } from '../utils/status';

const initialState = {
    data: [],
    dataStatus: STATUS.IDLE,
}

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = response.json();
    return data;
})

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.dataStatus = STATUS.LOADING;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.dataStatus = STATUS.SUCCESS;
                state.products = action.payload
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.dataStatus = STATUS.FAIL;
            })
    }
})


export default dataSlice.reducer