# 🚀 Despliegue en Render

## Tu Configuración Actual:

- **URL Pública:** https://legal-express.onrender.com
- **IPs:** 74.220.48.0/24, 74.220.56.0/24
- **Servidor:** srv-d4h8ahemcj7s73bs0jag

---

## 📋 URLs de Acceso:

### Para Clientes (Pública):
```
https://legal-express.onrender.com
```

### Para Admin (Oculta):
```
https://legal-express.onrender.com/acceso-penalista-seguro
```

---

## 🔐 Credenciales Admin:

```
Usuario: penalistaUser_#$"!"
Contraseña: H@lcon271650//#
```

---

## 📦 Pasos para Desplegar:

### 1. Subir Código a GitHub

```bash
# Inicializar repositorio Git
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Sistema legal completo"

# Conectar con GitHub (crea un repo nuevo en github.com)
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git

# Subir código
git push -u origin main
```

### 2. Configurar en Render

1. Ve a https://dashboard.render.com
2. Click en "New +" → "Web Service"
3. Conecta tu repositorio de GitHub
4. Configuración:
   - **Name:** legal-express
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free

5. Click en "Create Web Service"

### 3. Variables de Entorno (opcional)

En el dashboard de Render, ve a "Environment" y agrega:

```
NODE_ENV=production
```

---

## ✅ Verificación Post-Despliegue:

1. **Página de Clientes:**
   - Abre: https://legal-express.onrender.com
   - Verifica que cargue correctamente
   - Prueba enviar un formulario de consulta

2. **Panel Admin:**
   - Abre: https://legal-express.onrender.com/acceso-penalista-seguro
   - Ingresa con las credenciales
   - Verifica que veas las consultas enviadas

3. **WhatsApp:**
   - Confirma que la redirección a +54 91158922069 funcione

---

## 📊 Monitoreo:

### Logs en Tiempo Real:
1. Ve al dashboard de Render
2. Selecciona tu servicio "legal-express"
3. Click en "Logs"
4. Verás todos los logs del servidor

### Ver Consultas:
- Accede al panel admin
- Todas las consultas se guardan en `consultas.json`

---

## ⚠️ Importante sobre Render Free Tier:

1. **El servicio se "duerme" después de 15 minutos de inactividad**
   - Primera carga puede tardar 30-60 segundos
   - Visitas posteriores son instantáneas

2. **Almacenamiento efímero:**
   - Los datos en `consultas.json` se BORRAN al reiniciar
   - **Solución:** Exporta a Excel regularmente desde el admin

3. **Alternativas para datos persistentes:**
   - Usar MongoDB Atlas (gratis)
   - Usar PostgreSQL de Render (plan pago)
   - Usar servicios externos de almacenamiento

---

## 🔧 Actualizar el Sitio:

Cuando hagas cambios al código:

```bash
git add .
git commit -m "Descripción de cambios"
git push
```

Render detectará los cambios y re-desplegará automáticamente.

---

## 📱 Compartir con Clientes:

URL para compartir:
```
https://legal-express.onrender.com
```

Puedes compartirla en:
- WhatsApp Business
- Tarjetas digitales
- Redes sociales
- Email signature

---

## 🛡️ Seguridad:

✅ La ruta `/acceso-penalista-seguro` NO aparece en ningún link público
✅ Solo tú conoces esta URL
✅ Los clientes nunca la verán
✅ Protegida con usuario y contraseña

---

## 💡 Tips:

1. **Exporta datos regularmente:** El plan free reinicia y borra datos
2. **Dominio personalizado:** Puedes conectar tu propio dominio en Render
3. **HTTPS:** Render incluye SSL/HTTPS automático y gratuito
4. **Uptime:** Visita tu sitio cada 10 min para mantenerlo activo

---

## 🆘 Solución de Problemas:

### El sitio no carga:
- Espera 60 segundos (primera carga después de inactividad)
- Revisa los logs en el dashboard de Render

### No se guardan consultas:
- Verifica los logs del servidor
- Asegúrate de que el formulario se envíe correctamente (F12 → Network)

### Error 404 en admin:
- Verifica la URL exacta: `/acceso-penalista-seguro`
- Distingue mayúsculas/minúsculas

---

## 📞 Soporte:

WhatsApp: +54 11 3469-1074 (Dr. Cejas Nazareno)

---

**¡Tu sistema está listo para producción en Render! 🎉**
