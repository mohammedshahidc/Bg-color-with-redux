import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState={
    product:[],
    status:'none'
}
const productslice=createSlice({
    name:'product',
    initialState:initialState,
extraReducers:(builder)=>{
    builder
    .addCase(getproduct.fulfilled,(state,action)=>{
        state.product=action.payload
        state.status='none'
    })
    .addCase(getproduct.pending,(state)=>{
        state.status='loading'
    })
    .addCase(getproduct.rejected,(state)=>{
        state.status='failed'
    })
}
})


export default productslice.reducer
export const getproduct=createAsyncThunk('get',async()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/photos')
    const result =response.data
    return result

})