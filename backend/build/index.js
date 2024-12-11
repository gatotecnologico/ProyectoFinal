"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Creamos la aplicacion a traves del paquete express
const app = (0, express_1.default)();
//Todo lo que regresa al usuario es de tipo JSON
app.use(express_1.default.json());
//Puerto para escuchar la peticion del frontend
const PUERTO = 3001;
//Ruta
app.get('/hola', (_req, res) => {
    let fecha = new Date().toLocaleDateString();
    res.send('mundo con la fecha ' + fecha + " con TypeScript");
});
//Encendemos el servidor y lo ponemos en escucha
app.listen(PUERTO, () => {
    console.log(`Servidor en ejecucion y escuchando en el puerto ${PUERTO}`);
});
