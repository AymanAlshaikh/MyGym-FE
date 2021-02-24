import instance from "./instance";
// ACTION TYPES
import * as types from "./types";

// ACTIONS
export const addClass = (newClass) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newClass) formData.append(key, newClass[key]);
    const res = await instance.post("/class", formData);
    dispatch({
      type: types.ADD_CLASS,
      payload: { newClass: res.data },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteClass = (classId) => async (dispatch) => {
  try {
    await instance.delete(`/class/${classId}`);
    dispatch({ type: types.DELETE_CLASS, payload: { classId: classId } });
  } catch (error) {
    console.log(error);
  }
};

export const updateClass = (updatedClass) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in updatedClass) formData.append(key, updatedClass[key]);
    const res = await instance.put(`/class/${updatedClass.id}`, formData);

    dispatch({
      type: types.UPDATE_CLASS,
      payload: { updatedClass: res.data },
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchClass = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/class");
      dispatch({ type: types.FETCH_CLASS, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};
