// Analyse du probleme:

// Entree:tableau
// Sortie:la somme des nombres du tableau

// Conception:

// Utiliser une structure iterative POUR afin de parcourir le tableau et additionner chaque element parcouru avec une variable sum initialisee a 0
// Utiliser une structure conditionnelle simple afin de definir comme condition le retour de 0 si le tableu est vide

// Pseudo-code:

// DEBUT
//   Fonction sum(tab)
//     Declarer tab:tableau

//     Si longueur du tableau == 0 Alors
//       Retourner 0
//     FinSi

//     POUR i allant de 0 a longueur de tab Faire
//       sum=sum+tab[i]
//     FinPOUR

//     Retourner sum

//   Fin Fonction
// FIN

// Implementation:

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

// Analyse du probleme:
// Entree:tableau non vide
// Sortie:La moyenne des elements du tableau

// Conception:
// Utiliser une structure iterative POUR afin de parcourir le tableau et additionner chaque element parcouru avec une varibale sum initialisee a 0 et ensuite diviser ta somme par la longueur du tableau

// Pseudo-code:

// DEBUT
//   Fonction mean(tab)
//     Declarer sum:entier
//     Declarer tab:tableau
//     sum=0

//     POUR i allant de 0 a longueur de tab Faire
//       sum=sum+tab[i]
//     Fin POUR

//     Declarer mean:reel

//     mean=sum/longueur de tab

//     Retourner mean
//   Fin Fonction
// FIN

// Implementation:

const mean = (tab) => {
  let sum = 0;
  for (let i = 0; i < tab.length; i++) {
    sum += tab[i];
  }
  let mean = sum / tab.length;
  return mean;
};
// console.log(mean([12, 14, 17]));

// Analyse du probleme:

// Entree: tableau
// Sortie: tableau contenant le carre de ses elements precedents

// Conception:

// Utiliser une structure iterative POUR ain de parcourir le tableau

// Pseudo-code:

// DEBUT
//   Fonction square(tab)
//     Declarer tab:tableau

//     POUR i allant de 0 a longueur de tab Faire
//       tab[i]==tab[i]**2
//     Fin POUR

//     Retourner tab

//   Fin Fonction
// FIN

// Implementaion:

const square = (tab) => {
  for (let i = 0; i < tab.length; i++) {
    tab[i] **= 2;
  }
  return tab;
};
// console.log(square([3, 8, 5]));

// Analyse du probleme:

// Entree:tableau
// Sortie:Variance des elements du tableau

// Conception:
// Utiliser une structure iterative POUR afin de parcourir les elements du tableau et les manipuler afin d'en deduire la variance
// Utiliser les instructions donnees pour deduire une formule pour calculer la variance

// Pseudo-code:
// DEBUT
//   Fonction variance(tab)
//     Declarer sum:entier
//     Declarer sumOfSquare:entier

//     sum=0
//     sumOfSquare=0

//     POUR i allant de 0 a longueur de tab -1 Faire
//       sum=sum+tab[i]
//       sumOfSquare=sumOfSquare+(tab[i]**2)
//     Fin POUR

//     Declarer mean:reel
//     Declarer meanOfSquare:reel

//     mean=sum/longueur de tab
//     meanOfSquare=sumOfSquare/longueur de tab

//     Declarer variance:reel
//     variance=meanOfSquare-(mean**2)

//     Retourner variance

//   Fin Fonction
// FIN

// Implementation:

const variance = (tab) => {
  let sum = 0;
  let sumOfSquare = 0;

  for (let i = 0; i < tab.length; i++) {
    sum += tab[i];
    sumOfSquare += tab[i] ** 2;
  }
  let mean = sum / tab.length;
  let meanOfSquare = sumOfSquare / tab.length;

  let variance = meanOfSquare - mean ** 2;

  return variance;
};
// console.log(variance([1, 9, 7]));

// Analyse du probleme:
// Entree:tableau
// Sortie:Ecart-type du tableau

// Conception:
// Utiliser une structure iterative POUR afin de parcourir les elements du tableau et en deduire d'apres les instructions l'ecart-type des elements du tableau

// Pseudo-code:

// DEBUT
//   Fonction standardDerivation(tab)
//     Declarer sum:entier
//     Declarer sumOfSquare:entier
//     sum=0
//     sumOfSquare=0

//     POUR i allant de 0 a longueur de tab -1 Faire
//       sum=sum+tab[i]
//       sumOfSquare=sumOfSquare+(tab[i]**2)
//     Fin POUR

//     Declarer mean:reel
//     mean=sum/longueur de tab

//     Declarer meanOfSquare=reel
//     meanOfSquare=sumOfSquare/longueur de tab

//     Declarer variance:reel
//     variance=meanOfSquare-(mean**2)

//     Declarer standardDerivation=racine carree de (variance)

//     Retourner standardDerivation
//   Fin Fonction
// FIN

// Implementation :

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
