const {Book} = require ('../models/book');

//Traer todos los libros
async function getAll(){
    const books = Book.findAll();

    return books;
}

//Busqueda de libros por id
async function getById(){
    const book_id = Book.findByPk(id);

    if(book_id == null){
        throw new Error(" El libro no fue encontrado");
    }

    return book_id;
}

//Crear libro
async function createBook(isbn, title, author, year, library){
    const book = new Book();
    
    book.isbn = isbn;
    book.title = title;
    book.author = author;
    book.year = year;
    book.library = library;

    const bookCreated = await book.save();

    return bookCreated;
}

//Editar un libro
async function bookEdit(id, isbn, title, author, year, library){
    const book = await Book.getById(id);

    if(isbn){
        book.isbn = isbn;
    }

    if(title){
        book.title = title;
    }

    if(author){
        book.author = author;
    }

    if(year){
        book.year = year;
    }

    if(library){
        book.library = library;
    }

    const bookEdited = await book.save();

    return bookEdited;
}

//Eliminar un libro
async function deleteBook(id){
    //Buscar el libro por id y eliminarlo de la base de datos
    
        const book = await getById(id);
        await book.destroy();
    
}

module.exports = {getAll, getById, createBook, bookEdit, deleteBook};