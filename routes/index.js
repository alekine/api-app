import routerx from "express-promise-router";
import DatosR from "./Datos.routes.js";
import CuentasR from "./Cuentas,routes.js";



const router = routerx();

router.use("/movies",DatosR);//hacer peticiones
router.use("/cuentas",CuentasR);//hacer peticiones


export default router;