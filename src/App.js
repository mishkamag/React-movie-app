import { useEffect, useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Movies />
    </div>
  );
}

export default App;
