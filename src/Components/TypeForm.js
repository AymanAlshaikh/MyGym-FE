import { addType } from "../store/actions/typeActions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";

import { useState } from "react";

const TypeForm = () => {
  const users = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [type, setType] = useState({
    name: "",
  });

  const handleChange = (event) =>
    setType({ ...type, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addType(type));
    history.push("/type");
  };

  return (
    <>
      {users !== null && users.id === 1 ? (
        <form className="container" onSubmit={handleSubmit}>
          <h1>Create Type</h1>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              value={type.name}
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
        <Redirect to="/type" />
      ) : (
        <Redirect to="/signin" />
      )}
    </>
  );
};

export default TypeForm;
