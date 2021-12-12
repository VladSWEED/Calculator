import { EQUAL, CLEAR, OPERATOR, DIGIT, DOT } from '../actions/actionTypes';

const initialState = {
  display: 0
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case DIGIT:
      return {
        ...state,
        display: action.result
      };
    case DOT:
      return {
        ...state,
        display: state.display + '.'
      };
    case OPERATOR:
      return {
        ...state,
        display: state.display + action.operator
      };
    case CLEAR:
      return {
        ...state,
        display: action.value
      };
    case EQUAL:
      return {
        ...state,
        display: action.result
      };
    default:
      return state;
  }
};
