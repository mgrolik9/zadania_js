function pow(x, n) {
  if (n === 0) {
    return 1;
  }
  return x * pow(x, n - 1);
}

const xVar = prompt("podaj x");
const nVar = prompt("podaj n");


pow(xVar, nVar);
