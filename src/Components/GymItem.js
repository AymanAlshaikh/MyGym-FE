import { Link } from "react-router-dom";

const GymItem = ({ gym }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/gym/${gym.slug}`}>
        <p className="gym-name">{gym.name}</p>
      </Link>
    </div>
  );
};
export default GymItem;
