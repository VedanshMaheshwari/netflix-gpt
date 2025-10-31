import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers:{
        //reducer fucntions
        addUser: (state, action) => {
           return action.payload; 
        },
        removeUser: () => {
            
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

