/**
 * Exercice 02: Basic Types
 *
 * Créer quatre fonctions:
 *
 * 1. `add(a, b)` : additionne deux nombres et retourne un nombre
 *    Exemple: add(2, 3) => 5
 *
 * 2. `isAdult(age)` : retourne true si l'âge est >= 18, false sinon
 *    Exemple: isAdult(20) => true, isAdult(15) => false
 *
 * 3. `getFullName(firstName, lastName)` : concatène prénom et nom avec un espace
 *    Exemple: getFullName("John", "Doe") => "John Doe"
 *
 * 4. `greet(name?)` : retourne "Hello, {name}!" si un nom est fourni,
 *    ou "Hello!" si aucun nom n'est donné (paramètre optionnel)
 *    Exemple: greet("Alice") => "Hello, Alice!", greet() => "Hello!"
 */

// TODO: Implémenter les fonctions

export function add(a: number, b: number) {
    return a + b;
  throw new Error("Not implemented");
}

console.log(add(5, 3))

export function isAdult(age: number){
    return age >= 18
  throw new Error("Not implemented");
}
 console.log(isAdult(27))
console.log(isAdult(14))

export function getFullName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`
  throw new Error("Not implemented");
}

console.log(getFullName("John", "Doe"))

export function greet(name?: string) {
    return name ? `Hello, ${name}!` : `Hello!`
  throw new Error("Not implemented");
}
console.log(greet("Alice"))
console.log(greet())

// npx tsx ./02_basicTypes.ts