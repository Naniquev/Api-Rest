const express = require('express');
const libraryController = require ('../controllers/library_controller');

const router = express.Router();

router.get("/obtener-todos", libraryController.getAllLibrery);
router.get("/obtener-por-id/:id", libraryController.getById);
router.post("/crear", libraryController.createLib);
router.put("/actualizar/:id", libraryController.upDateLib);
router.delete("/eliminar/:id", libraryController.deleteLib);

module.exports = router;