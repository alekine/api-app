

import Datosctr from "../controllers/Datos.controller.js";
import routerx from "express-promise-router";


const router = routerx();

router.post("/post", Datosctr.postDatos); // POST /agregar nueva pelicula
router.get("/obtenerMovie", Datosctr.getDatos); // GET / para obtener todos las peliculas
router.get("/obtener/:id", Datosctr.getDato); // GET /Movies/:id para obtener una pelicula por su ID
router.patch("/put/:id", Datosctr.putDatos); // PATCH /Movies/:id para actualizar un dato por su ID
router.delete("/delet/:id",Datosctr.delDatos); // DELETE /Movies/:id para eliminar una pelicula por su ID




export default router;

