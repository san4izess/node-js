function func(x) {
  return 2 * x * Math.sin(x) - Math.cos(x);
}

function ribakov_method(a, b, eps, M) {
  let fa = func(a);
  let fb = func(b);
  let L = Math.abs(b - a);
  while (L > eps) {
    let c = (a + b) / 2;
    let fc = func(c);
    let K = (M * L) / (2 * Math.max(Math.abs(fa), Math.abs(fb)));
    if (fc == 0) {
      return c;
    } else if (fa * fc < 0) {
      b = c;
      fb = fc;
    } else {
      a = c;
      fa = fc;
    }
    if (Math.abs(b - a) < eps) {
      return (a + b) / 2;
    }
    if (Math.abs(b - c) < K) {
      a = c;
      fa = fc;
    } else if (Math.abs(c - a) < K) {
      b = c;
      fb = fc;
    } else {
      a = c - K / 2;
      b = c + K / 2;
      fa = func(a);
      fb = func(b);
    }
    L = Math.abs(b - a);
  }
  return (a + b) / 2;
}
let a = 0.4,
  b = 1;
let M = 4.3;
let eps = 0.1;
let x = ribakov_method(a, b, eps, M);
let y = func(x);
console.log(`Корінь рівняння: x = ${x.toFixed(4)}`);
console.log(`Значення функції в точці x: y = ${y.toFixed(4)}`);
