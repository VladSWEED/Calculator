import { EQUAL, CLEAR, DIGIT, OPERATOR, DOT } from './actionTypes';

export const digit = (value, prev) => {
  const result = !prev ? value ? value : 0 : prev + value.toString()
  return {
    type: DIGIT,
    result: result
  };
};

export const operator = (value, display) => {
  const operator = !display ? 0 : value;
  return {
    type: OPERATOR,
    operator
  };
};

export const dot = () => {
  return {
    type: DOT
  };
};

export const clear = () => {
  return {
    type: CLEAR,
    value: 0
  };
};

export const equal = (value) => {
  return {
    type: EQUAL,
    result: eval(value)
  };
};
