/**
 * Exercice 27: Décorateurs
 *
 * Créer un système de décorateurs pour mesurer et logger les performances des calculs géométriques.
 *
 * Créer un décorateur de méthode `@measureTime` qui :
 * - Mesure le temps d'exécution d'une méthode
 * - Log dans la console : "[Performance] {nom de la méthode} a pris {temps}ms"
 * - Retourne le résultat original de la méthode
 *
 * Créer une classe `Polygon` avec :
 * - Propriété privée `sides` : tableau de nombres représentant les côtés
 * - Constructeur prenant un tableau de nombres
 * - Méthode `getArea()` décorée avec @measureTime (calcul pour triangle avec formule de Héron)
 * - Méthode `getPerimeter()` décorée avec @measureTime (somme des côtés)
 *
 * Formule de Héron pour l'aire d'un triangle :
 * s = (a + b + c) / 2
 * aire = √(s × (s-a) × (s-b) × (s-c))
 *
 * Exemples :
 *   const polygon = new Polygon([3, 4, 5]);
 *   polygon.getArea();
 *   // Console: "[Performance] getArea a pris 0.234ms"
 *   // Retourne: 6
 *
 *   polygon.getPerimeter();
 *   // Console: "[Performance] getPerimeter a pris 0.123ms"
 *   // Retourne: 12
 */

// TODO: Implémenter le décorateur measureTime

export function measureTime(
  target: any,
  propertyKey: any,
  descriptor: any
): any {
  throw new Error("Not implemented");
}

// TODO: Implémenter la classe Polygon avec les méthodes décorées

export class Polygon {
  private sides: any;

  constructor(sides: any) {
    throw new Error("Not implemented");
  }

  getArea(): any {
    throw new Error("Not implemented");
  }

  getPerimeter(): any {
    throw new Error("Not implemented");
  }
}

// npx tsx ./27_decorators.ts
