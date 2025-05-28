import React from 'react'
import { useLocation } from 'react-router-dom'

export default function MovieDetails() {

  const location = useLocation()
  const movieDetails = location.state.movieDetails
  console.log(movieDetails)

  return (
        <div className="movie-details">
        <div className="left">
            <h1>{movieDetails.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} />
            <p>{movieDetails.overview}</p>
            <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
            <p><strong>Rating:</strong> {movieDetails.vote_average}</p>
        </div>
        <div className="right">
            <p><strong>Popularity:</strong> {movieDetails.popularity}</p>
            <p><strong>Original Language:</strong> {movieDetails.original_language}</p>
            <p><strong>Vote Count:</strong> {movieDetails.vote_count}</p>
        </div>
        </div>
  )
}
