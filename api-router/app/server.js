var express = require("express"); //llamamos a Express
var app = express();
var bodyParser = require('body-parser')   


var port = process.env.PORT || 8080; // establecemos nuestro puerto

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())  


var router = require('./routes')


// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
app.use("/api", router);
//app.use('/api', router)

// iniciamos nuestro servidor
app.listen(port);

console.log("API escuchando en el puerto " + port);
