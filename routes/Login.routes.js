

import Auth from "../controllers/Auth.controller.js";
import routere from "express-promise-router";





const routerLogin = routere();




routerLogin.post("/Login", Auth.login); // POST para guaradar cuentas







export default routerLogin;
