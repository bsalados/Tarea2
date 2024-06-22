const getDBLista = require('./readBDLista.js'); //tenemos la lista en objeto
const createNew = require('./Classes.js');
const giveMeContent = require('./readContent.js');
const writeFile = require('./writeFile.js');
const actionQuestion = require('./questionsConsole.js');

//Create
const createCrud = async () => {
    const imprimiendoooo = await actionQuestion.inputData();
    let base = await getDBLista.retrieveBooks();
    let id = String(Object.keys(base).length + 1);
    base = Object.assign(base,{['reading'+id]: JSON.parse(JSON.stringify(new createNew.Book(imprimiendoooo[0],imprimiendoooo[1],imprimiendoooo[2],imprimiendoooo[3])))})
    writing = JSON.stringify(base);
    const guardaDoc = await writeFile.asyncWriting(writing);
    console.log('Saved:',base)
    process.exit(0);
}
//createCrud();

//Read
const readCrud = async() => {
    const consultaType = await actionQuestion.inputConsulta();
    if (consultaType == 'si'){
        const read = await getDBLista.retrieveBooks();
        console.log(read);
        process.exit(0);
    } else {
        const numberReading = await actionQuestion.inputReading();
        let id = numberReading[0]
        let read = await getDBLista.retrieveBooks();
        console.log(read[id])            
        const linkBD = read[id].link
        const readContentFile = await giveMeContent.leeContent(linkBD);
        console.log('Contenido:',readContentFile);
        process.exit(0);
    }
}
//readCrud();

//Update
const updateCrud = async() => {
    const read = await getDBLista.retrieveBooks();
    const numberReading = await actionQuestion.inputReading();
    let id = numberReading[0]
    const newName = await actionQuestion.inputName();
    read[id].title = newName
    writing = JSON.stringify(read);
    const guardaDoc = await writeFile.asyncWriting(writing);
    console.log('Updated:',read[id]);
    process.exit(0);
}
//updateCrud();

//Delete
const deleteCrud = async() => {
    const read = await getDBLista.retrieveBooks();
    const numberReading = await actionQuestion.inputReading();
    let id = numberReading[0]
    delete read[id]
    writing = JSON.stringify(read);
    const guardaDoc = await writeFile.asyncWriting(writing);
    console.log('Deleted');
    process.exit(0);
}
//deleteCrud();

exports.createCrud = createCrud;
exports.readCrud = readCrud;
exports.updateCrud = updateCrud;
exports.deleteCrud = deleteCrud;