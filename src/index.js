import express from "express";
import http from "http";

import { port } from "../config/config";

const app = express();
const server = http.createServer(app);

//* Cargando la carpeta public
app.use(express.static(__dirname + "/public"));

//? esto sirve paa poder leer el body
app.use(express.json());
app.use(express.urlencoded({extended: true }));

server.listen(port, () => 
  console.log(`listening on port http://localhost:${port}`)
);