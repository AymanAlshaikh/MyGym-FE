import * as types from "../actions/types";

const initialState = {
  clas: [], //clasData,
};

const clasReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CLASS:
      const { newClass } = action.payload;

      return {
        ...state,
        clas: [...state.clas, newClass],
      };
    case types.DELETE_CLASS:
      return {
        ...state,
        clas: state.clas.filter((clas) => clas.id !== action.payload.clasId),
      };
    case types.UPDATE_CLASS:
      const { updatedClass } = action.payload;
      return {
        ...state,
        clas: state.clas.map((clas) =>
          clas.id === updatedClass.id ? updatedClass : clas
        ),
      };
    case types.FETCH_CLASS:
      return { ...state, clas: action.payload };
    default:
      return state;
  }
};

export default clasReducer;
