const express = require("express");

const mantenimientoController = require("../controllers/Mantenimiento.controller.js");
//const authoMiddleware = require("../middlewares/autho.middleware.js");

const router = express.Router();

router.get("/", mantenimientoController.getMantenimientos);
router.post("/", mantenimientoController.createMantenimiento);
router.put("/:id", mantenimientoController.updateMantenimiento);

module.exports = router;
