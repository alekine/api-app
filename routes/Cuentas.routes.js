

import Datosctr from "../controllers/Cuentas.controller.js";
import routerc from "express-promise-router";
import count from "../controllers/Auten.login.js";




const routers = routerc();

routers.post("/post-cuenta", Datosctr.postDatos); // POST /Movies para agregar nuevos datos
routers.get("/obtener-cuenta", Datosctr.getDatos); // GET /Movies para obtener todos los datos
routers.get("/obtener/:id", Datosctr.getDato); // GET /Movies/:id para obtener un dato por su ID
routers.patch("/put/:id", Datosctr.putDatos); // PATCH /Movies/:id para actualizar un dato por su ID
routers.delete("/delet/:id",Datosctr.delDatos); // DELETE /Movies/:id para eliminar un dato por su ID


routers.post("/auten", count.login); 



export default routers;

