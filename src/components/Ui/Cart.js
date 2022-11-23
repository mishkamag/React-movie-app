import classes from "./Cart.module.css";
import { TfiHeart } from "react-icons/tfi";
import { ImHeart } from "react-icons/im";
import { useContext } from "react";
import FavoriteContext from "../../store/FavoriteContext";

const Cart = (props) => {
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

  let MyIcon = props.active ? ImHeart : TfiHeart;

  return (
    <main className={classes.main}>
      <div className={classes.movie}>
        <img src={props.src} alt={props.alt} />
        <div className={classes.movieInfo}>
          <h3>{props.alt}</h3>
          <span className={`colored ${voteColor(props.vote_average)}`}>
            {props.vote_average}
          </span>
        </div>
        <div className={classes.overview}>
          <h3>
            Overview
            <MyIcon
              onClick={() => ctx.addToFavorite(props.movie)}
              className={classes.icon}
              size={32}
            />
          </h3>
          {props.overview}
        </div>
      </div>
    </main>
  );
};

export default Cart;
