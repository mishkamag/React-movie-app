import classes from "./Cart.module.css";

const Cart = (props) => {
  const getColor = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <main className={classes.main}>
      <div className={classes.movie}>
        <img src={props.src} alt={props.alt} />
        <div className={classes.movieInfo}>
          <h3>{props.alt}</h3>
          <span className={getColor(props.vote_average)}>
            {props.vote_average}
          </span>
        </div>
        <div className={classes.overview}>
          <h3>Overview</h3>
          {props.overview}
        </div>
      </div>
    </main>
  );
};

export default Cart;
