import React from 'react'

export default function Movie({img, title}) {
  return (
    <div className="movie">
        <h3>{title}</h3>
        <img src={img} alt={title} />
    </div>
  )
}
