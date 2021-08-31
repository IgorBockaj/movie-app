import React from "react";
import { IMAGE_API } from "../apis/movies";

function MovieImage({ imagePath, alt }) {
  return (
    <div>
      <img
        className="movie-image"
        alt={alt}
        src={`${IMAGE_API}${imagePath}`}
      ></img>
    </div>
  );
}

export default MovieImage;
