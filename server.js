const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Servir archivos estáticos de la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint de prueba para API
app.get('/test', (req, res) => {
  const data = [
    { nombre: 'Juan Perez', email: 'juan@example.com' },
    { nombre: 'Ana Gomez', email: 'ana@example.com' }
  ];
  res.json(data);
});

// Si quieres que la raíz cargue el HTML principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
