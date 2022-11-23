import classes from "./Cart.module.css";
import { TfiHeart } from "react-icons/tfi";
import { ImHeart } from "react-icons/im";
import { useContext } from "react";
import FavoriteContext from "../../store/FavoriteContext";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const Cart = ({ movie }) => {
  const ctx = useContext(FavoriteContext);

  const voteColor = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  const addtoFavHandler = () => {
    ctx.addToFavorite(movie);
  };

  function removeFromFavHandler() {
    ctx.removeFromFavorite(movie.id);
  }

  let isAdded = ctx.favMovieList.find((movieObj) => movieObj.id === movie.id);

  let MyIcon = !isAdded ? TfiHeart : ImHeart;

  return (
    <main className={classes.main}>
      <div className={classes.movie}>
        <img src={IMG_URL + movie.poster_path} alt={movie.title} />
        <div className={classes.movieInfo}>
          <h3>{movie.title}</h3>
          <span className={`colored ${voteColor(movie.vote_average)}`}>
            {movie.vote_average}
          </span>
        </div>
        <div className={classes.overview}>
          <h3>
            Overview
            <MyIcon
              onClick={isAdded ? removeFromFavHandler : addtoFavHandler}
              className={classes.icon}
              size={32}
            />
          </h3>
          {movie.overview}
        </div>
      </div>
    </main>
  );
};

export default Cart;
