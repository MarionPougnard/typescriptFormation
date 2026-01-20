/**
 * Exercice 03: Narrowing
 *
 * Créer une fonction:
 *
 * `showUserGroup(user, groupName?)` :
 *   - user: string - le nom de l'utilisateur
 *   - groupName?: string - le nom du groupe (optionnel)
 *
 * Vous n'êtes pas sûr de l'existence du groupe de l'utilisateur.
 * Retourner le nom du groupe s'il en possède un, sinon retourner "pas de groupe".
 *
 * Exemple:
 *   showUserGroup("Alice", "Admin") => "Admin"
 *   showUserGroup("Bob") => "pas de groupe"
 *   showUserGroup("Charlie", undefined) => "pas de groupe"
 */

// TODO: Implémenter la fonction

export function showUserGroup(user: string, groupName?: string) {
    return !!groupName ? groupName : "pas de groupe"
  throw new Error("Not implemented");
}
console.log(showUserGroup("Alice", "Admin"))
console.log(showUserGroup("Bob"))
console.log(showUserGroup("Charlie", undefined))
// npx tsx ./03_narrowing.ts
