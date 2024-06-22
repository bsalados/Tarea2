const fs = require('fs');

 const asyncWriting = (base) => {
    return new Promise((resolve, reject) => {
        const writeContent = fs.writeFile("./bdListaLibros.txt", base, (err) => {
            if(err) {
                reject(new Error('something went wrong :('));
            }resolve ();
        });
    })};
    //asyncWriting();

    exports.asyncWriting = asyncWriting;