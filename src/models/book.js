const { Model, DataTypes } = require('sequelize');
const { libraryDbInstance } = require('../db/sequalize-config')

class Book extends Model {

}

Book.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    isbn:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.STRING,
    },
    librery: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize: libraryDbInstance,
    modelName: 'books',
    createdAt: false,
    updatedAt: false
});

module.exports = {Book};