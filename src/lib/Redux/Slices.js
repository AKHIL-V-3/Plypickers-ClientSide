import { createSlice } from "@reduxjs/toolkit"

const AuthSlice = createSlice({

    name:"AuthSlice",
    initialState:{
          user:null
    },
    reducers:{
        addUser:(state,action)=>{
              state.user = action.payload
        },
        removeUser:(state)=>{
             state.user = null
        }
    }

       
})


export const AuthActions = AuthSlice.actions
export const  AuthSliceReducer = AuthSlice.reducer