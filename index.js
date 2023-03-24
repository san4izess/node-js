let a = 0.4,
  b = 1;
let M = 4.3;
let eps = 0.001;

function f(x) {
  return 2 * x * Math.sin(x) - Math.cos(x);
}

while (Math.abs(b - a) > eps) {
  let x0 = (a + b) / 2;
  let fx0 = f(x0);

  if (Math.abs(fx0) < eps) {
    console.log("Найдено решение: ", x0);
    break;
  }

  if (Math.sign(fx0) === Math.sign(f(a))) {
    a = x0;
  } else {
    b = x0;
  }

  let dfx0 = 2 * Math.sin(x0) + 2 * x0 * Math.cos(x0) + Math.sin(x0);
  if (Math.abs(dfx0) > M) {
    M = Math.abs(dfx0);
  }
}
