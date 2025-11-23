const express = require('express');
const path = require('path');
const app = express();

// Para poder recibir datos en JSON
app.use(express.json());

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Endpoint de prueba
app.get('/test', (req, res) => {
  res.json({ mensaje: "Servidor funcionando" });
});

// Levantar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
