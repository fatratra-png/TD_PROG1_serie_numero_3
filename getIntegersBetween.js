// Analyse du probleme:

// Entree:deux nombres a et b
// Sortie:un tableau contenant tous les nombres entre a et b

// Conception:

// Utiliser une structure iterative POUR pour parcourir l'ensemble des nombres entre a et b et utiliser une structure de donnee(tableau vide) pour y stocker chaque element parcouru

// Pseudo-code:

// DEBUT
//     Fonction getIntegersBetween(a,b)
//         Declarer a:entier
//         Declarer b:entier
//         Declarer tab:tableau

//         POUR i allant de a+1 a b Faire
//             Ajouter i au tableau
//         FinPOUR

//         Retourner tableau
//     Fin Fonction
// FIN

//Implementation:

const getIntegersBetween = (a, b) => {
  let tab = [];
  for (let i = a + 1; i < b; i++) {
    tab.push(i);
  }
  return tab;
};
console.log(getIntegersBetween(4, 10));
console.log(getIntegersBetween(5, 5));
console.log(getIntegersBetween(100, 153));
