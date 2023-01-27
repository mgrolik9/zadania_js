const start = 2;
const end= 10;


for (let i = start; i <= end; i++) {
  let first = true;
  for (let j = start; j < i; j++) {
    if (i % j === 0) {
      first = false;
      break;
    }
  }
  if (first) {
    console.log(i);
  }
}
