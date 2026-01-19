/**
 * Utilisez la fonction Promise.all pour exécuter 3 appels API en parallèle
 * 
 * urls:
 * - https://jsonplaceholder.typicode.com/todos/1
 * - https://jsonplaceholder.typicode.com/todos/2
 * - https://jsonplaceholder.typicode.com/todos/3
 * 
 * Retournez un tableau contenant les 3 résultats
 * 
 * Vous pouvez utiliser votre fonction apiResponse créé précedement: const {apiResponse} = require("./11_async");
 * 
 * documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
*/

const {apiResponse} = require("./11_async");

const parallel = async() => {
    const promise1 = apiResponse("https://jsonplaceholder.typicode.com/todos/1")
    const promise2 = apiResponse("https://jsonplaceholder.typicode.com/todos/2")
    const promise3 = apiResponse("https://jsonplaceholder.typicode.com/todos/3")
    const values = Promise.all([promise1, promise2, promise3])
    console.log("tableau", values)
}
parallel()
// NODE_TLS_REJECT_UNAUTHORIZED=0 node 12_parallel.js
module.exports = {parallel};
