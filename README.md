# El Mundo de Samuel Suiri

Portal web personal usando Headless WordPress + Netlify

## 🚀 Descripción

Este es un sitio web moderno que utiliza una arquitectura Headless CMS, consumiendo contenido de WordPress (https://samuelsuiri.info/) a través de su REST API y sirviéndolo mediante una aplicación Next.js desplegada en Netlify.

## 🏗️ Arquitectura

- **Frontend**: Next.js 14 con App Router
- **CMS**: WordPress Headless (API REST)
- **Deployment**: Netlify
- **Lenguaje**: TypeScript

## 📋 Características

- ✅ Consumo de contenido desde WordPress API
- ✅ Generación estática de páginas (SSG)
- ✅ Revalidación incremental (ISR)
- ✅ Diseño responsivo
- ✅ Optimización de imágenes
- ✅ SEO optimizado

## 🛠️ Desarrollo Local

### Requisitos Previos

- Node.js 20.x o superior
- npm 10.x o superior

### Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/MundoSuiri/El-Mundo-de-Samuel-Suiri.git
cd El-Mundo-de-Samuel-Suiri
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env.local
```

Edita `.env.local` si necesitas cambiar la URL de la API de WordPress:
```
NEXT_PUBLIC_WORDPRESS_API_URL=https://samuelsuiri.info/wp-json/wp/v2
```

4. Ejecutar el servidor de desarrollo:
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Build

Para crear una versión de producción:

```bash
npm run build
npm start
```

## 🚢 Despliegue en Netlify

### Opción 1: Despliegue Automático (Recomendado)

1. Haz fork o clona este repositorio
2. Conéctalo a tu cuenta de Netlify
3. Netlify detectará automáticamente la configuración desde `netlify.toml`
4. Configura las variables de entorno en Netlify:
   - `NEXT_PUBLIC_WORDPRESS_API_URL`: https://samuelsuiri.info/wp-json/wp/v2

### Opción 2: Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login a Netlify
netlify login

# Inicializar el sitio
netlify init

# Desplegar
netlify deploy --prod
```

## 📁 Estructura del Proyecto

```
.
├── app/                    # Next.js App Router
│   ├── blog/              # Páginas del blog
│   │   ├── [slug]/        # Página individual de post
│   │   └── page.tsx       # Listado de posts
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   └── globals.css        # Estilos globales
├── lib/                   # Utilidades y funciones
│   └── wordpress.ts       # Cliente de WordPress API
├── components/            # Componentes reutilizables
├── public/               # Archivos estáticos
├── .env.example          # Variables de entorno de ejemplo
├── .env.local            # Variables de entorno locales
├── .gitignore            # Archivos ignorados por Git
├── netlify.toml          # Configuración de Netlify
├── next.config.js        # Configuración de Next.js
├── tsconfig.json         # Configuración de TypeScript
└── package.json          # Dependencias del proyecto
```

## 🔧 Configuración de WordPress

Para que este frontend funcione correctamente, asegúrate de que tu instalación de WordPress:

1. Tenga la API REST habilitada (por defecto en WordPress 4.7+)
2. Permita solicitudes CORS si el dominio es diferente
3. Tenga instalados los plugins necesarios para exponer contenido adicional

### Headers CORS (si es necesario)

Agrega esto a tu `wp-config.php` o `.htaccess` en WordPress:

```php
// En wp-config.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
```

## 🌐 URLs del Sitio

- **Sitio WordPress Original**: https://samuelsuiri.info/
- **API WordPress**: https://samuelsuiri.info/wp-json/wp/v2
- **Nuevo Sitio (Netlify)**: Se configurará después del despliegue

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de código abierto.

## 📧 Contacto

Samuel Suiri - https://samuelsuiri.info/

## 🙏 Agradecimientos

- Next.js por el excelente framework
- WordPress por el potente CMS
- Netlify por el hosting y despliegue
