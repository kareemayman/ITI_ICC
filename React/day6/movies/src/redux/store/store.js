import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "../slices/favoritesSlice";
import moviesSlice from "../slices/moviesSlice";
import loginSlice from "../slices/loginSlice";

const store = configureStore({
    reducer: {
        favoritesSlice: favoritesSlice,
        moviesSlice: moviesSlice,
        loginSlice: loginSlice
    }
})

export default store;