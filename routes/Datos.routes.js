// import routerx from "express-promise-router";
// import Datosctr from "../controllers/Datos.controller";

// const router = routerx();

// router.post("/saveData", Datosctr.postDatos);
// router.get("/buscar", Datosctr.getDatos);
// router.get("/buscar/:id", Datosctr.getDato);
// router.patch("/actualizar/:id", Datosctr.putDatos);
// router.delete("/delete/:id",Datosctr.delDatos);


// export default router;



import routerx from "express-promise-router";
import Datosctr from "../controllers/Datos.controller";

const router = routerx();

router.post("/post", Datosctr.postDatos); // POST /Movies para agregar nuevos datos
router.get("/obtener", Datosctr.getDatos); // GET /Movies para obtener todos los datos
router.get("/obtener/:id", Datosctr.getDato); // GET /Movies/:id para obtener un dato por su ID
router.patch("/put/:id", Datosctr.putDatos); // PATCH /Movies/:id para actualizar un dato por su ID
router.delete("/delet/:id",Datosctr.delDatos); // DELETE /Movies/:id para eliminar un dato por su ID

export default router;



// import routerx from "express-promise-router";
// import Datosctr from "../controllers/Datos.controller";

// const router = routerx();

// // POST /Movies para agregar nuevos datos
// router.post("/", Datosctr.postDatos);

// // GET /Movies para obtener todos los datos
// router.get("/", Datosctr.getDatos);

// // GET /Movies/:id para obtener un dato por su ID
// router.get("/:id", Datosctr.getDato);

// // PATCH /Movies/:id para actualizar un dato por su ID
// router.patch("/:id", Datosctr.putDatos);

// // DELETE /Movies/:id para eliminar un dato por su ID
// router.delete("/:id", Datosctr.delDatos);

// export default router;


