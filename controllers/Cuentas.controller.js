import Models from "../models/Cuentas.models.js";







export default {

  //Endpoint Enviar Datos
  postDatos: async (req, res, next) => {
    try {
      const { nameFull, userName, password } = req.body;

      const guardarDatos = new Models.Datos({
        nameFull,
        userName,
        password

       
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



  //EndPoint BuscarAll
  getDatos: async (req, res, next) => {
    try {
      
      const obtener= await Models.Cuentas.find();//cambiar a movies
      res.status(200).json(obtener);
    } catch (error) {
      res.status(500).send({
        message: "Error al obtener los datos",
      });
      next(error);
    }
  },
  getDato: async (req, res, next) => {
    try {
      
      const obtener= await Models.Cuentas.findById(req.params.id);////////
      res.status(200).json(obtener);
    } catch (error) {
      res.status(500).send({
        message: "Error al obtener los datos",
      });
      next(error);
    }
  },




  //EndPoint Actualizar
  putDatos: async(req, res, next) => {
    try {
      const { nameFull, userName, password } = req.body;

      const actualizarDatos = {
        nameFull,
        userName,
        password
      
        
      };

      const actualizar =await Models.Cuentas.findByIdAndUpdate(req.params.id, actualizarDatos); ;
      res.status(200).json(actualizar);
      
    } catch (error) {
      res.status(500).send({
        message: "Error al actualizar",
      });
      next(error);
    }
  },

  //EndPoint eliminar
  delDatos: async(req, res, next) => {
    try {
      const el= await Models.Cuentas.findByIdAndDelete(req.params.id);
      res.status(200).send({
        message: "Datos eliminados correctamente"
      });
      //res.status(200).json(el);
    } catch (error) {
      res.status(500).send({
        message: "Error al eliminar dato",
      });
      next(error);
    }
    },

    }
  
