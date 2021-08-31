import React from "react";
import MovieDescription from "./MovieDescription";
import MovieImage from "./MovieImage";

import "./movie.css";

function Movie({ movieArr }) {
  return movieArr.map((movie) => (
    <div className="movie" key={movie.id}>
      <h2 className="movie-title">{movie.title}</h2>

      <MovieImage imagePath={movie.poster_path} alt={movie.title} />

      <MovieDescription overview={movie.overview} />
    </div>
  ));
}

export default Movie;
