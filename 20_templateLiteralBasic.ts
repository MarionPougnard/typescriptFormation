/**
 * Exercice 20: Template Literal Types - Basic
 *
 * 1. Définir un type `HttpMethod` comme `"GET" | "POST" | "PUT" | "DELETE"`.
 *
 * 2. Définir un type `ApiVersion` comme `"v1" | "v2"`.
 *
 * 3. Créer un type `ApiEndpoint` en utilisant un template literal type qui génère
 *    toutes les combinaisons possibles sous la forme
 *    Résultat: "/v1/GET" | "/v1/POST" | ... | "/v2/DELETE"
 *
 * 4. Créer une fonction `buildEndpoint(version, method)` qui retourne un `ApiEndpoint`.
 *
 * Exemples :
 *   buildEndpoint("v1", "GET")  // "/v1/GET"
 *   buildEndpoint("v2", "POST") // "/v2/POST"
 */

// TODO: Définir les types

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE"

export type ApiVersion =  "v1" | "v2"

export type ApiEndpoint = `/${ApiVersion}/${HttpMethod}`; // Template literal

// TODO: Implémenter la fonction

export function buildEndpoint(version: ApiVersion, method: HttpMethod): ApiEndpoint {
    return `/${version}/${method}`
  throw new Error("Not implemented");
}

console.log(buildEndpoint("v1", "GET"))  // "/v1/GET"
console.log(buildEndpoint("v2", "POST")) // "/v2/POST"
// npx tsx ./20_templateLiteralBasic.ts