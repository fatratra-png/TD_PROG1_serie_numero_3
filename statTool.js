const { startTransition } = require("react");

const sum = (tab) => {
  if (tab.length == 0) return 0;
  let sum = 0;

  for (let i = 0; i < tab.length; i++) {
    sum += tab[i];
  }
  return sum;
};
// console.log(sum([1, 3, 7, 6, 10]));
// console.log(sum([]));

const mean = (tab) => {
  let sum = 0;
  for (let i = 0; i < tab.length; i++) {
    sum += tab[i];
  }
  return (sum / tab.length);
};
// console.log(mean([12, 14, 17]));

const square = (tab) => {
  for (let i = 0; i < tab.length; i++) {
    tab[i] *= tab[i];
  }
  return tab;
};
// console.log(square([3, 8, 5]));

const variance = (tab) => {
  let sum = 0;
  let sumOfSquare = 0;

  for (let i = 0; i < tab.length; i++) {
    sum += tab[i];
    sumOfSquare += tab[i] ** 2;
  }
  let mean = sum / tab.length;
  let meanOfSquare = sumOfSquare / tab.length;
  return meanOfSquare - mean ** 2;
};
// console.log(variance([1, 9, 7]));

const standardDerivation = (tab) => {
  let sum = 0;
  let sumOfSquare = 0;

  for (let i = 0; i < tab.length; i++) {
    sum += tab[i];
    sumOfSquare += tab[i] ** 2;
  }
  let mean = sum / tab.length;
  let meanOfSquare = sumOfSquare / tab.length;
  let variance = meanOfSquare - mean ** 2;
  let standardDerivation = Math.sqrt(variance);
  return standardDerivation;
};
// console.log(standardDerivation([1, 9, 7]));

