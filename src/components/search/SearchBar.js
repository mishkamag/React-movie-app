import { useRef } from "react";
import { Link } from "react-router-dom";
import classes from "./SearchBar.module.css";

const API_KEY = "api_key=2723edd8d09f41a378e963267ca9061b";
const BASE_URL = "https://api.themoviedb.org/3";
const searchURL = BASE_URL + "/search/movie?" + API_KEY;

const SearchBar = (props) => {
  const searchMovieRef = useRef();

  const submitDataHandler = (event) => {
    event.preventDefault();
    const searchMovieValue = searchMovieRef.current.value;

    if (!searchMovieValue) {
      return null;
    } else {
      fetch(searchURL + "&query=" + searchMovieValue)
        .then((res) => res.json())
        .then((data) => {
          props.setMovieArr(data.results);
          searchMovieRef.current.value = "";
        });
    }
  };

  return (
    <header>
      <form onSubmit={submitDataHandler}>
        <input
          type="text"
          placeholder="Search"
          className={classes.search}
          ref={searchMovieRef}
        />
        <ul>
          <li>
            <Link to="/favorites">favmovie</Link>
          </li>
        </ul>
      </form>
    </header>
  );
};

export default SearchBar;