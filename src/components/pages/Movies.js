import { Fragment, useEffect, useState } from "react";
import Card from "../Ui/Card";
import Cart from "../Ui/Cart";
import LoadingSpinner from "../Ui/LoadingSpinner";
import SearchBar from "../search/SearchBar";

const API_KEY = "api_key=2723edd8d09f41a378e963267ca9061b";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

const Movies = () => {
  const [movieArr, setMovieArr] = useState([]);
  const [spinnerIsLoading, setSpinnerIsLoading] = useState(false);

  useEffect(() => {
    setSpinnerIsLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovieArr(data.results);
        setSpinnerIsLoading(false);
      });
  }, []);

  return (
    <Fragment>
      <SearchBar setMovieArr={setMovieArr} />

      {spinnerIsLoading ? (
        <LoadingSpinner />
      ) : (
        <Card>
          {movieArr.length > 0 &&
            movieArr.map((movie) => <Cart movie={movie} key={movie.id} />)}
        </Card>
      )}
    </Fragment>
  );
};

export default Movies;
