import instance from "./instance";
// ACTION TYPES
import * as types from "./types";

// ACTIONS
export const addGym = (newGym) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newGym) formData.append(key, newGym[key]);
    const res = await instance.post("/gym", newGym); //formData);
    dispatch({
      type: types.ADD_GYM,
      payload: { newGym: res.data },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteGym = (gymId) => async (dispatch) => {
  try {
    await instance.delete(`/gym/${gymId}`);
    dispatch({ type: types.DELETE_GYM, payload: { gymId: gymId } });
  } catch (error) {
    console.log(error);
  }
};

export const updateGym = (updatedGym) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in updatedGym) formData.append(key, updatedGym[key]);
    const res = await instance.put(`/gym/${updatedGym.id}`, formData);

    dispatch({
      type: types.UPDATE_GYM,
      payload: { updatedGym: res.data },
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchGym = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/gym");
      dispatch({ type: types.FETCH_GYM, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};
