
/**
 * retourne la valeur la plus grande des deux paramètres
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
function ternaire(a , b) {
    return a >= b ? a : b;
}

console.log(ternaire(1,2));
console.log(ternaire(4,3));
console.log(ternaire(5,5));
// node ./02_ternaire.js


module.exports = ternaire;