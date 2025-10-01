# Guía de Despliegue en Netlify

Este documento proporciona instrucciones paso a paso para desplegar el sitio web Headless WordPress en Netlify.

## 📋 Prerequisitos

Antes de comenzar, asegúrate de tener:

1. ✅ Una cuenta en [Netlify](https://www.netlify.com/) (puedes usar tu cuenta de GitHub para login)
2. ✅ El sitio WordPress en https://samuelsuiri.info/ debe estar funcionando
3. ✅ La API REST de WordPress debe estar habilitada (viene habilitada por defecto en WordPress 4.7+)

## 🚀 Opción 1: Despliegue desde GitHub (Recomendado)

### Paso 1: Conectar el Repositorio

1. Inicia sesión en [Netlify](https://app.netlify.com/)
2. Haz clic en **"Add new site"** → **"Import an existing project"**
3. Selecciona **"Deploy with GitHub"**
4. Autoriza a Netlify para acceder a tu cuenta de GitHub
5. Busca y selecciona el repositorio `MundoSuiri/El-Mundo-de-Samuel-Suiri`

### Paso 2: Configurar el Build

Netlify debería detectar automáticamente la configuración desde `netlify.toml`, pero verifica:

- **Branch to deploy**: `main` (o la rama que prefieras)
- **Build command**: `npm run build` (detectado automáticamente)
- **Publish directory**: `.next` (detectado automáticamente)

### Paso 3: Configurar Variables de Entorno

1. En la sección de configuración del sitio, ve a **"Site settings"** → **"Environment variables"**
2. Agrega la siguiente variable:
   - **Key**: `NEXT_PUBLIC_WORDPRESS_API_URL`
   - **Value**: `https://samuelsuiri.info/wp-json/wp/v2`

### Paso 4: Desplegar

1. Haz clic en **"Deploy site"**
2. Netlify comenzará el proceso de build y despliegue
3. Espera unos 2-3 minutos para que complete el despliegue
4. Una vez completado, recibirás una URL temporal como: `https://random-name.netlify.app`

### Paso 5: Configurar Dominio Personalizado (Opcional)

1. Ve a **"Domain settings"**
2. Haz clic en **"Add custom domain"**
3. Ingresa tu dominio deseado
4. Sigue las instrucciones para configurar los registros DNS

## 🔄 Opción 2: Despliegue con Netlify CLI

### Paso 1: Instalar Netlify CLI

```bash
npm install -g netlify-cli
```

### Paso 2: Login a Netlify

```bash
netlify login
```

### Paso 3: Inicializar el Sitio

Desde el directorio raíz del proyecto:

```bash
netlify init
```

Sigue las instrucciones interactivas:
- Selecciona **"Create & configure a new site"**
- Elige tu team
- Define un nombre de sitio (opcional)

### Paso 4: Configurar Variables de Entorno

```bash
netlify env:set NEXT_PUBLIC_WORDPRESS_API_URL "https://samuelsuiri.info/wp-json/wp/v2"
```

### Paso 5: Desplegar

```bash
# Para un despliegue de producción
netlify deploy --prod

# O para un despliegue de prueba
netlify deploy
```

## 🔧 Configuración de WordPress

Para asegurar que el sitio funcione correctamente, verifica la configuración de WordPress:

### 1. Verificar API REST

Visita esta URL en tu navegador:
```
https://samuelsuiri.info/wp-json/wp/v2/posts
```

Deberías ver una respuesta JSON con tus posts.

### 2. Configurar CORS (si es necesario)

Si el frontend tiene problemas para acceder a la API, agrega estos headers en WordPress.

**Opción A: En el archivo `.htaccess`:**

```apache
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
    Header set Access-Control-Allow-Headers "Content-Type, Authorization"
</IfModule>
```

**Opción B: En el archivo `wp-config.php`:**

```php
// Antes de "That's all, stop editing!"
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
```

**Opción C: Usando un plugin de WordPress:**

Instala y activa uno de estos plugins:
- **WP REST API Controller** 
- **REST API CORS Support**

### 3. Permalinks

Asegúrate de que los permalinks de WordPress estén configurados correctamente:
1. Ve a **Configuración** → **Enlaces permanentes**
2. Selecciona **"Nombre de entrada"** o cualquier opción excepto "Simple"
3. Guarda los cambios

## 🔄 Despliegue Automático (CI/CD)

Una vez conectado el repositorio a Netlify:

1. **Auto-despliegue**: Cada push a la rama `main` desplegará automáticamente
2. **Deploy previews**: Los Pull Requests generarán URLs de preview automáticas
3. **Branch deploys**: Puedes configurar otras ramas para auto-despliegue

Para configurar esto:
1. Ve a **Site settings** → **Build & deploy** → **Continuous deployment**
2. Configura las ramas y condiciones según tus necesidades

## 🔔 Webhooks de WordPress

Para que el sitio se actualice automáticamente cuando publicas contenido en WordPress:

### Paso 1: Obtener el Build Hook de Netlify

1. En Netlify, ve a **Site settings** → **Build & deploy** → **Build hooks**
2. Haz clic en **"Add build hook"**
3. Dale un nombre (ejemplo: "WordPress Update")
4. Selecciona la rama a desplegar (generalmente `main`)
5. Copia la URL del webhook generada

### Paso 2: Configurar en WordPress

**Opción A: Usando un Plugin**

1. Instala el plugin **"WP Webhooks"** o **"Netlify Builds"**
2. Configura el webhook con la URL copiada
3. Configura para que se dispare cuando:
   - Se publique un post
   - Se actualice un post
   - Se publique una página

**Opción B: Código personalizado**

Agrega esto al archivo `functions.php` de tu tema:

```php
function trigger_netlify_build() {
    $webhook_url = 'TU_WEBHOOK_URL_DE_NETLIFY';
    
    wp_remote_post($webhook_url, array(
        'method' => 'POST',
        'timeout' => 5,
    ));
}

// Trigger en publicación/actualización de posts
add_action('publish_post', 'trigger_netlify_build');
add_action('publish_page', 'trigger_netlify_build');
add_action('post_updated', 'trigger_netlify_build');
```

## 🎯 Optimizaciones Adicionales

### 1. Configurar Plugin de Next.js

El archivo `netlify.toml` ya incluye el plugin de Next.js, pero asegúrate de:

```bash
# Instalar el plugin en tu sitio de Netlify (solo una vez)
# Esto se hace desde la UI de Netlify:
# Site settings → Plugins → Add plugins → Next.js Runtime
```

### 2. Caché y Revalidación

El sitio usa Incremental Static Regeneration (ISR) con revalidación cada hora. Para ajustar:

```typescript
// En cualquier página (app/page.tsx, app/blog/page.tsx, etc.)
export const revalidate = 3600; // segundos (1 hora)
```

### 3. Monitoreo

Netlify proporciona:
- **Analytics**: Estadísticas de tráfico y performance
- **Logs**: Registros de build y funciones
- **Forms**: Si agregas formularios más adelante

## 🐛 Solución de Problemas

### Build falla en Netlify

**Problema**: Error de "Cannot find module"
**Solución**: 
```bash
# Elimina el cache en Netlify
# Site settings → Build & deploy → Clear cache and deploy site
```

**Problema**: Error de API WordPress
**Solución**: Verifica que la variable de entorno esté configurada correctamente

### Contenido no se actualiza

**Problema**: Los cambios en WordPress no aparecen
**Solución**: 
- Verifica que la revalidación ISR esté configurada
- Fuerza un nuevo despliegue desde Netlify
- Configura webhooks para auto-despliegue

### Imágenes no cargan

**Problema**: Las imágenes de WordPress no se muestran
**Solución**: 
- Verifica que `next.config.js` tenga el dominio en `images.domains`
- Asegúrate de que las imágenes en WordPress sean accesibles públicamente

### CORS errors

**Problema**: "CORS policy: No 'Access-Control-Allow-Origin' header"
**Solución**: Sigue las instrucciones de configuración CORS arriba

## 📊 Métricas de Éxito

Una vez desplegado, verifica:

- ✅ El sitio carga correctamente en la URL de Netlify
- ✅ Las publicaciones de WordPress se muestran
- ✅ Las imágenes cargan correctamente
- ✅ Los enlaces funcionan
- ✅ El sitio es responsive en móviles
- ✅ Los meta tags SEO están presentes

## 🔗 Enlaces Útiles

- [Documentación de Netlify](https://docs.netlify.com/)
- [Next.js + Netlify](https://docs.netlify.com/integrations/frameworks/next-js/)
- [WordPress REST API](https://developer.wordpress.org/rest-api/)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/)

## 📞 Soporte

Si tienes problemas:

1. Revisa los logs de build en Netlify
2. Verifica la consola del navegador para errores
3. Consulta la documentación oficial
4. Abre un issue en el repositorio de GitHub

---

¡Felicidades! Tu sitio Headless WordPress debería estar funcionando en Netlify 🎉
