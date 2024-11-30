"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface initialStateInterface {
    isLoading: Boolean
}

const initialState: initialStateInterface = {
    isLoading: false
} 

export const topLoadingSlice = createSlice({
    name: "topLoading",
    initialState,
    reducers: {
        setLoadingTrue: (state) => {
            state.isLoading = true;
        },
        setLoadingFalse: (state) => {
            state.isLoading = false;
        },
        toggle: (state) => {
            state.isLoading = !state.isLoading;
        }
    }
})

export const { setLoadingTrue, setLoadingFalse, toggle } = topLoadingSlice.actions;
export default topLoadingSlice.reducer;