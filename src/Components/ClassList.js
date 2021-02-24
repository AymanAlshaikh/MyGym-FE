import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
// Components
import ClassItem from "./ClassItem";
import SearchBar from "./SearchBar";

import { useState } from "react";

const ClassList = (props) => {
  const [query, setQuery] = useState("");

  const clasList = props.classes
    .filter((clas) => clas)
    .filter((clas) => clas.name.toLowerCase().includes(query.toLowerCase()))
    .map((clas) => <ClassItem clas={clas} key={clas.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <div className="row">{clasList}</div>
      {/* <Link to="/class/new">
        <BsPlusCircle className="float-right" size="2em" />
      </Link> */}
    </div>
  );
};

export default ClassList;
