import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as starRegular } from "@fortawesome/free-regular-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { faStar as starSolid } from "@fortawesome/free-solid-svg-icons"
import { addFavorite, removeFavorite } from "./redux/slices/favoritesSlice"

export default function Movie({ img, title, id }) {
  const movies = useSelector((state) => state.moviesSlice.movies)

  const favs = useSelector((state) => state.favoritesSlice.favorites)
  const isFav = favs.some((fav) => fav.id === id)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const fetchMovie = useCallback(() => {
    const data = movies.find((movie) => movie.id === id)
    navigate(`/movies/${id}`, { state: { movieDetails: data } })
  }, [])

  function handleFavLogic() {
    if (isFav) {
      dispatch(removeFavorite({img, title, id}))
    } else {
      dispatch(addFavorite(movies.find((movie) => movie.id === id)))
    }
  }

  return (
    <div className="movie" >
      <h3 onClick={fetchMovie}>{title}</h3>
      <img src={img} alt={title} onClick={fetchMovie}/>
      <div className="favorite-icon" onClick={handleFavLogic}>
        <FontAwesomeIcon icon={isFav ? starSolid : starRegular} className="star"/>
      </div>
    </div>
  )
}
