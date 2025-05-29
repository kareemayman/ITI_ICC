import React, { useCallback, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { MovieContext } from "./context/MovieContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-regular-svg-icons"

export default function Movie({ img, title, id }) {
  const { movies } = useContext(MovieContext)

  const navigate = useNavigate()

  const fetchMovie = useCallback(() => {
    const data = movies.find((movie) => movie.id === id)
    navigate(`/movies/${id}`, { state: { movieDetails: data } })
  }, [])

  return (
    <div className="movie" onClick={fetchMovie}>
      <h3>{title}</h3>
      <img src={img} alt={title} />
      <div className="favorite-icon">
        <FontAwesomeIcon icon={faStar} className="star"/>
      </div>
    </div>
  )
}
