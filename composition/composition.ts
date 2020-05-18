const fn1 = (x: number, y: number): number => { // SHORT: const fn1 = (x: number, y: number): number => x + y;
  return x + y;
}

const fn2 = (x: number, y: number): number => { // SHORT: const fn2 = (x: number, y: number): number => x * y;
  return x * y;
};

/*
 * Invalid
 */

let resInvalid = fn1(5, 20);
resInvalid = fn2(resInvalid, 20); // Side effect

console.log('Invalid: ', resInvalid);

/*
 * Valid
 */

const resValid = fn2(fn1(5, 20), 20); // No side effect

console.log('Valid: ', resValid);
