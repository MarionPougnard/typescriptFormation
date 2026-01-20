/**
 * Exercice 09: Any vs Unknown
 *
 * Créer deux fonctions:
 *
 * 1. `processUnknown(value)` :
 *    - Prend une valeur de type `unknown`
 *    - Vérifie si c'est un string
 *    - Retourne sa longueur si c'est un string, sinon retourne 0
 *
 *    Exemple:
 *      processUnknown("hello") => 5
 *      processUnknown(123) => 0
 *      processUnknown(null) => 0
 *
 * 2. `safeParseNumber(value)` :
 *    - Prend une valeur de type `unknown`
 *    - Tente de la convertir en nombre
 *    - Retourne le nombre si la conversion réussit, sinon retourne null
 *
 *    Exemple:
 *      safeParseNumber("42") => 42
 *      safeParseNumber(3.14) => 3.14
 *      safeParseNumber("abc") => null
 *      safeParseNumber(null) => null
 *
 * Note: `unknown` est plus sûr que `any` car il force la vérification
 * du type avant utilisation.
 */

// TODO: Implémenter les fonctions

export function processUnknown(value: unknown) {
    return typeof value === "string" ? value.length : 0
  throw new Error("Not implemented");
}
console.log(processUnknown("hello"))
console.log(processUnknown(123))
console.log(processUnknown(null))

export function safeParseNumber(value: unknown): number | null {
    return (typeof Number(value) === "number" && !!(Number(value))) ? Number(value) : null;
  throw new Error("Not implemented");
}

console.log(safeParseNumber("42"))
console.log(safeParseNumber(0))
console.log(safeParseNumber(3.14))
console.log(safeParseNumber("abc"))
console.log(safeParseNumber(null))
// npx tsx ./09_anyVsUnknown.ts