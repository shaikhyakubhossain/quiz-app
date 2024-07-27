import { createSlice } from "@reduxjs/toolkit";


export interface initialStateInterface {
    points: number
}

const initialState: initialStateInterface = {
    points: 0
}

export const pointsCounterSlice = createSlice({
    name: "pointsCounter",
    initialState,
    reducers: {
        incrementPoints: (state) => {
            state.points += 10
        },
        resetPoints: (state) => {
            state.points = 0
        }
    }
})

export const { incrementPoints, resetPoints } = pointsCounterSlice.actions;
export default pointsCounterSlice.reducer;