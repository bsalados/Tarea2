const actionQuestion = require('./questionsConsole.js');
const actionsCrud = require('./actionsFunctions.js');
const getDBLista = require('./readBDLista.js'); //tenemos la lista en objeto
const giveMeContent = require('./readContent.js');

(async () => {
    const action = await actionQuestion.inputActions();
    switch(action){
        case 'crear':
            console.log('Action: Create')
            const create = await actionsCrud.createCrud();
            break
        case 'consultar':
            console.log('Action: Read')
            actionsCrud.readCrud();
            break
        case 'actualizar':
            console.log('Action: Update')
            actionsCrud.updateCrud();
            break
        case 'eliminar':
            console.log('Action: Delete')
            actionsCrud.deleteCrud();
            break
        default:
            console.log('Seleccione una opción')
    }

})();