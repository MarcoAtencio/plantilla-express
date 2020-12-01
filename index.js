const express = require('express')
const app = express()
const port = process.env.PORT
const path = require('path')
const router = express.Router()

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/empleado', (req, res) => {
    res.sendFile(path.join(__dirname+'/plubic/empleados/empleados.html'));
  });

app.get('/servicio', (req, res) => {
    res.sendFile(path.join(__dirname+'/plubic/servicios/servicios.html'));
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})