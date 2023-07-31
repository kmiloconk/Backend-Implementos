const Joi = require("joi");

const fechaMantenimiento = Joi.string().min(3).max(30).required();
const tipoMantenimiento = Joi.string().min(1).required();
const nombreResponsable = Joi.string().min(3).max(30).required();
const descripcion = Joi.string().min(3).max(250).required();
const estado = Joi.string().min(3).max(30).valid("true", "false");
const observacion = Joi.string().min(3).max(30).required();
const mantenimientoBodySchema = Joi.object({
  fechaMantenimiento,
  tipoMantenimiento,
  nombreResponsable,
  descripcion,
  estado,
  observacion,
});

module.exports = { mantenimientoBodySchema };
