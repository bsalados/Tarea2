const read = require('node:readline');
const getDBLista = require('./readBDLista.js'); //tenemos la lista en objeto
const actionsCrud = require('./actionsFunctions.js');

const myRl = read.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (message) => {
    return new Promise((resolve, reject) => {
        myRl.question(message, (answer) => {
            answer ? resolve(answer) : reject('There was some issue');
        });
    });
}

const inputData = async () => {
    const nameBook = await askQuestion('Enter book\'s name: ');
    const author = await askQuestion('Enter author\'s name: ');
    const pages = await askQuestion('Enter the number of pages: ');
    const link = await askQuestion('Ingrese la ruta del contenido: ');
    const entrada = [nameBook,author,pages,String(link)]
    return (entrada)
    //process.exit(0);    
}

const inputActions = async () => {
    const actionToDo = await askQuestion('Ingrese la actividad que desea realizar (Crear / Consultar/ Actualizar / Eliminar) ');
    return actionToDo.toLowerCase();
}

const inputConsulta = async () => {
    const consultaToDo = await askQuestion('¿Desea consultar todos los registros? (Si / No) ');
    return consultaToDo.toLowerCase();
}

const inputReading = async () => {
    const consultaToDo = await askQuestion('Ingrese el número del registro ');
    const idReading = [String('reading'+consultaToDo)]
    return (idReading)
}

const inputName = async () => {
    const changeName = await askQuestion('Ingrese el nuevo nombre del título ');
    return changeName
}

exports.inputName = inputName;
exports.inputReading = inputReading;
exports.inputConsulta = inputConsulta;
exports.inputData = inputData;
exports.inputActions = inputActions;