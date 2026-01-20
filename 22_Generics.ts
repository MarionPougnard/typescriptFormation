/**
 * Exercice 22: Generics
 *
 * Créer une fonction générique `typedFetch<T>` qui :
 * - Prend en paramètre une `url` (string) et une `method` (string)
 * - Fait un fetch vers l'URL avec la méthode spécifiée
 * - Retourne une `Promise<T>` du résultat JSON
 * - Gère les erreurs avec try/catch
 *
 * Le type générique `T` permet de typer le résultat attendu.
 *
 * Exemples :
 *   type User = {
 *     id: number;
 *     name: string;
 *   }
 *
 *   const user = await typedFetch<User>("https://api.example.com/user/1", "GET");
 *   // user est de type User
 *
 *   const users = await typedFetch<User[]>("https://api.example.com/users", "GET");
 *   // users est de type User[]
 */

// TODO: Implémenter la fonction générique

export async function typedFetch<T>(url: string, method: string): Promise<T> {
    try {
        const response = await fetch(url, {method: method});
        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
        const data: T = await response.json()
        return data
    } catch (e) {
        console.error(e)
    }
  throw new Error("Not implemented");
}


// npx tsx ./22_Generics.ts