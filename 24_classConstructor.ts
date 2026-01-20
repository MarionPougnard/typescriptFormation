/**
 * Exercice 24: Classes - Constructeur
 *
 * Importer la classe Point de l'exercice précédent (23_classBasic)
 *
 * Créer une classe `Rectangle` avec :
 * - Propriété privée `topLeft` de type `Point`
 * - Propriétés privées `width` et `height`
 * - Un constructeur qui prend un `Point`, `width` et `height`
 * - Méthodes `getWidth()` et `getHeight()`
 * - Méthode `getTopLeft()` qui retourne le point
 * - Méthode `getArea()` qui retourne l'aire
 * - Méthode `getPerimeter()` qui retourne le périmètre

 */

// TODO: Importer Point de l'exercice précédent
// import { Point } from './23_classBasic';

// TODO: Ré-exporter Point pour que les tests puissent l'utiliser
// export { Point };

// TODO: Implémenter la classe Rectangle

export class Rectangle {
  private topLeft: any;
  private width: any;
  private height: any;

  getTopLeft(): any {
    throw new Error("Not implemented");
  }

  getWidth(): any {
    throw new Error("Not implemented");
  }

  getHeight(): any {
    throw new Error("Not implemented");
  }

  getArea(): any {
    throw new Error("Not implemented");
  }

  getPerimeter(): any {
    throw new Error("Not implemented");
  }
}

/*
  const point = new Point();
  point.moveRight();
  point.moveRight();
  const rect = new Rectangle(point, 5, 3);
  rect.getTopLeft().getPosition();  // {x: 2, y: 0}
  rect.getWidth();                   // 5
  rect.getHeight();                  // 3
  rect.getArea();                    // 15
  rect.getPerimeter();               // 16
*/


// npx tsx ./18_utilityExcludeExtract.ts