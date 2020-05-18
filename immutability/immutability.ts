var x: number = 1;
x++; // Allowed | (x += 1) - Better ESLint compatibility

let y: number = 2;
y++; // Allowed | (y += 1) - Better ESLint compatibility

const z: number = 3;
z++; // NOT Allowed! v is constant (read-only)

const v: number[] = [1, 3, 5];
v = [3, 5, 7]; // NOT Allowed! v is constant (read-only)
v = 10; // NOT Allowed! v is constant (read-only)
v[1] = 5; // Allowed! v is an array with three elements that you can always change, remove, add new ones.
v[1] = v[2] * 5; // Allowed! you can even use the array elements to calculate and assign to another.

const w: readonly number[] = Object.freeze([1, 3, 5]);
w = [3, 5, 7]; // NOT Allowed! w is constant (read-only) && w is frozen
w = 10; // NOT Allowed! w is constant (read-only) && w is frozen
w[1] = 5 // NOT Allowed! w has three elements that got frozen on the TOP LEVEL ONLY!
w[1] = v[2] * 5; // NOT Allowed! w has three elements that got frozen on the TOP LEVEL ONLY!

const vw: readonly (number | number[])[] = Object.freeze([1, 3, 5, [7, 9, 11]]);
vw = [3, 5, 7, [9, 11, 13]] // NOT Allowed! vw is constant (read-only) && vw is frozen
vw[3][1] = 15; // Allowed! Object.freeze only freeze the top level! Deeper levels still writeable

console.log('x: ', x, ' y: ', y, ' z: ', z, ' v: ', v, ' w: ', w, ' vw: ', vw);
