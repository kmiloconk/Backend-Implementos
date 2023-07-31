const mongoose = require("mongoose");

const mantenimientoSchema = new mongoose.Schema({
  fechaMantenimiento: {
    type: String,
    required: true,
  },
  tipoMantenimiento:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TipoMantenimiento",
    },
  nombreResponsable: {
  type: String,
  required: true,
},
descripcion: {
  type: String,
  required: true,
},
estado: {
    type: String,
    required: true,
    enum: ["true", "false"],

  },
observacion: {
    type: String,
    required: true,
  },
});

const Mantenimiento = mongoose.model("Mantenimiento", mantenimientoSchema);

module.exports = Mantenimiento;
