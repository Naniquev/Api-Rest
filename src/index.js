const express = require ('express');
const userRoutes = require ('../src/routes/user_routes');
const libRoutes = require ('../src/routes/library_routes');
const bookRoutes = require ('../src/routes/book_routes');
const {errorHandlerMiddleware} = require ('./middlewares/error-handler');
const {initializeAuthentication} = require ('../src/auth/auth')

const app = express();
const PORT = 3000;

initializeAuthentication();

app.use(express.json());
app.use('/users', userRoutes);
app.use('/librarys', libRoutes);
app.use('/books', bookRoutes);
app.use(errorHandlerMiddleware);

app.listen(PORT, ()=>{
  console.log("Api corriendo en el puerto " + PORT);  
})


