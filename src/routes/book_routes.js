const express = require('express');
const bookController = require('../controllers/book_controller');

const router = express.Router();

router.get("/obtener-todos", bookController.getAll);
router.get("/obtener-por-id/:id", bookController.getById);
router.post("/crear", bookController.createBook);
router.put("/actualizar/:id", bookController.upDateBook);
router.delete("/eliminar/:id", bookController.deleteBook);

module.exports = router;
