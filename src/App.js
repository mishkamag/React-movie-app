import { Route, Routes } from "react-router-dom";
import "./App.css";
import FavMovies from "./components/pages/FavMovies";
import Movies from "./components/pages/Movies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Movies className="App" />} />
      <Route path="/favorites" element={<FavMovies />} />
    </Routes>
  );
}

export default App;
