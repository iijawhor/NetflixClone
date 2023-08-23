import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";
function MovieCard({ item, item: { id } }) {
  return (
    <section className="movie-card">
      <Link to={id ? `/item/${id}` : "Location Error...."}>
        <img
          className="movie-img"
          src={`https://images.tmdb.org/t/p/original/${item?.poster_path}`}
          alt={item?.title}
        />
      </Link>
    </section>
  );
}

export default MovieCard;
