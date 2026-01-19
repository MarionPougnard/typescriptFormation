
/**
 * Utiliser les ternaires en les chainants, pour éviter les if elseif else
 * 
 * Renvoyer ">" si a supérieur à b
 * Renvoyer "<" si a inférieur à b
 * Renvoyer "=" si a égal à b
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */

function ternaryChain(a, b) {
    return (a > b) ? ">"
        : (a === b) ? "="
        : "<";
}

console.log(ternaryChain(1,2));
console.log(ternaryChain(4,3));
console.log(ternaryChain(5,5));
// node ./03_ternaireChain.js

module.exports = ternaryChain;