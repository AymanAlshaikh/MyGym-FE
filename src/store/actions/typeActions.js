import instance from "./instance";
// ACTION TYPES
import * as types from "./types";

// ACTIONS
export const addType = (newType) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newType) formData.append(key, newType[key]);
    const res = await instance.post("/type", formData);
    dispatch({
      type: types.ADD_TYPE,
      payload: { newType: res.data },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteType = (typeId) => async (dispatch) => {
  try {
    await instance.delete(`/type/${typeId}`);
    dispatch({ type: types.DELETE_TYPE, payload: { typeId: typeId } });
  } catch (error) {
    console.log(error);
  }
};

export const updateType = (updatedType) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in updatedType) formData.append(key, updatedType[key]);
    const res = await instance.put(`/type/${updatedType.id}`, formData);

    dispatch({
      type: types.UPDATE_TYPE,
      payload: { updatedType: res.data },
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchType = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/type");
      dispatch({ type: types.FETCH_TYPE, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};
