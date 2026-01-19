const {sleep} = require("./10_promise");
const ternaire = require("./02_ternaire")

/**
 * Créez une fonction synchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser .then
 * 
 * contrainte:
 *    - votre fonction doit être synchrone et ne pas retourner de Promise
 *    - ne pas utiliser async await
 * 
 */
const usingThen = (a, b) => {
    console.log("usingThen start", a, b);
    sleep().then(() => {
        const result = ternaire(a, b)
        console.log("usingThen end", result)
    });
}
usingThen(7, 5);


/**
 * Créez une fonction asynchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser await
 * 
 * contrainte:
 *   - votre fonction doit être asynchrone et retourner une Promise
 *   - ne pas utiliser .then
 */

const usingAwait = async(c, d) => {
    console.log("usingAwait start", c, d);
    await sleep()
    const result = ternaire(c,d)
    console.log("usingAwait end", result);
};
usingAwait(4, 5)
/**
 * Créez une fonction asynchrone qui effectue un appel api vers l'url passé en paramètre
 * retourne le résultat de la requête (body)
 * 
 * Vous pouvez utiliser axios, mais n'oubliez pas d'installer le package et de l'importer
 * npm install axios
 * 
 * votre réponse doit être un objet json
 * 
 * url de test: https://jsonplaceholder.typicode.com/todos/1
 */

//décommentez la ligne suivante une fois le package installé
const axios = require("axios");

const apiResponse = async(url) => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json)
    } catch (error) {
        console.error(error)
    }
}
apiResponse('https://jsonplaceholder.typicode.com/todos/1');


// NODE_TLS_REJECT_UNAUTHORIZED=0 node ./11_async.js
module.exports = {usingThen, usingAwait, apiResponse};