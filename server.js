const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Puerto dinámico para Render
const PORT = process.env.PORT || 10000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Archivo para almacenar consultas
const DATA_FILE = path.join(__dirname, 'consultas.json');

// Inicializar archivo de datos si no existe
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

// Función para leer consultas
function readConsultas() {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error leyendo consultas:', error);
        return [];
    }
}

// Función para guardar consultas
function saveConsultas(consultas) {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(consultas, null, 2));
        return true;
    } catch (error) {
        console.error('Error guardando consultas:', error);
        return false;
    }
}

// RUTAS PÚBLICAS

// Página principal para clientes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta oculta para administrador (no aparece en ningún enlace público)
app.get('/acceso-penalista-seguro', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// API: Enviar nueva consulta
app.post('/api/consulta', (req, res) => {
    try {
        const { nombre, email, numero, tipoCaso, consulta, fecha } = req.body;

        // Validación básica
        if (!nombre || !email || !numero || !tipoCaso || !consulta) {
            return res.status(400).json({ 
                success: false, 
                message: 'Todos los campos son requeridos' 
            });
        }

        // Leer consultas existentes
        const consultas = readConsultas();

        // Crear nueva consulta con ID único
        const nuevaConsulta = {
            id: Date.now(),
            nombre,
            email,
            numero,
            tipoCaso,
            consulta,
            fecha: fecha || new Date().toLocaleString('es-AR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }),
            estado: 'Pendiente'
        };

        // Agregar y guardar
        consultas.push(nuevaConsulta);
        
        if (saveConsultas(consultas)) {
            console.log(`Nueva consulta recibida de: ${nombre} - Tipo: ${tipoCaso}`);
            res.json({ 
                success: true, 
                message: 'Consulta enviada exitosamente',
                id: nuevaConsulta.id
            });
        } else {
            res.status(500).json({ 
                success: false, 
                message: 'Error al guardar la consulta' 
            });
        }

    } catch (error) {
        console.error('Error procesando consulta:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error del servidor' 
        });
    }
});

// API: Obtener todas las consultas (solo para admin)
app.get('/api/consultas', (req, res) => {
    try {
        const consultas = readConsultas();
        // Ordenar por fecha más reciente primero
        consultas.sort((a, b) => b.id - a.id);
        res.json(consultas);
    } catch (error) {
        console.error('Error obteniendo consultas:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error al obtener consultas' 
        });
    }
});

// API: Obtener una consulta específica
app.get('/api/consulta/:id', (req, res) => {
    try {
        const consultas = readConsultas();
        const consulta = consultas.find(c => c.id === parseInt(req.params.id));
        
        if (consulta) {
            res.json(consulta);
        } else {
            res.status(404).json({ 
                success: false, 
                message: 'Consulta no encontrada' 
            });
        }
    } catch (error) {
        console.error('Error obteniendo consulta:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error del servidor' 
        });
    }
});

// API: Eliminar consulta
app.delete('/api/consulta/:id', (req, res) => {
    try {
        let consultas = readConsultas();
        const index = consultas.findIndex(c => c.id === parseInt(req.params.id));
        
        if (index !== -1) {
            consultas.splice(index, 1);
            
            if (saveConsultas(consultas)) {
                console.log(`Consulta eliminada - ID: ${req.params.id}`);
                res.json({ 
                    success: true, 
                    message: 'Consulta eliminada exitosamente' 
                });
            } else {
                res.status(500).json({ 
                    success: false, 
                    message: 'Error al eliminar la consulta' 
                });
            }
        } else {
            res.status(404).json({ 
                success: false, 
                message: 'Consulta no encontrada' 
            });
        }
    } catch (error) {
        console.error('Error eliminando consulta:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error del servidor' 
        });
    }
});

// API: Actualizar estado de consulta
app.put('/api/consulta/:id', (req, res) => {
    try {
        const consultas = readConsultas();
        const index = consultas.findIndex(c => c.id === parseInt(req.params.id));
        
        if (index !== -1) {
            consultas[index] = { ...consultas[index], ...req.body };
            
            if (saveConsultas(consultas)) {
                res.json({ 
                    success: true, 
                    message: 'Consulta actualizada exitosamente',
                    consulta: consultas[index]
                });
            } else {
                res.status(500).json({ 
                    success: false, 
                    message: 'Error al actualizar la consulta' 
                });
            }
        } else {
            res.status(404).json({ 
                success: false, 
                message: 'Consulta no encontrada' 
            });
        }
    } catch (error) {
        console.error('Error actualizando consulta:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error del servidor' 
        });
    }
});

// API: Obtener estadísticas
app.get('/api/estadisticas', (req, res) => {
    try {
        const consultas = readConsultas();
        
        const stats = {
            total: consultas.length,
            porTipo: {
                Penal: consultas.filter(c => c.tipoCaso === 'Penal').length,
                Civil: consultas.filter(c => c.tipoCaso === 'Civil').length,
                Laboral: consultas.filter(c => c.tipoCaso === 'Laboral').length,
                Familiar: consultas.filter(c => c.tipoCaso === 'Familiar').length,
                Comercial: consultas.filter(c => c.tipoCaso === 'Comercial').length,
                Otro: consultas.filter(c => c.tipoCaso === 'Otro').length
            },
            ultimaSemana: consultas.filter(c => {
                const fecha = new Date(c.fecha);
                const semanaAtras = new Date();
                semanaAtras.setDate(semanaAtras.getDate() - 7);
                return fecha >= semanaAtras;
            }).length
        };
        
        res.json(stats);
    } catch (error) {
        console.error('Error obteniendo estadísticas:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error al obtener estadísticas' 
        });
    }
});

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 - Página no encontrada</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gray-100 flex items-center justify-center min-h-screen">
            <div class="text-center">
                <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p class="text-xl text-gray-600 mb-8">Página no encontrada</p>
                <a href="/" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    Volver al inicio
                </a>
            </div>
        </body>
        </html>
    `);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log('===========================================');
    console.log('🚀 Servidor Estudio Jurídico iniciado');
    console.log('===========================================');
    console.log(`📍 Servidor corriendo en: http://localhost:${PORT}`);
    console.log(`👥 Página clientes: http://localhost:${PORT}`);
    console.log(`🔐 Panel admin: http://localhost:${PORT}/acceso-penalista-seguro`);
    console.log('===========================================');
    console.log('📊 Credenciales de acceso admin:');
    console.log('   Usuario: penalistaUser_#$"!"');
    console.log('   Contraseña: H@lcon271650//#');
    console.log('===========================================');
});

// Manejo de errores del servidor
process.on('uncaughtException', (error) => {
    console.error('Error no capturado:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Promesa rechazada no manejada:', reason);
});
