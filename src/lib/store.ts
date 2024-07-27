"use client"
import { configureStore } from '@reduxjs/toolkit';
import { mainTimerSlice } from './features/mainTimer/mainTimerSlice';
import { pointsCounterSlice } from './features/pointsCounter/pointsCounterSlice';

export const store = configureStore({
    reducer: {
        mainTimer: mainTimerSlice.reducer,
        pointsCounter: pointsCounterSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;