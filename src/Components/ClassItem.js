import { Link } from "react-router-dom";

const ClassItem = ({ clas }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/class/${clas.slug}`}>
        <p className="class-name">{clas.name}</p>
      </Link>
      <p className="class-price">{clas.price}</p>
    </div>
  );
};
export default ClassItem;
