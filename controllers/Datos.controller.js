import Models from "../models/index.js";







export default {

  //Endpoint Enviar Datos
  postDatos: async (req, res, next) => {
    try {
      const { titulo, sinopsis, imagen } = req.body;

      const guardarDatos = new Models.Datos({
        titulo,
        sinopsis,
        imagen,
       
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
      
      const obtener= await Models.Datos.find();//cambiar a movies
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
      
      const obtener= await Models.Datos.findById(req.params.id);////////
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
      const { titulo, sinopsis, imagen } = req.body;

      const actualizarDatos = {
        titulo,
        sinopsis,
        imagen,
      
        
      };

      const actualizar =await Models.Datos.findByIdAndUpdate(req.params.id, actualizarDatos); ;
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
      const el= await Models.Datos.findByIdAndDelete(req.params.id);
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
  


// getMovies: async (req, res, next) => {
//   try {
//     const movies = await Models.Datos.find();
//     res.status(200).json(movies);
//   } catch (error) {
//     res.status(500).send({
//       message: "Error al obtener las películas",
//     });
//     next(error);
//   }
// },

// getMovieById: async (req, res, next) => {
//   try {
//     const movie = await Models.Datos.findById(req.params.id);
//     if (!movie) {
//       return res.status(404).json({ message: "Película no encontrada" });
//     }
//     res.status(200).json(movie);
//   } catch (error) {
//     res.status(500).send({
//       message: "Error al obtener la película",
//     });
//     next(error);
//   }
// },

// updateMovieById: async (req, res, next) => {
//   try {
//     const { titulo, sinopsis, imagen } = req.body;
//     const updatedMovie = {
//       titulo,
//       sinopsis,
//       imagen,
//     };
//     const movie = await Models.Datos.findByIdAndUpdate(req.params.id, updatedMovie, { new: true });
//     if (!movie) {
//       return res.status(404).json({ message: "Película no encontrada" });
//     }
//     res.status(200).json(movie);
//   } catch (error) {
//     res.status(500).send({
//       message: "Error al actualizar la película",
//     });
//     next(error);
//   }
// },

// }
