import React from "react"

export default function MyMovie(props) {
  return (
    <div className="movie">
      <span>
        {props.id}. {props.name}
      </span>
      <div>
        <img src={props.img} alt="poster" />
      </div>
    </div>
  )
}
