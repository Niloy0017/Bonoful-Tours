import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user : null,
    islogin : false
}

export const authslice = createSlice({
    name : "auth" ,
    initialState ,
    reducers : {
        register : (state,action) => {
            state.user = action.payload
        },
        login : (state,action) => {
            const{ email , password} = action.payload

            if(email == state.user?.email && password == state.user?.password){
                state.islogin = true
                return state
            }
        },
        logout : (state) => {
            state.islogin = false
            state.user = null
        }
    }
})

export default authslice.reducer
export const {register,login,logout} = authslice.actions
