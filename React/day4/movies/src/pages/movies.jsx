import React, { useState, useEffect } from "react"
import Movie from "../movie"

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
  }, [])

  return (
    <div className="container">
      <h1>Movies</h1>
      <div className="grid">
        {movies.map((movie) => (
          <Movie
            key={crypto.randomUUID()}
            img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            title={movie.title}
            id={movie.id}
          ></Movie>
        ))}
      </div>
    </div>
  )
}

export default Movies
