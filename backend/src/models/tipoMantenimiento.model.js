const mongoose = require("mongoose");


const tipoMantenimientoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
});


const TipoMantenimiento = mongoose.model("TipoMantenimiento", tipoMantenimientoSchema);

module.exports = TipoMantenimiento;
