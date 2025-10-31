import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/useSlice.js";

const appStore = configureStore({
    reducer: {
        user: userReducer,
    },
})

export default appStore;