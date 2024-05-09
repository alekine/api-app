

import Datosctr from "../controllers/resena.controller.js";
import routerx from "express-promise-router";


const router = routerx();

router.post("/addResena", Datosctr.postResena); // POST /Movies para agregar nuevos datos
router.get("/obtenerResena", Datosctr.getResena); // GET /Movies para obtener todos los datos


router.get("resena/obtener/:id", Datosctr.getResena); // GET /Movies/:id para obtener un dato por su ID
router.patch("/put/:id", Datosctr.putResena); // PATCH /Movies/:id para actualizar un dato por su ID
router.delete("/delet/:id",Datosctr.delResena); // DELETE /Movies/:id para eliminar un dato por su ID




export default router;

