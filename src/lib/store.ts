"use client"
import { configureStore } from '@reduxjs/toolkit';
import { mainTimerSlice } from './features/mainTimer/mainTimerSlice';
import { pointsCounterSlice } from './features/pointsCounter/pointsCounterSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'root',
    version: 1,
    storage: storage,
    timeout: 100
}

const reducer = combineReducers({
    mainTimer: mainTimerSlice.reducer,
    pointsCounter: pointsCounterSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducer)



export const store = configureStore({
    reducer: persistedReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;