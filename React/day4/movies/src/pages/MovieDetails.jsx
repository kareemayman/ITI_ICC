import React from 'react'
import { useLocation } from 'react-router-dom'

export default function MovieDetails() {

  const location = useLocation()
  const movieDetails = location.state.movieDetails
  console.log(movieDetails)

  return (
    <div className="container">
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
            <p><strong>Budget:</strong> ${movieDetails.budget.toLocaleString()}</p>
            <p><strong>Revenue:</strong> ${movieDetails.revenue.toLocaleString()}</p>
            <p><strong>Runtime:</strong> {movieDetails.runtime} minutes</p>
            <p><strong>Genres:</strong> {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
            <p><strong>Production Companies:</strong> {movieDetails.production_companies.map(company => company.name).join(', ')}</p>
            <p><strong>Vote Count:</strong> {movieDetails.vote_count}</p>
            <p><strong>Status:</strong> {movieDetails.status}</p>
            <p><strong>Tagline:</strong> {movieDetails.tagline}</p>
        </div>
        </div>
    </div>
  )
}
