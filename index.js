
import express from "express";

import routes from "./routes";

const app = express();

//Listening de puertos
app.set('port', process.env.PORT || 4000);


app.use("/api",routes);

app.listen(app.get('port'), () => {
  console.log(`Example app listening on port:` + app.get('port'));
})

