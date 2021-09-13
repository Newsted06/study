const express = require('express');
const app = express()
const port = 3000

var arrDias=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
var fechaActual= new Date();
var diaActual=fechaActual.getDate();
var pistaInicioMes=6;

for (var x=1; x<diaActual; x++){
    if (pistaInicioMes===6) {
        pistaInicioMes=0;
    }
    else{
        pistaInicioMes++;
    }    
}

app.get('/', (req, res) => {
  res.end(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Test</title>
        <script>
            var arrDias=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
            var fechaActual= new Date();
            var diaActual=fechaActual.getDate();
            var pistaInicioMes=6;
            
            for (var x=1; x<diaActual; x++){
                if (pistaInicioMes===6) {
                    pistaInicioMes=0;
                }
                else{
                    pistaInicioMes++;
                }    
            }
            alert(arrDias[pistaInicioMes]);
        </script>
    </head>
    <body>
        <h1>Hola mundo! Hoy es ${arrDias[pistaInicioMes]}!</h1>
    </body>
    </html>
  `)
})

app.listen(port, () => {
  console.log(`Servidor local funcionando: http://localhost:${port}`)
})