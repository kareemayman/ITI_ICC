import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "../slices/favoritesSlice";

const store = configureStore({
    reducer: {
        favoritesSlice: favoritesSlice,
    }
})

export default store;