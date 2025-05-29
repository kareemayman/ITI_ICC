import React, { useContext } from "react"
import Movie from "../movie"
import { MovieContext } from "../context/MovieContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"

const Movies = () => {
  
  const { movies } = useContext(MovieContext)
  const favs = useSelector((state => state.favoritesSlice.favorites))

  return (
    <div className="container">
      <div className="movie-title">
        <h1>Movies</h1>
        <div className={`favs ${favs.length == 0 ? 'disabled' : ''}`}>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <span> Favorites</span>
          <div className="fav-counter">{favs.length}</div>
        </div>
      </div>
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
