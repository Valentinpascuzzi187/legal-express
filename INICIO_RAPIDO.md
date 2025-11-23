# 🚀 Inicio Rápido - Sistema Legal

## Instalación en 3 pasos:

### 1️⃣ Instalar dependencias
```bash
npm install
```

### 2️⃣ Iniciar el servidor
```bash
npm start
```

### 3️⃣ Abrir en el navegador

**Página de Clientes:**
```
http://localhost:3000
```

**Panel de Administración:**
```
http://localhost:3000/acceso-penalista-seguro
```

---

## 🔑 Credenciales Admin

```
Usuario: penalistaUser_#$"!"
Contraseña: H@lcon271650//#
```

---

## 📱 WhatsApp configurado

**Dr. Cejas Nazareno - Abogado Penalista**
Número: **+54 11 3469-1074**

---

## ✅ Funcionalidades

### Para Clientes:
- Llenar formulario de consulta
- Recibir confirmación
- Ser redirigido a WhatsApp

### Para Admin:
- Ver todas las consultas
- Filtrar por tipo de caso
- Exportar a Excel
- Contactar por WhatsApp/Email
- Eliminar consultas

---

## 🎯 Flujo Completo

1. Cliente entra a `http://localhost:3000`
2. Completa el formulario con sus datos
3. Envía la consulta
4. Ve mensaje de confirmación
5. Es redirigido a WhatsApp automáticamente
6. Admin accede a `http://localhost:3000/acceso-penalista-seguro`
7. Ingresa credenciales
8. Ve dashboard con todas las consultas
9. Puede filtrar, exportar o contactar clientes
10. Datos se guardan en `consultas.json`

---

## 📊 Datos que se capturan

- ✓ Nombre completo
- ✓ Email
- ✓ Número de teléfono
- ✓ Tipo de caso (Penal, Civil, Laboral, etc.)
- ✓ Consulta/Observación detallada
- ✓ Fecha y hora automática

---

## 🛠️ Comandos útiles

**Iniciar servidor:**
```bash
npm start
```

**Iniciar con auto-reinicio (desarrollo):**
```bash
npm run dev
```

**Detener servidor:**
- Presiona `Ctrl + C` en la terminal

---

## 📂 Archivos importantes

- `index.html` → Página pública para clientes
- `admin.html` → Panel privado del administrador
- `server.js` → Servidor backend
- `consultas.json` → Base de datos (se crea solo)

---

## ⚠️ Importante

1. La ruta del admin **NO aparece** en ningún enlace público
2. Solo tú sabes que existe `/acceso-penalista-seguro`
3. Los clientes solo ven la página principal
4. Los datos se guardan localmente en `consultas.json`
5. Cambia las credenciales antes de poner en producción

---

## 🔧 Personalización rápida

**Cambiar número de WhatsApp:**
- En `index.html`, busca `5491134691074`
- Reemplaza con tu número (sin espacios ni guiones)
- Número actual: Dr. Cejas Nazareno - 11 3469-1074

**Cambiar credenciales admin:**
- En `admin.html`, línea 137
- Modifica usuario y contraseña

**Cambiar colores:**
- En ambos HTML, busca `bg-blue-600`
- Cambia "blue" por: red, green, purple, yellow, etc.

---

## 💡 Tips

- Mantén el servidor corriendo mientras trabajas
- Revisa la consola para ver logs de consultas
- El archivo `consultas.json` se crea automáticamente
- Puedes editar `consultas.json` manualmente si necesitas
- Haz backup regular de `consultas.json`

---

## 🆘 Ayuda

Si algo no funciona:

1. Asegúrate de tener Node.js instalado: `node --version`
2. Verifica que instalaste las dependencias: `npm install`
3. Revisa que el puerto 3000 esté libre
4. Mira la consola del servidor para errores
5. Presiona F12 en el navegador para ver errores

---

**¡Listo para usar! 🎉**

Cualquier duda, contacta por WhatsApp: +54 11 3469-1074 (Dr. Cejas Nazareno)
