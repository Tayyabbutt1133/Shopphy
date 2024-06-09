import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../store/Cart'

export const store=configureStore({
    reducer:{
        cart:cartReducer
    }
})