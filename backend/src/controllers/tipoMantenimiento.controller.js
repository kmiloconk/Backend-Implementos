const { respondSuccess, respondError } = require("../utils/resHandler");
const TipoManService = require("../services/tipoMan.service");
const { handleError } = require("../utils/errorHandler");


async function getTiposMan(req, res) {
  try {
    const tiposMan = await TipoManService.getTiposMan();
    tiposMan.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, tiposMan);
  } catch (error) {
    respondError(req, res, 400, error.message);
  }
}


async function createTipoMan(req, res) {
  try {
    const nuevoTipoMan = await TipoManService.createTipoMan(req.body);
    nuevoTipoMan === null
      ? respondError(
          req,
          res,
          400,
          "Error en la validacion de datos",
          "Bad Request",
          { message: "Verifique los datos ingresados" },
        )
      : respondSuccess(req, res, 201, nuevoTipoMan);
  } catch (error) {
    handleError(error, "tipo.controller -> createTipo");
    respondError(req, res, 500, "No se pudo crear el tipo");
  }
}


async function getTipoManById(req, res) {
  try {
    const { id } = req.params;

    const tipoMan = await TipoManService.getTipoManById(id);
    tipoMan === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el tipo solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, tipoMan);
  } catch (error) {
    handleError(error, "tipo.controller -> getTipoById");
    respondError(req, res, 500, "No se pudo obtener el tipo");
  }
}


async function updateTipoMan(req, res) {
  try {
    const { id } = req.params;
    const tipoMan = await TipoManService.updateTipoMan(id, req.body);
    tipoMan === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el tipo solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, tipoMan);
  } catch (error) {
    handleError(error, "tipo.controller -> updateTipo");
    respondError(req, res, 500, "No se pudo actualizar el tipo");
  }
}


async function deleteTipoMan(req, res) {
  try {
    const { id } = req.params;
    const tipoMan = await TipoManService.deleteTipoMan(id);
    tipoMan === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el usuario solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, tipoMan);
  } catch (error) {
    handleError(error, "tipo.controller -> deleteTipo");
    respondError(req, res, 500, "No se pudo eliminar el tipo");
  }
}

module.exports = {
  getTiposMan,
  createTipoMan,
  getTipoManById,
  updateTipoMan,
  deleteTipoMan,
};