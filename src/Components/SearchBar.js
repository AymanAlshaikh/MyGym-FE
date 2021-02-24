const SearchBar = (props) => {
  return (
    <form class="d-flex">
      <input
        onChange={(event) => props.setQuery(event.target.value)}
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      {/* <button class="btn btn-outline-success" type="submit">
        Search
      </button> */}
    </form>
  );
};
export default SearchBar;
