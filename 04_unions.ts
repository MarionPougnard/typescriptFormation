/**
 * Exercice 04: Unions
 *
 * Créer deux fonctions:
 *
 * 1. `formatId(id)` :
 *    - id: number | string - l'identifiant
 *    - Accepte soit un number soit un string
 *    - Retourne toujours un string
 *    - Si c'est un nombre, préfixe avec "ID-"
 *    - Si c'est déjà un string, retourne tel quel
 *
 *    Exemple:
 *      formatId(123) => "ID-123"
 *      formatId("ABC") => "ABC"
 *
 * 2. `getUsername(user)` :
 *    - user: { username: string } | null
 *    - Retourne le nom d'utilisateur en MAJUSCULES si user n'est pas null
 *    - Retourne "INVITÉ" si user est null
 *
 *    Exemple:
 *      getUsername({ username: "alice" }) => "ALICE"
 *      getUsername(null) => "INVITÉ"
 */

// TODO: Définir le type User et implémenter les fonctions

export type User = { username: string };

export function formatId(id: number | string) {
    return typeof  id === "string" ? id : `ID-${id}`
  throw new Error("Not implemented");
}
console.log(formatId(123))
console.log(formatId("ABC"))

export function getUsername(user: User|null) {
    return user ? user.username.toUpperCase() : "INVITÉ"
  throw new Error("Not implemented");
}

console.log(getUsername({ username: "alice" }))
console.log(getUsername(null))

// npx tsx ./04_unions.ts
