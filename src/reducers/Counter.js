import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increament:(state)=>{
            state.value = state.value + 1
        },
        decreament:(state)=>{
            state.value > 0 ? state.value = state.value - 1 : state.value = 0
        }

    }
})

export const {increament,decreament} = counterSlice.actions
export default counterSlice.reducer;