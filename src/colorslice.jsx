// import {createSlice} from '@reduxjs/toolkit'



// const colorslice=createSlice({
//     name:'color',
//     initialState:{
//         backgroundColor:'white'
//     },
//     reducers:{
//         setColor:(state,action)=>{
//             state.backgroundColor=action.payload
//         },
//     },
// })


// export const {setColor}=colorslice.actions
// export default colorslice.reducer

















import { createSlice } from "@reduxjs/toolkit";


const colorslice=createSlice({
    name:'color',
    initialState:{
        backgroundColor:'white'
    },
    reducers:{
        setcolor:(state,action)=>{
            state.backgroundColor=action.payload
        }
    }
})
export const{setcolor}=colorslice.actions
export default colorslice.reducer