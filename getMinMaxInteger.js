// Analyse du probleme:
// Entree:tableau d'entiers
// Sortie:le plus petit element et le plus grand element du tableau

// Conception:
// Utiliser une structure iterative et une structure conditionnelle pour parcourir le tableau d'entier et en deduire le max et le minimum
// Comparer chaque element du tableau avec deux variables initialisees a 0 et en deduire le maximum et le minimum en fonction de la variable initiale

// Pseudo-code:
// DEBUT
//     Fonction getMinMaxInteger(tab)

//         Declarer tab:tableau
//         Declarer min:entier
//         Declarer max:entier

//         minimum=tab[0]
//         maximum=tab[0]
//         POUR i allant de 1 a longueur du tableau Faire
//             Si tab[i]<min Alors
//                 minimum=tab[i]
//             FinSi
//             Si tab[i]>max Alors
//              maximum=tab[i]
//             FinSi
//         FinPOUR

//         Retourner {minimum,maximum}

//     Fin Fonction

// FIN

//Implementation:

const getMinMaxInteger = (tab) => {
  let minimum = tab[0];
  let maximum = tab[0];

  for (let i = 1; i < tab.length; i++) {
    if (tab[i] < minimum) {
      minimum = tab[i];
    }
    if (tab[i] > maximum) {
      maximum = tab[i];
    }
  }
  return { minimum, maximum };
};
console.log(getMinMaxInteger([1, 7, 6, 9, 14, 0])); //0;14
console.log(getMinMaxInteger([0, 0, 0, 0, 0])); //0;0
console.log(getMinMaxInteger([2, 102, 1, 4, 8, 5, 0, 999, 1])); //0;999
