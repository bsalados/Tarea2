const fs = require('node:fs/promises');

const asyncFunction = () => {
    return new Promise((resolve, reject) => {
        const myBooks = fs.readFile('./bdListaLibros.txt','utf-8');
        if(!myBooks){
            reject(new Error('something went wrong :('))            
        }
        resolve(myBooks)
    })
}

const retrieveBooks = async () => {
    try{
        const myBooks = await asyncFunction();
        const conversion = JSON.parse(myBooks);
        return conversion;
        //console.log(conversion)
    }catch(error){
        console.log('something went wrong')
    }
}
//retrieveBooks();
exports.retrieveBooks = retrieveBooks;