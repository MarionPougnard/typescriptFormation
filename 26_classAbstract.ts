/**
 * Exercice 26: Classes - Abstraction
 *
 * Créer une classe abstraite `ComputableShape` avec :
 * - Propriété protégée `color` de type string
 * - Constructeur qui initialise `color`
 * - Méthode abstraite `computePerimeter(): number`
 *
 * Créer une classe `Circle` qui hérite de `ComputableShape` avec :
 * - Propriété privée `radius` (nombre)
 * - Constructeur qui prend `color` et `radius`
 * - Implémentation de `computePerimeter()` : 2 × π × rayon (arrondi à l'entier)
 *
 * Créer une classe `Rectangle` qui hérite de `ComputableShape` avec :
 * - Propriétés privées `width` et `height` (nombres)
 * - Constructeur qui prend `color`, `width` et `height`
 * - Implémentation de `computePerimeter()` : 2 × (width + height)
 *
 * Exemples :
 *   const c = new Circle("rouge", 4);
 *   c.computePerimeter(); // 26 (arrondir a l'entier superieur)
 *
 *   const r = new Rectangle("vert", 10, 5);
 *   r.computePerimeter(); // 30
 */

// TODO: Implémenter la classe abstraite ComputableShape

export class ComputableShape {
  protected color: any;

  constructor(color: any) {
    throw new Error("Not implemented");
  }
}

// TODO: Implémenter la classe Circle

export class Circle {
  private radius: any;

  constructor(color: any, radius: any) {
    //do not forget super()
    throw new Error("Not implemented");
  }

  computePerimeter(): any {
    throw new Error("Not implemented");
  }
}

// TODO: Implémenter la classe Rectangle

export class Rectangle{
  private width: any;
  private height: any;

  constructor(color: any, width: any, height: any) {
    throw new Error("Not implemented");
  }

  computePerimeter(): any {
    throw new Error("Not implemented");
  }
}

/*
  const c = new Circle("rouge", 4);
  c.computePerimeter(); // 26 (arrondir a l'entier superieur)

  const r = new Rectangle("vert", 10, 5);
  r.computePerimeter(); // 30
*/

// npx tsx ./26_classAbstract.ts