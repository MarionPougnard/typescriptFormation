/**
 * Exercice 17: Utility Types - ReturnType & Parameters
 *
 * Soit la fonction existante :
 * ```typescript
 * function createUser(name: string, age: number, active: boolean) {
 *     return { id: Math.random(), name, age, active, createdAt: new Date() };
 * }
 * ```
 *
 * 1. Utiliser `ReturnType` pour créer un type `User` qui correspond au type de retour de `createUser`.
 *
 * 2. Utiliser `Parameters` pour créer un type `CreateUserParams` qui correspond aux paramètres de `createUser`.
 *
 * 3. Créer une fonction `cloneUser(user)` qui prend un `User` et retourne une copie avec un nouvel `id`.
 *
 * 4. Créer une fonction `createUserFromArray(params)` qui prend un `CreateUserParams` (tuple) et appelle `createUser`.
 *
 * Exemples :
 *   const user = createUser("Alice", 30, true);
 *   cloneUser(user)  // { id: <new>, name: "Alice", age: 30, active: true, createdAt: <same> }
 *
 *   createUserFromArray(["Bob", 25, false])  // équivalent à createUser("Bob", 25, false)
 */

// Fonction fournie - NE PAS MODIFIER
export function createUser(name: string, age: number, active: boolean) {
  return { id: Math.random(), name, age, active, createdAt: new Date() };
}

// TODO: Définir les types avec ReturnType et Parameters

export type User = ReturnType<typeof createUser>;

export type CreateUserParams = Parameters<typeof createUser>;

// TODO: Implémenter les fonctions

export function cloneUser(user: User): User {
    return {...user, id: Math.random()}
  throw new Error("Not implemented");
}

export function createUserFromArray(params: CreateUserParams): User {
    return createUser(...params);
  throw new Error("Not implemented");
}

const user = createUser("Alice", 30, true);
console.log(cloneUser(user) ) // { id: <new>, name: "Alice", age: 30, active: true, createdAt: <same> }

console.log(createUserFromArray(["Bob", 25, false])) // équivalent à createUser("Bob", 25, false)
// npx tsx ./17_utilityReturnTypeParameters.ts