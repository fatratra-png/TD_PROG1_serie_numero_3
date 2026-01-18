const isSorted = (tab) => {
  for (let i = 1; i <tab.length; i++) {
    if (tab[i] > tab[i - 1] && tab[i] < tab[i + 1]) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(isSorted([1, 2, 3]));
console.log(isSorted([1, 3, 2, 4]));
