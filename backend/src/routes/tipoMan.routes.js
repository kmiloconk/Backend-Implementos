const express = require("express");

const tipoController = require("../controllers/tipoMantenimiento.controller");
const authoMiddleware = require("../middlewares/autho.middleware.js");
const router = express.Router();

router.get("/", tipoController.getTiposMan);
router.post("/", tipoController.createTipoMan);
router.get("/:id", tipoController.getTipoManById);
router.put("/:id", tipoController.updateTipoMan);
router.delete("/:id", tipoController.deleteTipoMan);

module.exports = router;