// Analyse du probleme:

// Entree:tableau d'entier
// Sortie:true ou false

// Conception:

// Utiliser une structure iterative POUR afin de parcourir les elements du tableau et utiliser une structure conditionnelle simple afin de definir les conditions qui definissent si les elements du tableau sont dans l'ordre croissant ou non

// Pseudo-code:

// DEBUT 
//   Fonction isSorted(tab)
//     POUR i allant de 1 a longueur de tab Faire
//       Si tab[i]>tab[i-1] ET tab[i]<tab[i+1] Alors
//         Retourner "vrai"
//       Sinon 
//         Retourner "faux"
//       FinSi
//     FinPOUR
//   Fin Fonction
// FIN

// Implementation:

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
console.log(isSorted([1, 3, 2, 4]));k
