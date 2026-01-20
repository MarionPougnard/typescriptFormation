/**
 * Exercice 10: Arrays
 *
 * Créer deux fonctions:
 *
 * 1. `sumNumbers(numbers)` :
 *    - Prend un tableau de nombres
 *    - Retourne leur somme (number)
 *
 *    Exemple:
 *      sumNumbers([1, 2, 3]) => 6
 *      sumNumbers([]) => 0
 *      sumNumbers([10, -5, 3]) => 8
 *
 * 2. `filterLongWords(words, minLength)` :
 *    - Prend un tableau de strings
 *    - Prend une longueur minimale (number)
 *    - Retourne les mots dont la longueur est >= minLength
 *
 *    Exemple:
 *      filterLongWords(["hi", "hello", "world"], 4) => ["hello", "world"]
 *      filterLongWords(["a", "ab", "abc"], 2) => ["ab", "abc"]
 */

// TODO: Implémenter les fonctions

export function sumNumbers(numbers: number[]) {
    return numbers.reduce((acc, currentValue) => acc + currentValue, 0);
  throw new Error("Not implemented");
}

console.log(sumNumbers([1, 2, 3]))
console.log(sumNumbers([]))
console.log(sumNumbers([10, -5, 3]))

export function filterLongWords(words: string[], minLength: number) {
    return words.filter((word) => word.length >= minLength);
  throw new Error("Not implemented");
}

console.log(filterLongWords(["hi", "hello", "world"], 4))
console.log(filterLongWords(["a", "ab", "abc"], 2))

// NODE_TLS_REJECT_UNAUTHORIZED=0 npx tsx ./10_arrays.ts
