/*
 * Invalid
 */

const sumNumbersInvalid = (...args: number[]): number => {
  let result = 0;

  for (let i = 0; i < args.length; i += 1) {
    result += args[i];
  }

  return result;
}

console.log(sumNumbersInvalid(1, 2, 7, 32, 21, 8, 11, 74));

/*
 * Valid
 */

const sumNumbersValid = (...args: number[]): number => {
  if (args.length <= 2) return args[0] + args[1];

  return args[0] + sumNumbersValid(...args.slice(1)); // slices down one number from the array at every recursion call
}

console.log(sumNumbersValid(1, 2, 7, 32, 21, 8, 11, 74));
