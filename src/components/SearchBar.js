import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <header>
      <form>
        <input type="text" placeholder="Search" className={classes.search} />
      </form>
    </header>
  );
};

export default SearchBar;
