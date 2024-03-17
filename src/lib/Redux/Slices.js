import { createSlice } from "@reduxjs/toolkit"

const AuthSlice = createSlice({

    name: "AuthSlice",
    initialState: {
        user: null,
        product: null,
        singleproduct: null,
        singlereviewproduct: null,
        userReq: null,
    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
        },
        removeUser: (state) => {
            state.user = null
        },
        addProducts: (state, action) => {
            state.product = action.payload
        },
        removeProducts: (state) => {
            state.product = null
        },
        addsingleProduct: (state, action) => {
            state.singleproduct = action.payload
        },
        removesingleProduct: (state) => {
            state.singleproduct = null
        },
        addsinglereviewProduct: (state, action) => {
            state.singlereviewproduct = action.payload
        },
        removesinglereviewProduct: (state) => {
            state.singlereviewproduct = null
        },

        addUserReq: (state, action) => {
            state.userReq = action.payload
        },
        removeUserReq: (state) => {
            state.userReq = null
        }
    }


})


export const AuthActions = AuthSlice.actions
export const AuthSliceReducer = AuthSlice.reducer