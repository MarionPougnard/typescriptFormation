/**
 * Exercice 06: Type Assertion
 *
 * Créer une fonction `parseJsonUser(json)` qui:
 * 1. Parse le JSON passé en paramètre
 * 2. Utilise une assertion de type pour typer le résultat comme `{ name: string, age: number }`
 * 3. Retourne l'objet typé
 *
 * Exemple:
 *   parseJsonUser('{"name": "Alice", "age": 25}') => { name: "Alice", age: 25 }
 *
 * Note: L'assertion de type permet de dire à TypeScript quel type
 * on attend du résultat de JSON.parse (qui retourne `any` par défaut).
 */

// TODO: Définir le type JsonUser et implémenter parseJsonUser

export type JsonUser = { name: string; age: number };

export function parseJsonUser(json: string): JsonUser {
    return JSON.parse(json);
  throw new Error("Not implemented");
}

console.log(parseJsonUser('{"name": "Alice", "age": 25}'))

// npx tsx ./06_assertion.ts

