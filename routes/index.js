import routerx from "express-promise-router";
import DatosR from "./Datos.routes";

const router = routerx();

router.use("/movies",DatosR);//hacer peticiones

export default router;