/**
 * Exercice 19: Utility Types - NonNullable
 *
 * 1. Définir un type `MaybeUser` comme `{ name: string, email: string } | null | undefined`.
 *
 * 2. Créer un type `DefiniteUser` en utilisant `NonNullable` sur `MaybeUser`.
 *
 * 3. Créer une fonction `getUsers()` qui retourne un tableau de `MaybeUser`.
 *
 * 4. Créer une fonction `filterValidUsers(users)` qui :
 *    - Prend un tableau de `MaybeUser`
 *    - Retourne un tableau de `DefiniteUser` (sans les null/undefined)
 *
 * Exemples :
 *   const users: MaybeUser[] = [{ name: "Alice", email: "a@test.com" }, null, { name: "Bob", email: "b@test.com" }];
 *   filterValidUsers(users)  // [{ name: "Alice", email: "a@test.com" }, { name: "Bob", email: "b@test.com" }]
 *
 */

// TODO: Définir les types

export type MaybeUser = { name: string, email: string } | null | undefined

export type DefiniteUser = NonNullable<MaybeUser>;

// TODO: Implémenter les fonctions

export function getUsers(): MaybeUser[] {
    return []
  throw new Error("Not implemented");
}

export function filterValidUsers(users: MaybeUser[]): DefiniteUser[] {
    return users.filter(user => !!user)
  throw new Error("Not implemented");
}

const users: MaybeUser[] = [{ name: "Alice", email: "a@test.com" }, null, { name: "Bob", email: "b@test.com" }];
console.log(filterValidUsers(users))  // [{ name: "Alice", email: "a@test.com" }, { name: "Bob", email: "b@test.com" }]
// npx tsx ./19_utilityNonNullable.ts