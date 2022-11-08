import classes from "./Movies.module.css";

const Movies = () => {
  return (
    <main className={classes.main}>
      <div className={classes.movie}>
        <img
          src="https://images.unsplash.com/photo-1518173835740-f5d14111d76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdmllJTIwc2VhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="movie seating"
        />
        <div className={classes.movieInfo}>
          <h3>Movie Title</h3>
          <span className={classes.green}>9.8</span>
        </div>
        <div className={classes.overview}>
          <h3>Overview</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          doloremque id corporis voluptas. Quo ex culpa cumque facilis totam at
          molestias laudantium cupiditate, laborum inventore? Nemo nobis
          inventore aliquid accusantium.
        </div>
      </div>
    </main>
  );
};

export default Movies;
