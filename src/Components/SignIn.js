import { signIn } from "../store/actions/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { useState } from "react";

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    dispatch(signIn(user, history));
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1> Sign In</h1>
      <div className="mb-3">
        <label className="form-label">username</label>
        <input
          type="text"
          value={user.username}
          onChange={handleChange}
          name="username"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">password</label>
        <input
          type="password"
          value={user.password}
          onChange={handleChange}
          name="password"
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-info float-right">
        signin
      </button>
    </form>
  );
};

export default SignIn;
