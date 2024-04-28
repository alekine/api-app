

import routerc from "express-promise-router";
import User from "../controllers/Auten.login.js";




const routers = routerc();



routers.post("/auten", User.login); 



export default routers;

