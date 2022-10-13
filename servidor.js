const servidorWeb = require("express");

const app = servidorWeb();
const puerto = 3001;

app.get('/', (req , res) => {
    res.send("Estas consultando la raiz de la API")
} );

app.get('/persona', (req , res) => {
     let persona = {
        "nombre": "Felipe",
        "apellido": "Salamanca",
        "estadoCivil": "soltero",
        "edad": 26,
        "tieneHijos": false
     }

     res.send(persona);
} );

app.listen(puerto, () => {
    console.log("El servidor esta en ejecucion en el puerto " + puerto);
});
