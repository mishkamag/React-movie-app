import { Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "../Ui/Card";
import Cart from "../Ui/Cart";
import classes from "./FavMovies.module.css";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
// import { TfiHeart } from "react-icons/tfi";
// import { ImHeart } from "react-icons/im";

const FavMovies = (props) => {
  const { favoriteMovies } = props;

  return (
    <Fragment>
      <Link to="/movies" className={classes.home}>
        Home
      </Link>
      <Card>
        {favoriteMovies.map((movie) => (
          <Cart
            id={movie.id}
            key={movie.id}
            src={IMG_URL + movie.poster_path}
            overview={movie.overview}
            alt={movie.title}
            vote_average={movie.vote_average}
          />
        ))}
      </Card>
    </Fragment>
  );
};

export default FavMovies;
