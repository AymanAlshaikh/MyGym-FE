import { signUp } from "../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import { useState } from "react";

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    dispatch(signUp(user, history));
  };

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <h1> Sign Up</h1>
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
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            value={user.email}
            onChange={handleChange}
            name="email"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-info float-right">
          signup
        </button>
      </form>
    </>
  );
};

export default SignUp;
