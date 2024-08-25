import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:50,
    amount:100
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.value = state.value +1
        },
        sub:(state,action)=>{
            state.value = state.value -1
        },
        increaseByAmount:(state,action)=>{
            state.value = state.value+action.payload;
        }
    }
})

export const {add,increaseByAmount,sub} = counterSlice.actions;
export default counterSlice.reducer

