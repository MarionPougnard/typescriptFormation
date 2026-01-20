/**
 * Exercice 25: Classes - Héritage
 *
 * Importer la classe Point de l'exercice précédent (23_classBasic)
 *
 * Créer une classe `Shape` avec :
 * - Propriété protégée `position` de type `Point`
 * - Propriété protégée `color` de type string
 * - Constructeur qui initialise `position` et `color`
 * - Méthode `describe()` qui retourne "Forme {color} à la position ({x}, {y})"
 * - Méthode `move(dx, dy)` qui déplace la forme
 *
 * Créer une classe `Circle` qui hérite de `Shape` avec :
 * - Propriété privée `radius` (nombre)
 * - Constructeur qui prend un `Point`, une `color` (string) et un `radius` (number)
 * - Redéfinir la méthode `describe()` pour retourner "Cercle {color} à la position ({x}, {y}) - Rayon: {radius}"
 * - Méthode `getRadius()` qui retourne le rayon
 * - Méthode `getArea()` qui retourne l'aire du cercle (π × rayon²)
 * - Méthode `getPerimeter()` qui retourne le périmètre du cercle (2 × π × rayon)
 *
 * Exemples :
 *   const center = new Point();
 *   center.moveRight();
 *   center.moveUp();
 *   const cercle = new Circle(center, "bleu", 4);
 *   cercle.describe();      // "Cercle bleu à la position (1, 1) - Rayon: 4"
 *   cercle.getRadius();     // 4
 *   cercle.getArea();       // 50 (arrondir a l'entier superieur)
 *   cercle.getPerimeter();  // 25 (arrondir a l'entier superieur)
 */

// TODO: Importer Point de l'exercice précédent
// import { Point } from './23_classBasic';

// TODO: Ré-exporter Point pour que les tests puissent l'utiliser
// export { Point };

// TODO: Implémenter la classe Shape

export class Shape {
  protected position: any;
  protected color: any;

  constructor(position: any, color: any) {
    throw new Error("Not implemented");
  }

  describe(): any {
    throw new Error("Not implemented");
  }

  move(dx: any, dy: any): any {
    throw new Error("Not implemented");
  }
}

// TODO: Implémenter la classe Circle

export class Circle extends Shape {
  private radius: any;

  constructor(position: any, color: any, radius: any) {
    super(position, color);
    throw new Error("Not implemented");
  }

  describe(): any {
    throw new Error("Not implemented");
  }

  getRadius(): any {
    throw new Error("Not implemented");
  }

  getArea(): any {
    throw new Error("Not implemented");
  }

  getPerimeter(): any {
    throw new Error("Not implemented");
  }
}

// npx tsx ./18_utilityExcludeExtract.ts
