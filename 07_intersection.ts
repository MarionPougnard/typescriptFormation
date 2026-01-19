/**
 * Exercice 07: Intersection Types
 *
 * 1. Définir deux types:
 *    - `HasEmail` : { email: string }
 *    - `HasRole` : { role: string }
 *
 * 2. Créer une fonction `createUser(info)` où:
 *    - `info` est le type intersection de `HasEmail` et `HasRole`
 *    - Retourne un string formaté: "Utilisateur : {email}, rôle : {role}"
 *
 * Exemple:
 *   createUser({ email: "alice@test.com", role: "admin" })
 *   => "Utilisateur : alice@test.com, rôle : admin"
 */

// TODO: Définir les types et implémenter createUser

export type HasEmail = any
export type HasRole = any

export function createUser(info: any): string {
  throw new Error("Not implemented");
}
