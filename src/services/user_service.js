//Imports
const { User } = require ('../models/user');
const jwt = require('jsonwebtoken');

//Buscar todos los usuarios
async function getAll(){
    const userList = await User.findAll();

    return userList;
}

//Buscar usuario por id
async function getById(id){
    const user = await User.findByPk(id);

    if(user == null){
        throw new Error( "Usuario no encontrado");
    }

    return user;
}

//Crear un usuario
async function createUser(name, lastname, email, password){
    const user = new User();

    user.name = name;
    user.lastname = lastname;
    user.email = email;
    user.password = password;

    const userCreated = await user.save();
    return userCreated;
}

//Editar un usuario
async function ediUser(id, name, lastname, email){
    const user = await getById(id);

    if(name){
        user.name = name;
    }

    if(lastname){
        user.lastname = lastname;
    }

    if(email){
        user.email = email;
    }

    const userEdited = await user.save();
    return userEdited;
}

//Eliminar un usuario
async function deleteUser(id){
    const user = await getById(id);

    await user.destroy();
}

//login
async function login(email, password){
    const user = await User.findOne({
        where:{
            email: email,
            password: password
        }
    })
    
    if(!user){
        throw new Error("El email o la contraseña son incorrectos");
    }

    const token = jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name
    }, 'ClaveSecreta');

    return{
        accessToken: token
    }
}


module.exports = {getAll, getById, createUser, ediUser, deleteUser, login };