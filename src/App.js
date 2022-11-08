import "./App.css";
import SearchBar from "./components/SearchBar";

const API_KEY = "api_key=2723edd8d09f41a378e963267ca9061b";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + "/search/movie?" + API_KEY;

function App() {
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
