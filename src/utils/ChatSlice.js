import { createSlice } from "@reduxjs/toolkit";
import { CHAT_MESSAGES_LIMIT } from "./Constants";

const ChatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(CHAT_MESSAGES_LIMIT,1)
            state.messages.unshift(action.payload)
        }
    }
});

export const {addMessage}= ChatSlice.actions;
export default ChatSlice.reducer;