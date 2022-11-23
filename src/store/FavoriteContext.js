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
    setFavMovieList((prevMovies) => {
      if (prevMovies) {
        return [...prevMovies, movie];
      } else {
        return [movie];
      }
    });
  };

  const removeFromFavorite = (id) => {
    setFavMovieList((prevMovies) => {
      return prevMovies.filter((prevmovie) => prevmovie.id !== id);
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
