import React from "react";
import "./Main.css";
import { useState, useEffect } from "react";
import requests from "../../requests";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { FiPlus } from "react-icons/fi";
function Main() {
  const [movies, setMovies] = useState([]);
  const [trunacateOverview, setTrunacateOverview] = useState(false);
  useEffect(() => {
    fetchFromAPI().then((data) => {
      setMovies(data.data.results);
      // console.log(data.data.results);
    });
  }, []);
  console.log(movies);
  useEffect(() => {
    const handleResize = () => {
      setTrunacateOverview(window.innerWidth <= 912);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //   console.log(movies);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  const trunacateString = (str, maxLength) => {
    if (str && str.length >= maxLength) {
      return str.slice(0, maxLength - 1) + "...";
    }
    return str;
  };

  const {
    title,
    backdrop_path,
    overview,
    vote_average,
    release_date,
    original_language,
    run_time
  } = movie || {};
  return (
    <section className="main">
      <img
        className="img"
        src={`https://images.tmdb.org/t/p/original/${backdrop_path}`}
        alt={title}
      />
      <div className="main-contents">
        <h2>{title}</h2>
        <div className="content-bottom">
          <span>{release_date}</span>
          <span>{run_time}</span>
          <span>{original_language}</span>
          <span className="vote">{vote_average}</span>
        </div>
        {trunacateOverview ? (
          <p className="overview">{trunacateString(overview, 80)}</p>
        ) : (
          <p className="overview">{overview}</p>
        )}

        <div className="buttons">
          <button>Play</button>
          <button className="my-list-button">
            My List
            <span className="button-plus-icon">
              <FiPlus />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Main;
