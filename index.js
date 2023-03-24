function F1(x) {
  return (Math.sin(3 * x) * (1 + x * x)) / (1 + x * x * x);
}

function F2(x) {
  return Math.log(x);
}

function integrateSimpson(f, a, b, n, eps) {
  let h = (b - a) / n;
  let sum = f(a) + f(b);
  let x = 0;
  for (let i = 1; i < n; i++) {
    x = a + i * h;
    sum += f(x) * (i % 2 === 0 ? 2 : 4);
  }
  return (h / 3) * (sum + 4 * f(x - h) - 2 * f(x - 2 * h));
}

const A = 0;
const B = Math.PI / 6;
const C = 1;
const D = 3.5;
const N = 40;
const eps = 0.0002;
const I1 = integrateSimpson(F1, A, B, N);
const I2 = integrateSimpson(F2, C, D, N);

console.log("I1 =", I1);
console.log("I2 =", I2);
