import { createSlice } from "@reduxjs/toolkit"

const initialValue = {
    counter: 0,
}

const counterSlice = createSlice({
    name:"counter",
    initialState:initialValue,
    reducers:{
        addCounter:(state,action)=>{
            ++state.counter
            console.log(action.payload)
        },
        minusCounter:(state,action)=>{
            state.counter = state.counter > 0 ? --state.counter : 0 ;
            // console.log(action.payload)
        },
        resetCounter:(state,action)=>{
        state.counter = 0;
            console.log(action.payload)
        }

    }
})
const {actions, reducer} = counterSlice
export const {addCounter,minusCounter,resetCounter} = actions
export default reducer;