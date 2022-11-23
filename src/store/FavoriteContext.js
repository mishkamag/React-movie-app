import { useState } from "react";
import React from "react";

const FavoriteContext = React.createContext({
  favMovieList: [],
  addToFavorite: () => {},
  removeFromFavorite: () => {},
});

export const FavoriteCtxProvider = (props) => {
  const [favMovieList, setFavMovieList] = useState([]);

  const addToFavorite = (movie) => {
    setFavMovieList((prevMovie) => {
      const existMovieId = prevMovie.find((mov) => mov.id === movie.id);
      if (existMovieId) {
        alert("Movie already in Favs");
        return [...prevMovie];
      } else if (prevMovie) {
        return [...prevMovie, movie];
      } else {
        return;
      }
    });
  };

  const removeFromFavorite = (movie) => {
    setFavMovieList((prevMovies) => {
      return prevMovies.filter((prev) => prev.id !== movie.id);
    });
  };

  return (
    <FavoriteContext.Provider
      value={{ favMovieList, addToFavorite, removeFromFavorite }}
    >
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
