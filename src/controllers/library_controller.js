const libreryService = require ('../services/library_service');

//Traer todas las bibliotecas de la base de datos
async function getAllLibrery(req, res){
    
    const librarys = await libreryService.getAll();

    res.status(200).send(librarys);
}

//Buscar una biblioteca por id
async function getById(req, res, next){
    const{id} = req.params;

    try {
        const library = await libreryService.getById(id);
        res.status(200).send(library);
    } catch (error) {
        next(error);
    }
}

//Crear una biblioteca
async function createLib(res, req){
    const {name, location, phone} = req.body;

    const library = await libreryService.createLib(name, location, phone);

    res.status(201).send(library);
}

//Editar una libreria
async function upDateLib(res, req){
    const {id} = req.params;
    const {name, location, phone} = req.body;

    const libEdited = await libreryService.editLib(id,name, location, phone);

    res.status(200).send(libEdited);
}

//Eliminar una biblioteca
async function deleteLib(res, req){
    const {id} = req.params;
    
    await libreryService.deleteLib(id);

    res.status(200).send(`La biblioteca con el id ${id}, se ha eliminado correctamente`);
}

module.exports = {getAllLibrery, getById, createLib, upDateLib, deleteLib};