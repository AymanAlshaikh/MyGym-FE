import { addGym, updateGym } from "../store/actions/gymActions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";

import { useState } from "react";

const GymForm = () => {
  const users = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [gym, setGym] = useState({
    name: "",
  });

  const handleChange = (event) =>
    setGym({ ...gym, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addGym(gym));
    history.push("/gym");
  };

  return (
    <>
      {users !== null && users.id === 1 ? (
        <form className="container" onSubmit={handleSubmit}>
          <h1>Create Gym</h1>
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
            Create
          </button>
        </form>
      ) : users !== null && users.id !== 1 ? (
        <Redirect to="/gym" />
      ) : (
        <Redirect to="/signin" />
      )}
    </>
  );
};

export default GymForm;
