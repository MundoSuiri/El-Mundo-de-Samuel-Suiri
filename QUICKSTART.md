# 🚀 Guía de Inicio Rápido

Esta guía te ayudará a tener el sitio funcionando en minutos.

## ⚡ Inicio Rápido

### 1. Clonar e Instalar

```bash
git clone https://github.com/MundoSuiri/El-Mundo-de-Samuel-Suiri.git
cd El-Mundo-de-Samuel-Suiri
npm install
```

### 2. Configurar

```bash
cp .env.example .env.local
```

El archivo `.env.local` ya contiene la configuración por defecto:
```
NEXT_PUBLIC_WORDPRESS_API_URL=https://samuelsuiri.info/wp-json/wp/v2
```

### 3. Ejecutar

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) 🎉

## 🔧 Comandos Disponibles

```bash
# Desarrollo local
npm run dev

# Crear build de producción
npm run build

# Ejecutar build de producción
npm start

# Exportar sitio estático
npm run export
```

## 📦 Despliegue en Netlify

### Opción Rápida: Un Click

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/MundoSuiri/El-Mundo-de-Samuel-Suiri)

### Opción Manual:

1. Haz fork del repositorio
2. Ve a [Netlify](https://app.netlify.com/)
3. Click en "Add new site" → "Import an existing project"
4. Selecciona tu fork
5. Configura la variable de entorno:
   - `NEXT_PUBLIC_WORDPRESS_API_URL`: `https://samuelsuiri.info/wp-json/wp/v2`
6. ¡Deploy!

Para más detalles, consulta [DEPLOYMENT.md](DEPLOYMENT.md)

## 🎯 Estructura del Proyecto

```
.
├── app/                    # Páginas Next.js (App Router)
│   ├── blog/              # Blog y posts individuales
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   └── globals.css        # Estilos globales
├── lib/                   # Utilidades
│   └── wordpress.ts       # API de WordPress
├── public/               # Archivos estáticos
└── netlify.toml          # Config de Netlify
```

## 🔗 URLs Importantes

- **Desarrollo**: http://localhost:3000
- **WordPress API**: https://samuelsuiri.info/wp-json/wp/v2
- **Documentación completa**: [README.md](README.md)
- **Guía de despliegue**: [DEPLOYMENT.md](DEPLOYMENT.md)

## ❓ Problemas Comunes

### "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Puerto 3000 en uso
```bash
# Usar otro puerto
PORT=3001 npm run dev
```

### Build falla
```bash
# Limpiar cache
rm -rf .next
npm run build
```

## 📚 Recursos

- [Documentación de Next.js](https://nextjs.org/docs)
- [WordPress REST API](https://developer.wordpress.org/rest-api/)
- [Documentación de Netlify](https://docs.netlify.com/)

## 🤝 Necesitas Ayuda?

- 📖 Lee la [documentación completa](README.md)
- 🐛 Reporta [issues en GitHub](https://github.com/MundoSuiri/El-Mundo-de-Samuel-Suiri/issues)
- 💬 Revisa las [discusiones](https://github.com/MundoSuiri/El-Mundo-de-Samuel-Suiri/discussions)

---

¡Feliz desarrollo! 🎉
