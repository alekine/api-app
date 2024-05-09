

import Datosctr from "../controllers/resena.controller";
import routerx from "express-promise-router";


const router = routerx();

router.post("/addResena", Datosctr.postResena); // POST /Movies para agregar nuevos datos
router.get("/obtenerResena", Datosctr.getResena); // GET /Movies para obtener todos los datos


router.get("/obtener/:id", Datosctr.getDato); // GET /Movies/:id para obtener un dato por su ID
router.patch("/put/:id", Datosctr.putDatos); // PATCH /Movies/:id para actualizar un dato por su ID
router.delete("/delet/:id",Datosctr.delDatos); // DELETE /Movies/:id para eliminar un dato por su ID




export default router;

