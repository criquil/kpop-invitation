# KPop Demon Hunters - Invitación Digital

Invitación interactiva para la fiesta de cumpleaños de Arya, la nueva integrante de Las HUNTR/X.

## 🚀 Instalación

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn
- Git

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/criquil/kpop-invitation.git
cd kpop-invitation
```

2. **Instalar dependencias**
```bash
npm install
```

## 💻 Desarrollo Local

### Iniciar el servidor de desarrollo
```bash
npm run dev
```

Esto iniciará el servidor de desarrollo en `http://localhost:5173` (o el puerto disponible).

### Comandos disponibles

- `npm run dev` - Inicia el servidor de desarrollo con hot-reload
- `npm run build` - Compila el proyecto para producción
- `npm run preview` - Previsualiza la versión de producción localmente
- `npm run lint` - Ejecuta el linter para verificar el código

## 🌐 Despliegue en GitHub Pages

### Configuración inicial (solo una vez)

1. **Crear repositorio en GitHub**
   - Ve a [GitHub](https://github.com/new)
   - Crea un nuevo repositorio (ej: `kpop-invitation`)
   - **No** inicialices con README, .gitignore o licencia

2. **Configurar el repositorio remoto**
```bash
git remote add origin https://github.com/TU_USUARIO/kpop-invitation.git
git branch -M main
git push -u origin main
```

### Desplegar cambios

Cada vez que quieras actualizar la página publicada:

```bash
# 1. Guardar cambios
git add .
git commit -m "Descripción de los cambios"

# 2. Subir a GitHub
git push origin main

# 3. Desplegar a GitHub Pages
npm run deploy
```

El sitio estará disponible en: `https://TU_USUARIO.github.io/kpop-invitation/`

### Despliegue rápido (un solo comando)

En PowerShell, ejecuta los comandos por separado:
```powershell
git add .
git commit -m "Update"
git push origin main
npm run deploy
```

## 📁 Estructura del Proyecto

```
kpop-invitation/
├── public/              # Archivos estáticos (imágenes, audio)
│   ├── logoHuntrix.png
│   ├── kpopDH.webp
│   ├── golden.mp3
│   └── ...
├── src/
│   ├── KPopDemonHunterInvitation.tsx  # Componente principal
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts       # Configuración de Vite
└── README.md
```

## 🎨 Personalización

### Cambiar textos
Edita el archivo `src/KPopDemonHunterInvitation.tsx` y busca las secciones con el texto que deseas modificar.

### Cambiar imágenes
Reemplaza los archivos en la carpeta `public/` manteniendo los mismos nombres, o actualiza las rutas en el código.

### Cambiar música
Reemplaza el archivo `public/golden.mp3` con tu audio preferido (formato MP3).

## 🛠️ Tecnologías Utilizadas

- **React 19** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **Lucide React** - Iconos
- **gh-pages** - Despliegue en GitHub Pages

## 📝 Notas

- El sitio está optimizado para dispositivos móviles y desktop
- La música se reproduce automáticamente después de la interacción del usuario
- Los personajes se ajustan automáticamente según el tamaño de pantalla

## 🐛 Solución de Problemas

### El sitio no se actualiza en GitHub Pages
- Espera 2-3 minutos después del despliegue
- Limpia la caché del navegador (Ctrl + Shift + R)
- Verifica que el repositorio tenga GitHub Pages habilitado en Settings

### Error al ejecutar npm run dev
- Asegúrate de haber ejecutado `npm install`
- Verifica que estés usando Node.js 18 o superior: `node --version`

### Las imágenes no se cargan
- Verifica que los archivos estén en la carpeta `public/`
- Asegúrate de que las rutas comiencen con `./` (ej: `./logoHuntrix.png`)

## 📄 Licencia

Este proyecto es de uso personal para la celebración del cumpleaños de Arya.

---

¡Disfruta de la fiesta! 🎉✨
