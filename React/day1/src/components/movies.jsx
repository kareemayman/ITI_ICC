import React, { useState } from "react"
import MyMovie from "./myMovie"

export default function Movies() {
  const [movies, setMovies] = useState([
    { id: 1, name: "Spiderman", img: "./src/assets/images/movie1.jpg" },
    { id: 2, name: "Batman", img: "./src/assets/images/batman.jpg" },
    { id: 3, name: "Superman", img: "./src/assets/images/superman.jpg" },
    { id: 4, name: "Ironman", img: "./src/assets/images/ironman.jpg" },
    { id: 5, name: "Hulk", img: "./src/assets/images/hulk.jpg" },
    { id: 6, name: "Thor", img: "./src/assets/images/thor.jpg" },
    { id: 7, name: "Black Widow", img: "./src/assets/images/black widow.jpg" },
    { id: 8, name: "Captain America", img: "./src/assets/images/captainamerica.jpg" },
    { id: 9, name: "Antman", img: "./src/assets/images/antman.jpg" },
    { id: 10, name: "Doctor Strange", img: "./src/assets/images/strange.jpg" },
  ])

  return (
    <>
      <h1>My Movies</h1>
      <div className="movies">
        {movies.map((m) => {
          return <MyMovie key={crypto.randomUUID()} {...m}></MyMovie>
        })}
      </div>
    </>
  )
}
