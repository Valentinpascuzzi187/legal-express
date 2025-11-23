const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Servir archivos estáticos
app.use(express.static(__dirname));

// Endpoint de prueba
app.get('/test', (req, res) => {
  res.json({ mensaje: "Servidor funcionando" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
