import { createSlice } from "@reduxjs/toolkit";





const switchCardSlice=createSlice({
    name: "switchCard",
    initialState:{
        status:false
    },
    reducers:{
         switchCard:(state,action)=>{
            state.status=!state.status
         }
    }
   
   
})

export const {
   switchCard
  } = switchCardSlice.actions;
  
  export default switchCardSlice.reducer;