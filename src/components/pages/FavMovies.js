import Card from "../Ui/Card";
import Cart from "../Ui/Cart";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const FavMovies = (props) => {
  const { favoriteMovies } = props;
  return favoriteMovies.map((movie) => (
    <Cart
      key={movie.id}
      src={IMG_URL + movie.poster_path}
      overview={movie.overview}
      alt={movie.title}
      vote_average={movie.vote_average}
    />
  ));
};

export default FavMovies;
