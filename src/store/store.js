import { configureStore } from "@reduxjs/toolkit";
import counter from "../Slices/counterSlice"

export const store = configureStore ({
    reducer:{
        counter: counter,
    }
})