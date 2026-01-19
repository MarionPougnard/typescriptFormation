
/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est explicite
 * 
 * contrainte: 
 *   - le mot clée "function" est interdit
 */

let arrow1 = a => {
    return a++
}

/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est implicite
 * 
 * contrainte: 
 *   - le mot clée "function" est interdit
 *   - le mot clée "return" est interdit
 */

let arrow2 = b => b++

console.log(arrow1(1), arrow2(2));
// node ./04_arrow.js

module.exports = {arrow1, arrow2};