import { useEffect, useState } from "react";
import Cart from "./Cart";

const API_KEY = "api_key=2723edd8d09f41a378e963267ca9061b";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + "/search/movie?" + API_KEY;

const Movies = () => {
  const [movieArr, setMovieArr] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovieArr(data.results);
      });
  }, []);

  //   if (!movieArr) return null;

  const movieCarts = movieArr.map((movie) => {
    const { title, poster_path, overview } = movie;
    <Cart
      key={Math.random()}
      src={IMG_URL + poster_path}
      alt={title}
      overview={overview}
    />;
  });

  return movieCarts;
};

export default Movies;