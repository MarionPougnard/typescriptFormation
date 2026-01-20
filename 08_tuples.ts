/**
 * Exercice 08: Tuples
 *
 * Créer une fonction `createPerson(name, age)` qui:
 * - Prend un `name` de type string
 * - Prend un `age` de type number
 * - Retourne un tuple string, number contenant le nom et l'âge
 *
 * Exemple:
 *   createPerson("Alice", 25) => ["Alice", 25]
 *   createPerson("Bob", 30) => ["Bob", 30]
 *
 */

// TODO: Implémenter createPerson

export function createPerson(name: string, age: number): [string, number] {
    return [name, age];
  throw new Error("Not implemented");
}
console.log(createPerson("Alice", 25))
console.log(createPerson("Bob", 30))

// npx tsx ./08_tuples