import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../../store/FavoriteContext";
import Card from "../Ui/Card";
import Cart from "../Ui/Cart";
import classes from "./FavMovies.module.css";

const FavMovies = () => {
  const ctx = useContext(FavoriteContext);

  return (
    <Fragment>
      <Link to="/movies" className={classes.home}>
        Home
      </Link>
      <Card>
        {ctx.favMovieList.map((movie) => (
          <Cart id={movie.id} movie={movie} />
        ))}
      </Card>
    </Fragment>
  );
};

export default FavMovies;
