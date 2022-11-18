import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/Login";
import FavMovies from "./components/pages/FavMovies";
import Movies from "./components/pages/Movies";

function App() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const [active, setActive] = useState(true);

  const addFavoriteMovieHandler = (movie) => {
    setActive((prev) => !prev);
    if (!Boolean(favoriteMovies.find((el) => el.id === movie.id))) {
      const newFavoriteMoviesArr = [...favoriteMovies, movie];
      setFavoriteMovies(newFavoriteMoviesArr);
      console.log(favoriteMovies);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/movies"
        element={
          <Movies
            className="App"
            addFavoriteMovieHandler={addFavoriteMovieHandler}
            active={active}
          />
        }
      />

      <Route
        path="/favorites"
        element={<FavMovies favoriteMovies={favoriteMovies} />}
      />
    </Routes>
  );
}

export default App;
