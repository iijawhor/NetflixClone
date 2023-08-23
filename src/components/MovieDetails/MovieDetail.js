import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";
import Navbar from "../Sidebar/Navbar";
function MovieDetail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  // console.log(movieDetail);
  useEffect(() => {
    const apiKey = "2d2f448f65a4c347ee400eafaac72ac6";
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setMovieDetail(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [id]); // Run this effect whenever 'id' changes
  const {
    title,
    overview,
    release_date,
    runtime,
    genres,
    poster_path: poster_path,
    backdrop_path: backdrop_path,
    original_language
  } = movieDetail || {};
  const hours = Math.floor(runtime / 60);
  const remainingMinutes = runtime % 60;
  const movieDuration = `${hours}h ${remainingMinutes}m`;

  return (
    <section className="movie-detail">
      {/* <h1 style={{ color: "red" }}>Movie Details</h1> */}
      <div className="movie-detail-container">
        <img
          style={{ color: "white" }}
          src={`https://images.tmdb.org/t/p/original/${backdrop_path}`}
          alt={title}
        />
        <div className="movie-detail-content">
          <h1 style={{ color: "white" }}>{title}</h1>
          <div className="movie-detail-content-bottom">
            <span>{release_date}</span>
            <span>{movieDuration}</span>
            <span className="language">{original_language}</span>
          </div>
          <p className="overview">{overview}</p>
          <p className="genre">
            {genres && genres.length > 0
              ? genres.map((genre) => genre.name).join(" | ")
              : ""}
          </p>
          <div className="movie-detail-butttons">
            <button>Subscribe to Watch </button>
            <button>+</button>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <Navbar />
      </div>
    </section>
  );
}

export default MovieDetail;
