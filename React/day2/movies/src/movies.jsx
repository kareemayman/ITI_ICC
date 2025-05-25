import React, { Component } from "react"
import Movie from "./movie"

export default class Movies extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.results }))
  }

  render() {
    return (
      <div className="grid">
        {this.state.movies.map((movie) => (
          <Movie
            key={crypto.randomUUID()}
            img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            title={movie.title}
          ></Movie>
        ))}
      </div>
    )
  }
}
