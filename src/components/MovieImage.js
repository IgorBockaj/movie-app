import React from "react";
import { IMAGE_API } from "../apis/movies";

function MovieImage({ imagePath, alt }) {
  return (
    <div>
      <img
        className="movie-image"
        alt={alt}
        src={
          imagePath === null
            ? "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
            : `${IMAGE_API}${imagePath}`
        }
      ></img>
    </div>
  );
}

export default MovieImage;
