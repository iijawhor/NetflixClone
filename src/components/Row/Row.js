import React, { useState, useEffect, useRef } from "react";
import "./Row.css";
import axios from "axios";
// import { fetchFromAPI } from "../utils/fetchFromAPI";
import MovieCard from "../MovieCard/MovieCard";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
function Row({ title, fetchURL, rowId }) {
  // const slider1 = document.getElementById("slider" + rowId);
  // console.log(slider1);
  const sliderRef = useRef(null);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  const sliderLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };
  const sliderRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };
  return (
    <>
      <h1 className="row-title">{title}</h1>
      <section className="row">
        <VscArrowLeft className="prev-btn scroll-btn" onClick={sliderLeft} />

        <div className="row-container" id={"slider" + rowId} ref={sliderRef}>
          {movies.map((item, id) => (
            <MovieCard key={id} item={item} />
          ))}
        </div>
        <VscArrowRight className="next-btn scroll-btn" onClick={sliderRight} />
      </section>
    </>
  );
}

export default Row;
