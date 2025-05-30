import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const moviesSliceAction = createAsyncThunk("moviesSlice/getAllMovies", async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
  )
  const data = await response.json()
  return data.results
})

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState: {
    movies: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(moviesSliceAction.fulfilled, (state, action) => {
        state.movies = action.payload
        state.isLoading = false
        state.isError = false
    })
    builder.addCase(moviesSliceAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(moviesSliceAction.rejected, (state) => {
      state.isError = true
      state.isLoading = false
    })
  },
})

export default moviesSlice.reducer
