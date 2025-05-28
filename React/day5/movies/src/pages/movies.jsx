import React, { useContext } from "react"
import Movie from "../movie"
import { MovieContext } from "../context/MovieContext"

const Movies = () => {
  
  const { movies } = useContext(MovieContext)

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
