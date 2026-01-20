/**
 * Exercice 13: Promise
 *
 * Créer une fonction `fetchUsername(userId)` qui :
 * - Prend un `userId` de type number
 * - Retourne une `Promise<string>` contenant le nom d'utilisateur
 * - Utilise l'API JSONPlaceholder : https://jsonplaceholder.typicode.com/users/{userId}
 *
 * L'API retourne un objet utilisateur avec une propriété `username`.
 *
 * Exemple:
 *   await fetchUsername(1) => "Bret"
 *   await fetchUsername(2) => "Antonette"
 *
 * Note: Utilisez fetch() ou axios pour effectuer la requête HTTP.
 */

// TODO: Implémenter fetchUsername
export type Data = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}
export async function fetchUsername(userId: number): Promise<string> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if (!response.ok) throw new Error("requête non ok");
    const data: Data = await response.json() as Data;
    return data?.username;
  throw new Error("Not implemented");
}


async function main() {
    try {
        const user1 = await fetchUsername(1);
        const user2 = await fetchUsername(2);

        console.log("User 1:", user1);
        console.log("User 2:", user2);
    } catch (err) {
        console.error("Erreur :", err);
    }
}

main();

// NODE_TLS_REJECT_UNAUTHORIZED=0  npx tsx ./13_promise.ts
