import { createSlice } from "@reduxjs/toolkit"

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const movie = action.payload
      if (!state.favorites.some(fav => fav.id === movie.id)) {
        state.favorites.push(movie)
      }
    },
    removeFavorite: (state, action) => {
      const movieId = action.payload
      state.favorites = state.favorites.filter(fav => fav.id !== movieId)
    },
  },
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer