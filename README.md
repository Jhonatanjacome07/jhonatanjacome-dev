# 🌐 Portafolio de Desarrollador 3D - Jhonatan Jacome

**Construido con React, TypeScript, GSAP, Three.js, y TailwindCSS**

Este es un portafolio de desarrollador completamente animado, interactivo y en 3D, diseñado para impresionar a clientes, reclutadores y gerentes de contratación. Es más que un portafolio—es una experiencia web construida con código de nivel de producción, animaciones basadas en scroll, y mejores prácticas del mundo real.

⚡ **Inspirado en sitios de nivel Awwwards** — construido con React (Vite), TypeScript, TailwindCSS, GSAP, React Three Fiber, y Drei.

---

## 📸 Vista Previa

<div align="center">
  <img src="./public/images/1.png" alt="Hero Section" width="800"/>
  <p><em>Loading</em></p>
</div>

<div align="center">
  <img src="./public/images/2.png" alt="Services" width="800"/>
  <p><em>Sección de Servicios con animaciones de scroll</em></p>
</div>

<div align="center">
  <img src="./public/images/3.png" alt="About" width="800"/>
  <p><em>Sección Sobre Mí con reveal de imagen</em></p>
</div>

<div align="center">
  <img src="./public/images/4.png" alt="Works" width="800"/>
  <p><em>Proyectos con overlays interactivos</em></p>
</div>

<div align="center">
  <img src="./public/images/5.png" alt="Contact Summary" width="800"/>
  <p><em>Contact Summary con marquees animados</em></p>
</div>

<div align="center">
  <img src="./public/images/6.png" alt="Contact" width="800"/>
  <p><em>Sección de Contacto</em></p>
</div>

---

## 🚀 Stack Tecnológico

| Tecnología | Descripción |
|------------|-------------|
| **React (Vite)** | Servidor de desarrollo rápido y bundling de producción |
| **TypeScript** | Tipado estático para código más robusto y mantenible |
| **Tailwind CSS** | Framework de utilidades para estilos de componentes |
| **GSAP** | Lógica de animación y movimiento basado en scroll |
| **Three.js** | Escenas 3D potenciadas por React Three Fiber |
| **Drei** | Helpers útiles para renderizado 3D |
| **Lenis** | Smooth scroll suave y natural |
| **React Scroll** | Navegación suave entre secciones |

---

## 📁 Características

- 🔥 **Hero Section 3D** con planeta animado y anillo dorado
- 🧩 **Navbar suave** con animaciones escalonadas de links
- 🎯 **Service Summary** con movimiento horizontal de palabras activado por scroll
- 🖼️ **Sección Works** con overlays hover y previews interactivos
- ✍️ **Sección About** con reveal de imagen clip-path + texto animado
- 🏁 **Contact Summary** basado en Marquee con CTA
- 💼 **Completamente responsive** y accesible en todos los tamaños de pantalla
- 🌍 **Contenido en Español** con arquitectura lista para i18n

---

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ instalado
- npm o yarn

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/Jhonatanjacome07/jhonatanjacome-dev.git

# Navegar al directorio
cd jhonatanjacome-dev

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 🛠️ Personalización

### Actualizar Contenido
- **Datos del portafolio**: Edita `/src/constants/index.ts`
- **Información personal**: Actualiza `aboutData` en constants
- **Proyectos**: Modifica el array `projects` con tus propios proyectos
- **Redes sociales**: Actualiza el array `socials`

### Modificar Escenas 3D
- **Modelo del planeta**: Edita `/src/components/Planet.tsx`
- **Configuración de la escena**: Ajusta `/src/sections/Hero.tsx`

### Estilos y Colores
- **Configuración de Tailwind**: `tailwind.config.js`
- **Fuentes personalizadas**: `/src/index.css`
- **Colores del tema**: Definidos en `@theme` en `index.css`

---

## 📂 Estructura del Proyecto

```
portafolio/
├── public/
│   ├── fonts/          # Fuentes Amiamie
│   ├── images/         # Imágenes del portafolio
│   ├── models/         # Modelos 3D (.glb)
│   └── videos/         # Videos de fondo
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── constants/      # Datos centralizados
│   ├── sections/       # Secciones principales
│   ├── App.tsx         # Componente principal
│   ├── index.css       # Estilos globales
│   └── main.tsx        # Punto de entrada
└── package.json
```

---

## 🎨 Secciones del Portafolio

### 1. **Hero**
- Planeta 3D interactivo con Three.js
- Animaciones GSAP de entrada
- Texto animado con SplitText

### 2. **Services**
- Cards con efecto sticky scroll
- Animaciones de clip-path
- Diseño responsive

### 3. **About**
- Imagen con reveal animado
- Contenido dinámico desde constants
- Stack tecnológico categorizado

### 4. **Works**
- Grid de proyectos interactivo
- Preview flotante en hover (desktop)
- Links a repositorios de GitHub

### 5. **Contact Summary**
- Marquees animados con GSAP
- Efecto pin con ScrollTrigger
- Call-to-action destacado

### 6. **Contact**
- Información de contacto
- Links a redes sociales
- Marquee inferior animado

---

## 🚧 Próximas Características

- [ ] Sistema de internacionalización (i18n) - Español/Inglés
- [ ] Blog integrado


---

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

---

## 🤝 Contribuciones

Este es un proyecto personal, pero sugerencias y feedback son bienvenidos. Siéntete libre de abrir un issue o contactarme directamente.

---

## 📧 Contacto

- **Email**: jhonatanjacome99@gmail.com
- **LinkedIn**: [Jhonatan Jacome](https://www.linkedin.com/in/jhonatan-jacome-/)
- **GitHub**: [@Jhonatanjacome07](https://github.com/Jhonatanjacome07)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

<div align="center">
  <p>Hecho con ❤️ por Jhonatan Jacome</p>
  <p>⚡ Inspirado en sitios de nivel Awwwards</p>
</div>
