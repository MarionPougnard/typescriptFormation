/**
 * Exercice 15: Utility Types - Pick & Omit
 *
 * 1. Définir un type `Article` avec :
 *    - `id` : number
 *    - `title` : string
 *    - `content` : string
 *    - `author` : string
 *    - `createdAt` : Date
 *    - `updatedAt` : Date
 *
 * 2. Créer un type `ArticlePreview` en utilisant `Pick` pour ne garder que `id`, `title` et `author`.
 *
 * 3. Créer un type `ArticleCreate` en utilisant `Omit` pour exclure `id`, `createdAt` et `updatedAt`.
 *
 * 4. Créer une fonction `toPreview(article)` qui prend un `Article` et retourne un `ArticlePreview`.
 *
 * 5. Créer une fonction `createArticle(data)` qui prend un `ArticleCreate` et retourne un `Article` complet.
 *
 * Exemples :
 *   const article = { id: 1, title: "Hello", content: "World", author: "John", createdAt: new Date(), updatedAt: new Date() };
 *   toPreview(article)  // { id: 1, title: "Hello", author: "John" }
 *
 *   createArticle({ title: "New", content: "Article", author: "Jane" })
 *   // { id: <generated>, title: "New", content: "Article", author: "Jane", createdAt: <now>, updatedAt: <now> }
 */
// TODO: Définir les types
export type Article = {
  id: number,
    title: string,
    content: string,
    author: string,
    createdAt: Date,
    updatedAt: Date
};

export type ArticlePreview = Pick<Article, "id"| "title"| "author">;

export type ArticleCreate = Omit<Article, "id" | "createdAt" | "updatedAt">;

// TODO: Implémenter les fonctions

export function toPreview(article: Article): ArticlePreview {
    return {id: article.id, title: article.title, author: article.author}
  throw new Error("Not implemented");
}

const article = { id: 1, title: "Hello", content: "World", author: "John", createdAt: new Date(), updatedAt: new Date() };
console.log(toPreview(article) ) // { id: 1, title: "Hello", author: "John" }

export function createArticle(data: ArticleCreate): Article {
  return {...data, id: (Math.floor(Math.random() * 10000)), createdAt: new Date(), updatedAt: new Date() };
    throw new Error("Not implemented");
}

console.log(createArticle({ title: "New", content: "Article", author: "Jane" }))
// { id: <generated>, title: "New", content: "Article", author: "Jane", createdAt: <now>, updatedAt: <now> }
// npx tsx ./15_utilityPickOmit.ts