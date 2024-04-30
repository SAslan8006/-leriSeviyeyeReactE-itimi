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
        },
        updateDataFunc: (state, action) => {
            state.data = [...state.data.map(dt => dt.id == action.payload.id ? ({ ...dt, ...action.payload }) : dt)]
        },
        sortingDataFunc: (state, action) => {
            state.data = [...state.data.sort((a, b) => action.payload == "asc" ? a.price - b.price : action.payload == "desc" ? b.price - a.price : null)]
        },
    },
})

export const { sortingDataFunc, createDataFunc, deleteDataFunc, updateDataFunc } = dataSlice.actions

export default dataSlice.reducer