import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
// Components
import GymItem from "./GymItem";
import SearchBar from "./SearchBar";

import { useState } from "react";
import { useSelector } from "react-redux";

const GymList = (props) => {
  const users = useSelector((state) => state.authReducer.user);
  const [query, setQuery] = useState("");

  const gymList = props.gyms
    .filter((gym) => gym)
    .filter((gym) => gym.name.toLowerCase().includes(query.toLowerCase()))
    .map((gym) => <GymItem gym={gym} key={gym.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <div className="row">{gymList}</div>
      {users !== null && users.id === 1 ? (
        <Link to="/gym/new">
          <BsPlusCircle className="float-right" size="2em" />
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default GymList;
