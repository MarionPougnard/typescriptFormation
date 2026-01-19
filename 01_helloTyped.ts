/**
 * Exercice 01: Hello Typed
 *
 * Créer une fonction `greet` qui prend un paramètre `name` de type `string`
 * et retourne un `string` sous la forme "Hello, {name}!".
 *
 * Exemple:
 *   greet("Alice") => "Hello, Alice!"
 *   greet("Bob") => "Hello, Bob!"
 */

// TODO: Créer et exporter la fonction greet
export function greet(name: string): string {
  return `Hello, ${name}!`
  throw new Error("Not implemented");
}

/**
 * Comment tester mon code ?
 * Exécuter: npx tsx ./01_helloTyped.ts
 */
 console.log(greet("Alice")); // Devrait afficher: Hello, Alice!
