
/**
 * utilisez l'opérateur de chaine ?. pour accéder au nom du groupe auquel appartient l'utilisateur
 * Attention, l'utilisateur peut ne pas avoir de groupe (null)
 * renvoi undefined si l'utilisateur n'a pas de groupe
 * 
 * exemple : 
 * {
 *  name: "John",
 *    group: {
 *      name: "admin"
 *    }
 *  }
 * 
 * doit renvoyer "admin"
 * 
 */

const getGroupName = (objet) => objet.group?.name;
console.log(getGroupName({
    name: "John",
    group: {
        name: "admin"
    }
}));
// node ./08_chainingOperator.js
module.exports = {getGroupName};