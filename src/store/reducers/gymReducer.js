import * as types from "../actions/types";

const initialState = {
  gym: [], //gymData,
};

const gymReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_GYM:
      const { newGym } = action.payload;

      return {
        ...state,
        gym: [...state.gym, newGym],
      };
    case types.DELETE_GYM:
      return {
        ...state,
        gym: state.gym.filter((gym) => gym.id !== action.payload.gymId),
      };
    case types.UPDATE_GYM:
      const { updatedGym } = action.payload;
      return {
        ...state,
        gym: state.gym.map((gym) =>
          gym.id === updatedGym.id ? updatedGym : gym
        ),
      };
    case types.FETCH_GYM:
      return { ...state, gym: action.payload };
    default:
      return state;
  }
};

export default gymReducer;
