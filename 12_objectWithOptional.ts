/**
 * Exercice 12: Object With Optional Properties
 *
 * 1. Définir un type `Book` avec les propriétés suivantes :
 *    - `title` : string
 *    - `author` : string
 *    - `publishedYear` : number (optionnel)
 *
 * 2. Créer une fonction `formatBook(book)` qui retourne :
 *    - Si `publishedYear` est présent : "{title} par {author} ({publishedYear})"
 *    - Sinon : "{title} par {author}"
 *
 * Exemple:
 *   formatBook({ title: "1984", author: "George Orwell", publishedYear: 1949 })
 *   => "1984 par George Orwell (1949)"
 *
 *   formatBook({ title: "Le Petit Prince", author: "Saint-Exupéry" })
 *   => "Le Petit Prince par Saint-Exupéry"
 */

// TODO: Définir le type Book

export type Book = {
    title: string,
    author: string,
    publishedYear?: number
};

// TODO: Implémenter formatBook

export function formatBook(book: Book) {
    return book.publishedYear ? `${book.title} par ${book.author} (${book.publishedYear})` : `${book.title} par ${book.author}`;
  throw new Error("Not implemented");
}

console.log(formatBook({ title: "1984", author: "George Orwell", publishedYear: 1949 }))
console.log(formatBook({ title: "Le Petit Prince", author: "Saint-Exupéry" }))
// npx tsx ./12_objectWithOptional.ts