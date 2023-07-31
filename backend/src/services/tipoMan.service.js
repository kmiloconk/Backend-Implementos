const Tipo = require("../models/tipoMantenimiento.model");
const { handleError } = require("../utils/errorHandler");

async function getTiposMan() {
    try {
        return await Tipo.find();
    } catch (error) {
        handleError(error, "tipo.service -> getTipos");
    }
}


async function createTipoMan(tipo) {
    try {
    const { nombre} = tipo;

    const newTipo = new Tipo({ nombre });
    return await newTipo.save();
    } catch (error) {
        handleError(error, "tipo.service -> createTipo");
    }
}

async function getTipoManById(id) {
    try {
        return await Tipo.findById({ _id: id });
    } catch (error) {
        handleError(error, "tipo.service -> getTipoById");
    }
}


async function updateTipoMan(id, tipo) {
    try {
        const { error } = tipoBodySchema.validate(tipo);
        if (error) return null;

        return await Tipo.findByIdAndUpdate(id, tipo);
    } catch (error) {
        handleError(error, "tipo.service -> updateTipo");
    }
}

async function deleteTipoMan(id) {
    try {
        return await Tipo.findByIdAndDelete(id);
    } catch (error) {
        handleError(error, "tipo.service -> deleteTipo");
    }
}

module.exports = {
    getTiposMan,
    createTipoMan,
    getTipoManById,
    updateTipoMan,
    deleteTipoMan,
};