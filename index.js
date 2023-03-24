function F1(x) {
  return (Math.sin(3 * x) * (1 + x * x)) / (1 + x * x * x);
}

function F2(x) {
  return Math.log(x);
}

function integrateSimpson(f, a, b, n) {
  const h = (b - a) / n;
  let sum = f(a) + f(b);
  for (let i = 1; i < n; i++) {
    const x = a + i * h;
    sum += f(x) * (i % 2 === 0 ? 2 : 4);
  }
  return (sum * h) / 3;
}

const A = 0;
const B = Math.PI / 6;
const C = 1;
const D = 3.5;
const N = 40;

const I1 = integrateSimpson(F1, A, B, N);
const I2 = integrateSimpson(F2, C, D, N);

console.log("I1 =", I1);
console.log("I2 =", I2);
console.log("hello world");
