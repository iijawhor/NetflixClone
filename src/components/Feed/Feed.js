import React from "react";
import Main from "../Main/Main";
import Row from "../Row/Row";
import requests from "../../requests";
import "./Feed.css";
import Navbar from "../Sidebar/Navbar";
function Feed() {
  return (
    <>
      <section className="feed">
        <Main />

        <Row
          rowId="1"
          title="Upcoming Movies"
          fetchURL={requests.requestUpcoming}
        />
        <Row
          rowId="2"
          title="Popular Movies"
          fetchURL={requests.requestPopular}
        />
        <Row
          rowId="3"
          title="Top Rated Movies"
          fetchURL={requests.requestTopRated}
        />
        <Row
          rowId="4"
          title="Top Trending Movies"
          fetchURL={requests.requestTrending}
        />
        <div className="sidebar">
          <Navbar />
        </div>
        {/* <Row title="Action Movies" fetchURL={requests.requestAction} /> */}
      </section>
    </>
  );
}

export default Feed;
// https://images.tmdb.org/t/p/original/$
