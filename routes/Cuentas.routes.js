

import Datosctr from "../controllers/Cuentas.controller.js";
import routerc from "express-promise-router";
import Cuentasctr from "../controllers/Auth.controller.js";





const routers = routerc();



routers.post("/login", Cuentasctr.login); // POST para autenticar usuario

routers.post("/post-cuenta", Datosctr.postDatos); // POST para guaradar cuentas

routers.get("/obtener-cuenta", Datosctr.getDatos); // GET /Movies para obtener todos los datos
routers.get("/obtener/:id", Datosctr.getDato); // GET /Movies/:id para obtener un dato por su ID
routers.patch("/put/:id", Datosctr.putDatos); // PATCH /Movies/:id para actualizar un dato por su ID
routers.delete("/delet/:id",Datosctr.delDatos); // DELETE /Movies/:id para eliminar un dato por su ID





export default routers;

