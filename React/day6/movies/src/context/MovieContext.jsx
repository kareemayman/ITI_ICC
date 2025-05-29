import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
      fetch(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
      )
        .then((res) => res.json())
        .then((data) => setMovies(data.results))
    }, [])

    return (
        <MovieContext.Provider value={{movies, setMovies}}>
            {children}
        </MovieContext.Provider>
    )
}