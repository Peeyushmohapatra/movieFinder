import React from "react";
import "./container.css";
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Container = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (

      <div className="movie">
        <h5 style={{textAlign:"center"}}>{movie.Title}</h5>
        <div className="imgContainer">
          <img
            alt={`The movie titled: ${movie.Title}`}
            src={poster}
          />
        </div>
        <p style={{textAlign:"center"}}>({movie.Year})</p>
      </div>

  );
};

export default Container;
