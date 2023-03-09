const fibs = (number) => {
  let result = [0];
  if (number < 0) return null;
  for (let i = 1; i < number; ++i) {
    if (i === 1) result.push(1);
    else result.push(result[i - 1] + result[i - 2]);
  }
  return result;
};

console.log(fibs(9));

const fibsRec = (number) => {
  return number <= 0
    ? []
    : number === 1
    ? [1]
    : number === 2
    ? [0, 1]
    : [
        ...fibsRec(number - 1),
        fibsRec(number - 1)[number - 2] + fibsRec(number - 1)[number - 3],
      ];
};

console.log(fibsRec(9));
