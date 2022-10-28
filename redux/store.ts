import { configureStore } from '@reduxjs/toolkit';
import switchCardSlice from './switchCardSlice';


export const store=configureStore({
    reducer:{
        switchCardSlice
    }
})