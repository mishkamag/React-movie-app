import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FavMovies from "./components/pages/FavMovies";
import Movies from "./components/pages/Movies";

function App() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [icon, setIcon] = useState(true);

  const addFavoriteMovieHandler = (movie) => {
    setIcon(false);
    if (favoriteMovies.indexOf(movie.id === -1)) {
      const newFavoriteMoviesArr = [...favoriteMovies, movie];
      setFavoriteMovies(newFavoriteMoviesArr);
      console.log(favoriteMovies);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Movies
            className="App"
            addFavoriteMovieHandler={addFavoriteMovieHandler}
            icon={icon}
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
