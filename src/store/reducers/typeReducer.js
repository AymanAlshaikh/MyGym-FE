import * as types from "../actions/types";

const initialState = {
  type: [], //typeData,
};

const typeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TYPE:
      const { newType } = action.payload;

      return {
        ...state,
        type: [...state.type, newType],
      };
    case types.DELETE_TYPE:
      return {
        ...state,
        type: state.type.filter((type) => type.id !== action.payload.typeId),
      };
    case types.UPDATE_TYPE:
      const { updatedType } = action.payload;
      return {
        ...state,
        type: state.type.map((type) =>
          type.id === updatedType.id ? updatedType : type
        ),
      };
    case types.FETCH_TYPE:
      return { ...state, type: action.payload };
    default:
      return state;
  }
};

export default typeReducer;
