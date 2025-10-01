# Guía de Contribución

¡Gracias por tu interés en contribuir a El Mundo de Samuel Suiri! 

## 🚀 Cómo Contribuir

### 1. Fork y Clone

```bash
# Fork el repositorio en GitHub, luego:
git clone https://github.com/TU_USUARIO/El-Mundo-de-Samuel-Suiri.git
cd El-Mundo-de-Samuel-Suiri
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Crear una Rama

```bash
git checkout -b feature/mi-nueva-caracteristica
# o
git checkout -b fix/correccion-de-bug
```

### 4. Desarrollar

- Escribe código limpio y bien documentado
- Sigue las convenciones de código del proyecto
- Prueba tus cambios localmente con `npm run dev`
- Asegúrate de que el build funcione con `npm run build`

### 5. Commit

```bash
git add .
git commit -m "Descripción clara de los cambios"
```

Usa mensajes de commit descriptivos:
- `feat: agregar nueva característica X`
- `fix: corregir problema con Y`
- `docs: actualizar documentación`
- `style: mejorar estilos de Z`
- `refactor: refactorizar componente W`

### 6. Push y Pull Request

```bash
git push origin feature/mi-nueva-caracteristica
```

Luego crea un Pull Request en GitHub con:
- Título descriptivo
- Descripción de los cambios
- Screenshots si aplica (especialmente para cambios visuales)

## 📋 Áreas de Contribución

### Código
- Nuevas características
- Corrección de bugs
- Mejoras de rendimiento
- Optimización de código

### Diseño
- Mejoras de UI/UX
- Diseño responsive
- Accesibilidad

### Documentación
- Mejorar README
- Agregar comentarios al código
- Crear tutoriales
- Traducir documentación

### Testing
- Agregar tests
- Mejorar cobertura de tests

## 🎨 Estándares de Código

### TypeScript
- Usa tipos explícitos donde sea posible
- Evita el uso de `any`
- Documenta funciones complejas

### React/Next.js
- Usa componentes funcionales
- Aprovecha hooks cuando sea apropiado
- Mantén componentes pequeños y reutilizables

### CSS
- Usa clases descriptivas
- Mantén la consistencia con los estilos existentes
- Asegura diseño responsive

### Commits
- Un commit por cambio lógico
- Mensajes en español descriptivos
- Referencias a issues cuando aplique

## 🐛 Reportar Bugs

Si encuentras un bug:

1. Verifica que no haya sido reportado ya en [Issues](https://github.com/MundoSuiri/El-Mundo-de-Samuel-Suiri/issues)
2. Crea un nuevo issue con:
   - Descripción clara del problema
   - Pasos para reproducir
   - Comportamiento esperado vs actual
   - Screenshots si es relevante
   - Información del entorno (navegador, OS, etc.)

## 💡 Sugerir Características

Para sugerir nuevas características:

1. Abre un issue con la etiqueta `enhancement`
2. Describe claramente la característica
3. Explica por qué sería útil
4. Sugiere cómo podría implementarse

## ✅ Checklist antes de Enviar PR

- [ ] El código funciona localmente
- [ ] El build se completa sin errores (`npm run build`)
- [ ] Los cambios son mínimos y enfocados
- [ ] La documentación está actualizada si aplica
- [ ] Los commits tienen mensajes descriptivos
- [ ] El código sigue los estándares del proyecto

## 📞 Contacto

Si tienes preguntas, puedes:
- Abrir un issue
- Contactar al mantenedor del proyecto

## 🙏 Agradecimientos

¡Gracias por contribuir al proyecto!
