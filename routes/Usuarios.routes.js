

import routerx from "express-promise-router";
import UserCrt from "../controllers/Usuarios.js"
import md_auth from "../middlewares/Autentication.js"




const router = routerx();

router.get("/userme",[md_auth.asureAuth], UserCrt.obtenerUserLogued); 




export default router;

