import { configureStore } from "@reduxjs/toolkit";

import bgReducer from '../navSlice/NavSlice'

export const Store= configureStore({
    reducer:{
      background_blur:bgReducer
    }
})