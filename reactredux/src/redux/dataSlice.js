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
    reducers: {
        createDataFunc: (state, action) => {
            state.data = [...state.data, action.payload]
        },
        deleteDataFunc: (state, action) => {
            state.data = [...state.data.filter(dt => dt.id !== action.payload)]
        }
    },
})

export const { createDataFunc, deleteDataFunc } = dataSlice.actions

export default dataSlice.reducer