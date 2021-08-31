import React from "react";

function MovieDescription({ overview }) {
  return (
    <div className="movie-desc">
      <h3>{overview}</h3>
    </div>
  );
}

export default MovieDescription;
