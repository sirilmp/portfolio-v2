import { createSlice } from "@reduxjs/toolkit";


export const NavSlice= createSlice({
    name:'background_blur',
    initialState:{
         value:false
    },
    reducers:{
change_background:(state,action)=>{
    state.value=action.payload.background_blur
}
    }
})


export const {change_background}=NavSlice.actions


export default NavSlice.reducer