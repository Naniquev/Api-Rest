const { Model, DataTypes } = require('sequelize');
const { libraryDbInstance } = require('../db/sequalize-config')

class User extends Model {

};

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: libraryDbInstance,
    modelName: 'users',
    createdAt: false,
    updatedAt: false
})

module.exports = {User};