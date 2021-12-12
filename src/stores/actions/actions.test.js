import { clear, digit, dot, equal, operator } from './actions';

const operators = ['/', '*', '+', '-'];
describe('Digit function', () => {
  test('should be defined', () => expect(digit()).toBeDefined());

  test('should return object with type and result 0', () => {
    expect(digit(0, 0)).toEqual({ type: 'DIGIT', result: 0 });
  });
  test('should return object with type and result 1', () => {
    expect(digit(1, 0)).toEqual({ type: 'DIGIT', result: 1 });
  });
  test('should return object with type and result 11', () => {
    expect(digit(1, 1)).toEqual({ type: 'DIGIT', result: '11' });
  });
});

describe('Operator function', () => {
  test('should be defined', () => expect(operator()).toBeDefined());
  operators.forEach(item => test('should return object with type and 0', () => {
      expect(operator(item)).toEqual({ type: 'OPERATOR', operator: 0 })
  }))
  operators.forEach(item => test('should return object with type and current operator', () => {
      expect(operator(item, '547')).toEqual({ type: 'OPERATOR', operator: item })
  }))
});

describe('Dot function', () => {
  test('should be defined', () => expect(dot()).toBeDefined());
  test('should return correct object', () => expect(dot()).toEqual({ type: 'DOT'}))
});

describe('Clear function', () => {
  test('should be defined', () => expect(clear()).toBeDefined());
  test('should return correct object', () => expect(clear()).toEqual({ type: 'CLEAR', value: 0}))
});

describe('Equal function', () => {
  test('should be defined', () => expect(equal()).toBeDefined());
  test('should return correct object', () => expect(equal('3+6/2')).toEqual({ type: 'EQUAL', result: 6}))
});
