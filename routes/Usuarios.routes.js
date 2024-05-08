

import routerx from "express-promise-router";
import UserCrt from "../controllers/Usuarios.js"

const router = routerx();

router.get("/userme", UserCrt.obtenerUserLogued); // POST /Movies para agregar nuevos datos




export default router;

