import express from 'express';
import DatosController from '../controllers/Datos.controller.js';

const router = express.Router();

// Rutas para la gestión de datos
router.post('/post', DatosController.postDatos); // POST /api/datos/post
router.get('/obtener', DatosController.getDatos); // GET /api/datos/obtener
router.put('/put/:id', DatosController.putDatos); // PUT /api/datos/put/:id
router.delete('/delet/:id', DatosController.delDatos); // DELETE /api/datos/delet/:id

// Rutas para la gestión de archivos
router.post('/upload', DatosController.uploadMiddleware, DatosController.uploadFile); // POST /api/datos/upload

export default router;
