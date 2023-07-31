const express = require("express");


const usuarioRoutes = require("./Usuario.routes");
const estadoRoutes = require("./Estado.routes");
const mantenimientoRoutes = require("./mantenimiento.routes.js");
const authRoutes = require("./auth.routes.js");
const authMiddleware = require("../middlewares/authe.middleware.js");
const tipoRoutes = require('./tipo.routes');
const implemento = require('./Implemento.routes');
const notificacion = require('./Notificacion.routes');
const categoria = require("./Categoria.routes");
const capacitaciones = require('./Capacitacion.routes');
const tipoMantenimiento= require('./tipoMan.routes');

const router = express.Router();

//authMiddleware.verifyToken
router.use("/Usuario", usuarioRoutes);
router.use("/auth", authRoutes);
router.use('/Notificacion', notificacion);
router.use("/Estado", estadoRoutes);
router.use('/Tipo', tipoRoutes);
router.use('/Implemento', implemento);
router.use('/Categoria', categoria);
router.use('/Mantenimiento', mantenimientoRoutes);
router.use('/Capacitacion', capacitaciones);
router.use('/TipoMantenimiento', tipoMantenimiento);

module.exports = router;
