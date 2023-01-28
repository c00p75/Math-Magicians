import operate from '../logic/operate';

describe('Test for operate function logic. It takes two numbers and the operator as argumenet', () => {
  test('Return the sum of two numbers', () => {
    expect(operate(10, 22, '+')).toEqual('32');
  });
  test('Return the difference of two numbers', () => {
    expect(operate(4, 1, '-')).toEqual('3');
  });
  test('Multiply two numbers', () => {
    expect(operate(62, 10, 'x')).toEqual('620');
  });
  test('Divide two numbers', () => {
    expect(operate(9, 3, '÷')).toEqual('3');
  });
});
