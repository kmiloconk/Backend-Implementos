const express = require("express");
const CapacitacionController = require("../controllers/Capacitacion.controller");
const authoMiddleware = require("../middlewares/autho.middleware.js");
const router = express.Router();

router.get("/", CapacitacionController.getCapacitacion);
router.post("/",CapacitacionController.createCapacitacion);
router.get("/:id",CapacitacionController.getCapacitacionById);
router.put("/:id",CapacitacionController.updateCapacitacion);
router.delete("/:id",CapacitacionController.deleteCapacitacion);

module.exports = router;