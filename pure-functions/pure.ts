/*
 * Invalid
 */

let value: number = 5;

const multipleInvalid = (x: number): number => {
  value ++; // Side effect
  return x * value;
};

console.log('Invalid: ', multipleInvalid(25));
console.log('Invalid: ', multipleInvalid(25));

/*
 * Valid
 */

const multipleValid = (x: number, y: number): number => {
  y++; // No side effect, however assignment to fn params is not recommended
  return x * y;
};

console.log('Valid: ', multipleValid(5, 20));
console.log('Valid: ', multipleValid(5, 20));
