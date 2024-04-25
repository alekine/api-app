// En tu controlador DatosController.js
import fetch from 'node-fetch';
import fs from 'fs';
import Imagen from '../models/index.js'; // Importa tu modelo de imagen definido con Mongoose

const uploadFile = async (req, res) => {
  try {
    const { imagenUrl } = req.body;

    const response = await fetch(imagenUrl);
    const buffer = await response.buffer();
    const filename = `${Date.now()}-imagen.jpg`; // Puedes ajustar el nombre del archivo según tus necesidades

    // Guardar la imagen en el sistema de archivos
    fs.writeFileSync(`uploads/${filename}`, buffer);

    // Guardar la ruta de la imagen en la base de datos
    const nuevaImagen = new Imagen({ ruta: filename }); // Utiliza tu modelo Imagen definido con Mongoose
    await nuevaImagen.save();

    res.status(200).send('Imagen guardada correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al guardar la imagen');
  }
};

export default {
  uploadFile
};
