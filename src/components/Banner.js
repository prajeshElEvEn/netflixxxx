import React, { useEffect, useState } from "react";
import BannerImage from "../assets/images/banner.jpg";
import axios from "../app/service/axios";
import requests from "../features/movies/movieService";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${
          movie?.backdrop_path || BannerImage
        }")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-items">
        <div className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </div>
        <div className="banner-btns">
          <button className="banner-btn">Play</button>
          <button className="banner-btn">My List</button>
        </div>
        <div className="banner-desc">{truncate(movie?.overview, 200)}</div>
      </div>
      <div className="banner-fade" />
    </div>
  );
};

export default Banner;
