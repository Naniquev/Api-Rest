//Importaciones
const { Library } = require ('../models/library');

//Buscar todos las bibliotecas
async function getAll(){
    const lib_list = await Library.findAll();
    
    return lib_list;
}

//Busqueda de libreria por id
async function getById(id){
    const lib_id = await Library.findByPk(id);

    if(lib_id == null){
        throw new Error("Biblioteca no encontrada")
    };

    return lib_id;

}

//Crear biblioteca
async function createLib(name, location, phone){
    const library = new Library();

    library.name = name;
    library.location = location;
    library.phone = phone;

    const libCreate = await library.save();

    return libCreate;
}

//Editar una biblioteca
async function editLib(id, name, location, phone){
    const lib = await getById(id);

    if(name){
        lib.name = name;
    }

    if(location){
        lib.location = location;
    }

    if(phone){
        lib.phone = phone;
    }

    const lib_edited = await lib.save();

    return lib_edited;
}

//Eliminar una biblioteca
async function deleteLib(id){
    const library = await getById(id);

    await library.destroy();
}

module.exports = {getAll, getById, createLib, editLib, deleteLib}