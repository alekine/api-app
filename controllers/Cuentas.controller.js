import Model from "../models/index.js";
import bcrypt from "bcryptjs";
import jwt from "../utils/jwt.js"




export default {
  // Endpoint para enviar datos
  postDatos: async (req, res, next) => {
    try {
      const { nameFull, userName, password } = req.body;

      const guardarDatos = new Model.Cuentas({
        nameFull,
        userName,
     
      });

      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password, salt);
      guardarDatos.password = hashPassword;

      const guardar = await guardarDatos.save();
      res.status(200).json(guardar);
    } catch (error) {
      res.status(500).send({
        message: "Error al enviar",
      });
      next(error);
    }
  },

  // Validación de usuario
  Login: async (req, res) => {
    const { userName, password } = req.body;

    try {
      if (!userName) res.status(400).send({ msg: "El username es obligatorio" });
      if (!password) res.status(400).send({ msg: "El password es obligatorio" });

      const response = await Model.Cuentas.findOne({ userName });
      if (!response) return res.status(400).send({ msg: "Usuario no encontrado" });

      bcrypt.compare(password, response.password, (bcryptError, check) => {
        if (bcryptError) {
          res.status(500).send({ msg: "Error del usuario" });
        } else if (!check) {
          res.status(400).send({ msg: "Password incorrecto" });
        } else {
          res.status(200).send({ access: jwt.createAccessToken});
        }
      });
    } catch (error) {
      res.status(500).send({ msg: "Error al autenticar" });
    }
  },

  // EndPoint para buscar todos los datos
  getDatos: async (req, res, next) => {
    try {
      const obtener = await Model.Cuentas.find();
      res.status(200).json(obtener);
    } catch (error) {
      res.status(500).send({
        message: "Error al obtener los datos",
      });
      next(error);
    }
  },

  // EndPoint para obtener un dato por ID
  getDato: async (req, res, next) => {
    try {
      const obtener = await Model.Cuentas.findById(req.params.id);
      res.status(200).json(obtener);
    } catch (error) {
      res.status(500).send({
        message: "Error al obtener los datos",
      });
      next(error);
    }
  },

  // EndPoint para actualizar datos
  putDatos: async (req, res, next) => {
    try {
      const { nameFull, userName, password } = req.body;

      const actualizarDatos = {
        nameFull,
        userName,
        password
      };

      const actualizar = await Model.Cuentas.findByIdAndUpdate(req.params.id, actualizarDatos);
      res.status(200).json(actualizar);
    } catch (error) {
      res.status(500).send({
        message: "Error al actualizar",
      });
      next(error);
    }
  },

  // EndPoint para eliminar datos
  delDatos: async (req, res, next) => {
    try {
      await Model.Cuentas.findByIdAndDelete(req.params.id);
      res.status(200).send({
        message: "Datos eliminados correctamente"
      });
    } catch (error) {
      res.status(500).send({
        message: "Error al eliminar dato",
      });
      next(error);
    }
  },
};
