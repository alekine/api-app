import Models from "../models/index.js";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

export default {
  // Endpoint Enviar Datos
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

  // EndPoint BuscarAll
  getDatos: async (req, res, next) => {
    try {
      const obtener = await Models.Datos.find();
      res.status(200).json(obtener);
    } catch (error) {
      res.status(500).send({
        message: "Error al obtener los datos",
      });
      next(error);
    }
  },

  // EndPoint Actualizar
  putDatos: async (req, res, next) => {
    try {
      const { titulo, sinopsis, imagen } = req.body;

      const actualizarDatos = {
        titulo,
        sinopsis,
        imagen,
      };

      const actualizar = await Models.Datos.findByIdAndUpdate(req.params.id, actualizarDatos);
      res.status(200).json(actualizar);
    } catch (error) {
      res.status(500).send({
        message: "Error al actualizar",
      });
      next(error);
    }
  },

  // EndPoint eliminar
  delDatos: async (req, res, next) => {
    try {
      const el = await Models.Datos.findByIdAndDelete(req.params.id);
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

  // Middleware para subir archivos con multer
  uploadMiddleware: upload.single('imagen'),

  // Controlador para manejar la subida de archivos
  uploadFile: async (req, res) => {
    try {
      // Guardar la ruta de la imagen en la base de datos
      const guardarDatos = new Models.Datos({
        titulo: req.body.titulo,
        sinopsis: req.body.sinopsis,
        imagen: `/uploads/${req.file.filename}`, // Ruta relativa de la imagen
      });
      
      const guardar = await guardarDatos.save();

      res.status(200).send({ message: 'Imagen subida correctamente.', imageUrl: guardar.imagen });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error al subir imagen.' });
    }
  }
};
