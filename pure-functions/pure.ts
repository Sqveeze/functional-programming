/*
 * Invalid
 */

let value: number = 5;

const multipleInvalid = (x: number): number => {
  value ++;
  return x * value;
};

console.log('Invalid: ', multipleInvalid(25));
console.log('Invalid: ', multipleInvalid(25));

/*
 * Valid
 */

const multipleValid = (x: number, y: number): number => {
  y++;
  return x * y;
};

console.log('Valid: ', multipleValid(5, 20));
console.log('Valid: ', multipleValid(5, 20));
