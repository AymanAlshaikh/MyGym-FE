import { addGym, updateGym } from "../store/actions/gymActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { useState } from "react";

const GymForm = ({ gyms }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { gymSlug } = useParams();
  const foundGym = useSelector((state) =>
    state.gymReducer.gym.find((gym) => gym.slug === gymSlug)
  );

  const [gym, setGym] = useState(
    foundGym ?? {
      name: "",
    }
  );

  const handleChange = (event) =>
    setGym({ ...gym, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundGym) dispatch(updateGym(gym));
    else dispatch(addGym(gym));
    history.push("/gym");
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>{foundGym ? "Update" : "Create"} Gym</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={gym.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-info float-right">
        {foundGym ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default GymForm;
