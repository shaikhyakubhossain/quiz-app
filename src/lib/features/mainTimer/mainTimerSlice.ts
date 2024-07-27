"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface initialStateInterface {
    time: number
}

const initialState: initialStateInterface = {
    time: 0
} 

export const mainTimerSlice = createSlice({
    name: "mainTimer",
    initialState,
    reducers: {
        incrementTime: (state) => {
            state.time += 1
        },
        resetTime: (state) => {
            state.time = 0;
        }
    }
})

export const { resetTime, incrementTime } = mainTimerSlice.actions;
export default mainTimerSlice.reducer;