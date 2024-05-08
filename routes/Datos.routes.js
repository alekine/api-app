

import Datosctr from "../controllers/Datos.controller.js";
import routerx from "express-promise-router";


const router = routerx();

router.post("/addMovie", Datosctr.postDatos); // POST /Movies para agregar nuevos datos
router.get("/obtenerMovie", Datosctr.getDatos); // GET /Movies para obtener todos los datos
router.get("/obtener/:id", Datosctr.getDato); // GET /Movies/:id para obtener un dato por su ID
router.patch("/put/:id", Datosctr.putDatos); // PATCH /Movies/:id para actualizar un dato por su ID
router.delete("/delet/:id",Datosctr.delDatos); // DELETE /Movies/:id para eliminar un dato por su ID




export default router;

