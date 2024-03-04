import Models from "../models";

export default {
  postDatos: async (req, res, next) => {
    try {
      const { nombre, direccion, correo, estado, telefono } = req.body;

      const guardarDatos = new Models.Datos({
        nombre,
        direccion,
        correo,
        estado,
        telefono
        
      });

      const guardar = await guardarDatos.save();
      res.status(200).json(guardar);
      
    } catch (error) {
      res.status(500).send({
        message: "Error al enviar",
      });
      next(error);
    }
  },
  getDatos: async (req, res, next) => {
    try {
      
      const obtener= await Models.Datos.find();
      res.status(200).json(obtener);
    } catch (error) {
      res.status(500).send({
        message: "Error al obtener los datos",
      });
      next(error);
    }
  },
  putDatos: (req, res, next) => {},
  delDatos: (req, res, next) => {},
};
