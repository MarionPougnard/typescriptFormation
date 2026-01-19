/**
 * Exercice 14: Utility Types - Partial & Required
 *
 * 1. Définir un type `UserProfile` avec :
 *    - `username` : string
 *    - `email` : string
 *    - `age` : number
 *    - `bio` : string
 *
 * 2. Créer une fonction `updateProfile(profile, updates)` où :
 *    - `profile` est de type `UserProfile`
 *    - `updates` est de type `Partial<UserProfile>`
 *    - Retourne un nouveau `UserProfile` avec les mises à jour appliquées
 *
 * 3. Créer une fonction `validateCompleteProfile(profile)` qui :
 *    - Prend un `Partial<UserProfile>`
 *    - Retourne `true` si toutes les propriétés sont définies, `false` sinon
 *
 * Exemples :
 *   const profile = { username: "john", email: "john@test.com", age: 25, bio: "Dev" };
 *   updateProfile(profile, { age: 26 })  // { username: "john", email: "john@test.com", age: 26, bio: "Dev" }
 *
 *   validateCompleteProfile({ username: "john" })  // false
 *   validateCompleteProfile(profile)  // true
 */

// TODO: Définir le type UserProfile

export type UserProfile = {
  // À compléter
};

// TODO: Implémenter updateProfile

export function updateProfile(profile: any, updates: any): any {
  throw new Error("Not implemented");
}

// TODO: Implémenter validateCompleteProfile

export function validateCompleteProfile(profile: any): any {
  throw new Error("Not implemented") ;
}
