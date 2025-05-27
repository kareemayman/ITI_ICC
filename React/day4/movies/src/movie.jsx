import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Movie({img, title, id}) {

  const navigate = useNavigate()

  const fetchMovie = useCallback(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`)
      .then(res => res.json())
      .then(data => {
        navigate(`/movies/${id}`, { state: { movieDetails: data } })
      })
      .catch(err => console.error("Error fetching movie details:", err))

  }, [])

  return (
    <div className="movie" onClick={fetchMovie}>
        <h3>{title}</h3>
        <img src={img} alt={title} />
    </div>
  )
}
