const express = require("express");
const categoriaController = require("../controllers/Categoria.controller");
const authoMiddleware = require("../middlewares/autho.middleware.js");
const router = express.Router();

router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.createCategoria);
router.get("/:id", categoriaController.getCategoriaById);
router.put("/:id",  categoriaController.updateCategoria);
router.delete("/:id", categoriaController.deleteCategoria);

module.exports = router;