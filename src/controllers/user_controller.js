//const { use } = require('passport');
const userService = require ('../services/user_service');

//Traer todos los usuarios
async function getAllUsers(req, res){

    const users = await userService.getAll();

    res.status(200).send(users);
};

//Traer un usuario por id
async function getUserById(req, res, next){
    const {id} = req.params;

    try {
        const user = await userService.getById(id);
        res.status(200).send(user);
    } catch (error) {
        next(error);
    }
}

//Crear un usuario
async function createUser(req, res){
    const {name, lastname, email, password} = req.body;

    const user = await userService.createUser(name, lastname, email, password);

    res.status(201).send(user);
}

//Editar un usuario
async function editUser(req, res){
    const {id} = req.params;
    const {name, lastname, email} = req.body;

    const user = await userService.ediUser(id, name, lastname, email);
    
    res.status(201).send(user);
}

//Eliminar usuario
async function deleteUser(req, res){
    const {id} = req.params;

    await userService.deleteUser(id);

    res.status(200).send(`Usuario con el id ${id}, se ha eliminado correctamente`);
}

//Login
async function login(req, res, next){
    const {email, password} = req.body;

    try {
        const result = await userService.login(email, password);
        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
   
}

module.exports = {getAllUsers, getUserById, createUser, editUser, deleteUser, login};