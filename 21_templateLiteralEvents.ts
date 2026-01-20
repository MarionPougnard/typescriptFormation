/**
 * Exercice 21: Template Literal Types - Events
 *
 * 1. Définir un type `EventName` comme `"click" | "focus" | "blur"`.
 *
 * 2. Créer un type `EventHandler` en utilisant un template literal type sous la forme
 *    `"on{EventName}"` avec la première lettre en majuscule.
 *    Résultat attendu : `"onClick" | "onFocus" | "onBlur"`
 *    Hint: Utiliser `Capitalize<EventName>`
 *
 * 3. Créer un type `EventConfig` qui est un objet avec :
 *    - Les clés de type `EventHandler`
 *    - Les valeurs de type `() => void`
 *
 * 4. Créer une fonction `createEventHandlers(config)` qui prend un `EventConfig`
 *    et retourne un objet avec les mêmes handlers.
 *
 * Exemples :
 *   const config: EventConfig = {
 *       onClick: () => console.log("clicked"),
 *       onFocus: () => console.log("focused"),
 *       onBlur: () => console.log("blurred")
 *   };
 *
 *   createEventHandlers(config)  // retourne le même objet typé
 */
// TODO: Définir les types
export type EventName =  "click" | "focus" | "blur"

export type EventHandler = `on${Capitalize<EventName>}`
export type EventConfig = { [key in EventHandler]: ()=> void }; // Record avec EventHandler comme clés

// TODO: Implémenter la fonction

export function createEventHandlers(config: EventConfig): EventConfig {
    return config
  throw new Error("Not implemented");
}

const config: EventConfig = {
    onClick: () => console.log("clicked"),
    onFocus: () => console.log("focused"),
    onBlur: () => console.log("blurred")
};

console.log(createEventHandlers(config))

// npx tsx ./21_templateLiteralEvents.ts