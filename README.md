# 🏛️ Sistema de Gestión de Consultas Legales

Sistema completo para estudio jurídico con página de clientes, panel de administración seguro y exportación a Excel.

## 📋 Características

### Para Clientes:
- ✅ Formulario de consulta intuitivo y profesional
- ✅ Campos: Nombre, Email, Teléfono, Tipo de Caso, Consulta
- ✅ Confirmación de envío exitoso
- ✅ Redirección automática a WhatsApp
- ✅ Diseño responsive y moderno

### Para Administradores:
- 🔐 Acceso seguro con login protegido
- 📊 Dashboard con estadísticas en tiempo real
- 📁 Gestión completa de consultas
- 🔍 Filtrado por tipo de caso
- 📥 Exportación a Excel profesional
- 📧 Contacto directo (WhatsApp/Email) desde cada caso
- 🗑️ Eliminación de consultas
- 🔄 Actualización en tiempo real

## 🚀 Instalación

### 1. Requisitos previos
- Node.js versión 14 o superior
- npm (viene con Node.js)

### 2. Descargar el proyecto
Descarga todos los archivos en una carpeta:
- `index.html` - Página para clientes
- `admin.html` - Panel de administración
- `server.js` - Servidor Node.js
- `package.json` - Configuración del proyecto

### 3. Instalar dependencias
Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

Esto instalará Express.js automáticamente.

### 4. Iniciar el servidor

```bash
npm start
```

O para desarrollo con auto-reinicio:

```bash
npm run dev
```

## 🌐 Acceso al Sistema

Una vez iniciado el servidor, verás en consola:

```
===========================================
🚀 Servidor Estudio Jurídico iniciado
===========================================
📍 Servidor corriendo en: http://localhost:3000
👥 Página clientes: http://localhost:3000
🔐 Panel admin: http://localhost:3000/acceso-penalista-seguro
===========================================
```

### URLs:

#### Página de Clientes (Pública):
```
http://localhost:3000
```

#### Panel de Administración (Oculto):
```
http://localhost:3000/acceso-penalista-seguro
```

## 🔑 Credenciales de Administrador

**Usuario:** `penalistaUser_#$"!"`

**Contraseña:** `H@lcon271650//#`

⚠️ **IMPORTANTE:** Cambia estas credenciales en el archivo `admin.html` (línea 137) antes de poner en producción.

## 📱 Configuración de WhatsApp

El número de WhatsApp está configurado como: **+54 11 3469-1074**

Dr. Cejas Nazareno - Abogado Penalista

El número ya está integrado en:
1. `index.html` - Botón de WhatsApp en footer y redirección automática
2. `admin.html` - Botón de contacto en cada tarjeta de consulta

## 📂 Estructura de Archivos

```
proyecto/
│
├── index.html          # Página principal para clientes
├── admin.html          # Panel de administración
├── server.js           # Servidor Express.js
├── package.json        # Dependencias del proyecto
├── consultas.json      # Base de datos (se crea automáticamente)
└── README.md           # Este archivo
```

## 💾 Almacenamiento de Datos

Los datos se guardan en `consultas.json` que se crea automáticamente al recibir la primera consulta.

**Formato de cada consulta:**
```json
{
  "id": 1234567890,
  "nombre": "Juan Pérez",
  "email": "juan@email.com",
  "numero": "+54 11 1234-5678",
  "tipoCaso": "Penal",
  "consulta": "Descripción del caso...",
  "fecha": "25/12/2024, 14:30",
  "estado": "Pendiente"
}
```

## 📊 Exportación a Excel

El panel de administración incluye un botón "Exportar a Excel" que genera un archivo `.xlsx` con:

- Numeración de casos
- Datos completos del cliente
- Consultas detalladas
- Fecha y hora
- Columnas auto-ajustadas

## 🔒 Seguridad

### Características de seguridad implementadas:

1. **Ruta oculta:** El panel admin no aparece en ningún enlace público
2. **Autenticación:** Login requerido para acceder al dashboard
3. **Validación de datos:** Todos los campos son validados en servidor
4. **Session Storage:** Mantiene la sesión del admin
5. **HTTPS recomendado:** Para producción, usar certificado SSL

### Para mayor seguridad en producción:

1. Implementar hash de contraseñas (bcrypt)
2. Usar variables de entorno para credenciales
3. Implementar rate limiting
4. Configurar CORS apropiadamente
5. Usar HTTPS obligatorio

## 🛠️ API Endpoints

### Públicos:
- `POST /api/consulta` - Enviar nueva consulta

### Privados (requieren autenticación en producción):
- `GET /api/consultas` - Obtener todas las consultas
- `GET /api/consulta/:id` - Obtener una consulta específica
- `DELETE /api/consulta/:id` - Eliminar consulta
- `PUT /api/consulta/:id` - Actualizar consulta
- `GET /api/estadisticas` - Obtener estadísticas

## 🎨 Personalización

### Cambiar colores:
En `index.html` y `admin.html`, modifica las clases de Tailwind CSS:
- `bg-blue-600` → Cambia "blue" por otro color
- Colores disponibles: red, green, yellow, purple, pink, indigo, etc.

### Modificar tipos de casos:
En `index.html`, líneas 142-148, edita las opciones del select.

### Cambiar textos:
Simplemente busca y reemplaza los textos en español en ambos HTML.

## 🌍 Deployment (Producción)

### Opciones recomendadas:

1. **Heroku** (Gratis)
2. **Railway** (Gratis)
3. **Render** (Gratis)
4. **DigitalOcean** (Pago)
5. **AWS EC2** (Pago)

### Variables de entorno necesarias:
```
PORT=3000
NODE_ENV=production
```

## 🐛 Solución de Problemas

### El servidor no inicia:
```bash
# Verificar versión de Node.js
node --version

# Reinstalar dependencias
rm -rf node_modules
npm install
```

### Puerto ya en uso:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [número] /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

### Los datos no se guardan:
- Verifica permisos de escritura en la carpeta
- Revisa la consola del servidor para errores
- Asegúrate de que `consultas.json` se haya creado

## 📞 Soporte

Para consultas o problemas:
- WhatsApp: +54 11 3469-1074 (Dr. Cejas Nazareno)
- Revisa la consola del navegador (F12) para errores
- Revisa la consola del servidor para logs

## 📝 Licencia

ISC License - Uso libre para proyectos personales y comerciales.

---

**¡Sistema listo para usar! 🎉**

Desarrollado con ❤️ para profesionales del derecho.
