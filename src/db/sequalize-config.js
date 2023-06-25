const { Sequelize } = require('sequelize')


const libraryDbInstance = new Sequelize('Library', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
})

libraryDbInstance.authenticate()
 .then(()=>{
  console.log('Conexion exitosa')
 })
 .catch(error=>{
  console.log('No hay conexion')
 })

module.exports = { libraryDbInstance }