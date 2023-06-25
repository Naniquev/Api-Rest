const { Model, DataTypes } = require('sequelize');
const { libraryDbInstance } = require('../db/sequalize-config')

class Library extends Model {

}

Library.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
    },
    location: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING
    }
}, {
    sequelize: libraryDbInstance,
    modelName: 'librarys',
    createdAt: false,
    updatedAt: false
})

module.exports = {Library};