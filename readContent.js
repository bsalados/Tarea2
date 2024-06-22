const fs = require('node:fs/promises');
const getDataToCreate = require('./questionsConsole.js'); //obtiene una lista con los datos ingresados
const getDBLista = require('./readBDLista.js'); //tenemos la lista en objeto

const asyncContent = (ruta) => {
    return new Promise((resolve, reject) => {
        const myContent = fs.readFile(ruta,'utf-8');
        if(!myContent){
            reject(new Error('something went wrong :('))            
        }
        resolve(myContent)
    })
}

const leeContent = async (gett) => {
    const linkContet = await getDBLista.retrieveBooks();
    const link = gett;
    const giveMeContent = await asyncContent(link);
    return giveMeContent;
    //console.log(giveMeContent)
    //process.exit(0);
}
//leeContent();
exports.leeContent = leeContent;