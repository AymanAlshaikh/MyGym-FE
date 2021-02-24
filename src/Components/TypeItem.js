import { Link } from "react-router-dom";

const TypeItem = ({ type }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/type/${type.id}`}>
        <p className="type-name">{type.name}</p>
      </Link>
    </div>
  );
};
export default TypeItem;
