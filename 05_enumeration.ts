/**
 * Exercice 05: Enumeration
 *
 * 1. Définir une énumération `Color` avec les valeurs:
 *    - Red = "Red"
 *    - Green = "Green"
 *    - Blue = "Blue"
 *
 * 2. Créer une fonction `getColorCode(color)` qui retourne le code hexadécimal:
 *    - Color.Red => "#FF0000"
 *    - Color.Green => "#00FF00"
 *    - Color.Blue => "#0000FF"
 *
 * Exemple:
 *   getColorCode(Color.Red) => "#FF0000"
 *   getColorCode(Color.Green) => "#00FF00"
 *   getColorCode(Color.Blue) => "#0000FF"
 */

// TODO: Définir l'enum Color et implémenter getColorCode

export enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

export function getColorCode(color: Color) {
    switch (color) {
        case Color.Red:
            return "#FF0000";
        case Color.Green:
            return "#00FF00";
        case Color.Blue:
            return "#0000FF";
        default:
            return "#000000";
    }
  throw new Error("Not implemented");
}

console.log(getColorCode(Color.Red))
console.log(getColorCode(Color.Green))
console.log(getColorCode(Color.Blue))

// npx tsx ./05_enumeration.ts

