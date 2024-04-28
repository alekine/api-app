import User from "./Cuentas.routes.js";
import routerx from "express-promise-router";



const router = routerx();

router.use("/User",User);//hacer peticiones


export default router;