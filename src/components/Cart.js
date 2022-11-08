import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <main className={classes.main}>
      <div className={classes.movie}>
        <img src={props.src} alt={props.alt} />
        <div className={classes.movieInfo}>
          <h3>{props.alt}</h3>
          <span className={classes.green}>9.8</span>
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
