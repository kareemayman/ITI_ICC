import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        favorites: [],
        showFavorites: false,
    },
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(fav => fav.id !== action.payload.id);
        },
        clearFavorites: (state) => {
            state.favorites = [];
        },
        toggleShowFavorites: (state) => {
            state.showFavorites = !state.showFavorites;
        },
    },
})

export const { addFavorite, removeFavorite, clearFavorites, toggleShowFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;