import Models from "../models/index.js";







export default {

  //Endpoint Enviar Datos
  postResena: async (req, res, next) => {
    try {
      const { id_movie, userName, resena, calificacion } = req.body;

      const guardarDatos = new Models.Resenas({

        id_movie,
        userName,
        resena,
        calificacion,
       
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
  getResenas: async (req, res, next) => {
    try {
      
      const obtener= await Models.Resenas.find();//cambiar a movies
      res.status(200).json(obtener);
    } catch (error) {
      res.status(500).send({
        message: "Error al obtener los datos",
      });
      next(error);
    }
  },
  getResena: async (req, res, next) => {
    try {
      
      const obtener= await Models.Resenas.findById(req.params.id);////////
      res.status(200).json(obtener);
    } catch (error) {
      res.status(500).send({
        message: "Error al obtener los datos",
      });
      next(error);
    }
  },




  //EndPoint Actualizar
  putResena: async(req, res, next) => {
    try {
      const { id_movie, userName, resena, calificacion } = req.body;

      const actualizarDatos = {
        id_movie,
        userName,
        calificacion,
        resena,
      
        
      };

      const actualizar =await Models.Resenas.findByIdAndUpdate(req.params.id, actualizarDatos); ;
      res.status(200).json(actualizar);
      
    } catch (error) {
      res.status(500).send({
        message: "Error al actualizar",
      });
      next(error);
    }
  },

  //EndPoint eliminar
  delResena: async(req, res, next) => {
    try {
      const el= await Models.Resenas.findByIdAndDelete(req.params.id);
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
  

