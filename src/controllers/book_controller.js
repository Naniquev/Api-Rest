const bookService = require('../services/book_service');

//Traer todos los libros
async function getAll(res, req){
    const books = await bookService.getAll();

    res.status(200).send(books);
}

//Buscar libro por id
async function getById(req, res, next){
    const {id} = req.params;

    try {
        const book = await bookService.getById(id);
        res.status(200).send(book);
    } catch (error) {
        next(error);
    }
}

//Crear un libro
async function createBook(res, req){
    const {isbn, title, author, year, library} = req.body;

    const book = await bookService.createBook(isbn, title, author, year, library);

    res.status(201).send(book)
}

//Editar un libro
async function upDateBook(res, req){
    const {id} = req.params;
    const {isbn, title, author, year, library} = req.body;

    const bookEdited = await bookService.bookEdit(id,isbn, title, author, year, library);

    res.status(200).send(bookEdited);
}

//Eliminar un libro
async function deleteBook(res, req){
    const {id} = req.params;

    await bookService.deleteBook(id);

    res.status(200).send(`El libro con el id ${id}, fue eliminado`);
}

module.exports = {getAll, getById, createBook, upDateBook, deleteBook};

