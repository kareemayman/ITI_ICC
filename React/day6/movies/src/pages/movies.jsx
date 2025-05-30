import { useEffect } from "react"
import Movie from "../movie"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { moviesSliceAction } from "../redux/slices/moviesSlice"
import { toggleShowFavorites } from "../redux/slices/favoritesSlice"

const Movies = () => {
  const movies = useSelector((state) => state.moviesSlice.movies)
  const favs = useSelector((state) => state.favoritesSlice.favorites)
  const showFavs = useSelector((state) => state.favoritesSlice.showFavorites)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(moviesSliceAction())
  }, [])

  return (
    <div className="container">
      <div className="movie-title">
        <h1>Movies</h1>
        <div
          className={`favs ${favs.length == 0 ? "disabled" : ""}`}
          onClick={() => {
            if (favs.length > 0) dispatch(toggleShowFavorites())
          }}
        >
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <span> Favorites</span>
          <div className="fav-counter">{favs.length}</div>
        </div>
      </div>
      <div className="grid">
        {showFavs &&
          favs.map((fav) => {
            return (
              <Movie
                key={fav.id}
                img={`https://image.tmdb.org/t/p/w500/${fav.poster_path}`}
                title={fav.title}
                id={fav.id}
              ></Movie>
            )
          })}
        {!showFavs &&
          movies.map((movie) => (
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
