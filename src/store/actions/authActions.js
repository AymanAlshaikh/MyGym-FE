import decode from "jwt-decode";
import instance from "./instance";

// ACTION TYPES
import * as types from "./types";

const setUser = (token) => {
  localStorage.setItem("myToken", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: types.SET_USER,
    payload: { userData: decode(token) },
  };
};

export const signUp = (userData, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signup", userData);
    dispatch(setUser(res.data.token));
    localStorage.setItem("myToken", res.data.token);
    history.replace("/");
    dispatch({
      type: types.SET_USER,
      payload: { userData: decode(res.data.token) },
    });
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (userData, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signin", userData);
    console.log(res.data.token);
    dispatch(setUser(res.data.token));
    localStorage.setItem("myToken", res.data.token);
    history.push("/");
    dispatch({
      type: types.SET_USER,
      payload: { userData: decode(res.data.token) },
    });
  } catch (error) {
    console.log(error);
  }
};

export const signout = () => {
  localStorage.removeItem("myToken");
  delete instance.defaults.headers.common.Authorization;
  return {
    type: types.SET_USER,
    payload: { userData: null },
  };
};

export const checkForToken = () => (dispatch) => {
  const token = localStorage.getItem("myToken");
  if (token) {
    const user = decode(token);
    if (user.exp > Date.now()) {
      dispatch(setUser(token));
    } else {
      dispatch(signout());
    }
  }
};
