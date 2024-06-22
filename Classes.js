const getDataToCreate = require('./questionsConsole.js');
const traeContent = require('./readContent.js');

//Clase Base para título
class Reading{
    constructor(title){
        this.title = title        
    }

        generalInformation(){
        console.log('Titulo:', this.title)
    }
}

//Subclase Libro
class Book extends Reading {
    static type = 'Libro Clásico'
    
    constructor(title,author, sheets,link){
       super(title) 
       this.author = author
       this.sheets = sheets
       this.link = link
    }
       info(){
        console.log('Título:', this.title)
        console.log('Autor:', this.author)
        console.log('Numero de páginas:', this.sheets)
    }

    #type(){
        console.log('La lectura se refiere a un:', Book.type)
    }

    autor(){
        console.log('Nombre del autor:', this.author) 
    }

    content(){
        readFiles();
    }

    info(){
        console.log('Título:', this.title)
        console.log('Autor:', this.author)
        console.log('Numero de páginas:', this.sheets)
    }

    completeInfo(){
        console.log('Título:', this.title)
        console.log('Autor:', this.author)
        console.log('Numero de páginas:', this.sheets)
        this.#type()
}
}
//Subclase Revista
class Magazine extends Reading {
    static type = 'Revista'
    
    constructor(title, field, sheets){
        super(title)
        this.field = field
        this.sheets = sheets
    }

    type(){
        console.log('La lectura se refiere a una:', Magazine.type)}

    content(){
        console.log('contenido')}

    info(){
        console.log('Título:', this.title)
        console.log('Genero:', this.field)
    }
}

//Subclase Texto Científico
class Science extends Reading {
    static type = 'Texto Científico'
    
    constructor(title, author, school){
        super(title)
        this.author = author
        this.school = school
    }

    type(){
        console.log('La lectura se refiere a un:', Science.type)}

    autor(){
        console.log('Nombre del autor:', this.author)}

    content(){
        console.log('contenido')}

    info(){
        console.log('Título:', this.title)
        console.log('Autor:', this.author)
        console.log('Instituto:', this.school)
    }
}
//const hola = new Book('bety','autor',200,'/Users/beatrizsalado/Documents/FundamentosBackend/Tarea2/Book.txt');
//hola.giveContet();
exports.Book = Book;
