/**
 * Exercice 11: Object Type
 *
 * 1. Définir un type `Car` avec les propriétés suivantes :
 *    - `brand` : string
 *    - `model` : string
 *    - `year` : number
 *
 * 2. Créer une fonction `getCarDescription(car)` qui prend un objet Car
 *    et retourne un string formaté : "Voiture : {brand} {model} ({year})"
 *
 * Exemple:
 *   const car: Car = { brand: "Toyota", model: "Corolla", year: 2020 };
 *   getCarDescription(car) => "Voiture : Toyota Corolla (2020)"
 */

// TODO: Définir le type Car

export type Car = {
  // À compléter
};

// TODO: Implémenter getCarDescription

export function getCarDescription(car: Car): string {
  throw new Error("Not implemented");
}
