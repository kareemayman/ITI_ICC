import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "../slices/favoritesSlice";
import moviesSlice from "../slices/moviesSlice";

const store = configureStore({
    reducer: {
        favoritesSlice: favoritesSlice,
        moviesSlice: moviesSlice,
    }
})

export default store;