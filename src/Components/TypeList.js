import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
// Components
import TypeItem from "./TypeItem";
import SearchBar from "./SearchBar";

import { useState } from "react";

const TypeList = (props) => {
  const [query, setQuery] = useState("");

  const typeList = props.types
    .filter((type) => type)
    .filter((type) => type.name.toLowerCase().includes(query.toLowerCase()))
    .map((type) => <TypeItem type={type} key={type.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <div className="row">{typeList}</div>
      {/* <Link to="/class/new">
        <BsPlusCircle className="float-right" size="2em" />
      </Link> */}
    </div>
  );
};

export default TypeList;
