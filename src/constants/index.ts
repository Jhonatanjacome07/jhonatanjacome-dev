export interface ServiceItem {
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  items: ServiceItem[];
}

export interface Framework {
  id: number;
  name: string;
}
export interface Project {
  id: number;
  name: string;
  description: string;
  href: string;
  image: string;
  bgImage: string;
  frameworks: Framework[];
}

export interface Social {
  name: string;
  href: string;
}

// ============================================
// TIPOS - ABOUT SECTION
// ============================================

export interface TechCategory {
  category: string;
  technologies: string;
}

export interface Hobby {
  emoji: string;
  textES: string;
  textEN: string;
}

export interface FeaturedProject {
  name: string;
  descriptionES: string;
  descriptionEN: string;
}

export interface AboutData {
  headerTextES: string;
  headerTextEN: string;
  introES: string;
  introEN: string;
  featuredProject: FeaturedProject;
  techStack: TechCategory[];
  hobbiesLabelES: string;
  hobbiesLabelEN: string;
  hobbies: Hobby[];
}


// ============================================
// DATOS - SERVICIOS
// ============================================

export const servicesData: Service[] = [
  {
    title: "IA & Automatización",
    description:
      "Transformo operaciones empresariales mediante inteligencia artificial y automatización. Diseño chatbots conversacionales, voicebots y flujos automatizados que resuelven desafíos complejos y generan impacto medible.",
    items: [
      {
        title: "Agentes de IA Conversacionales",
        description: "(Chatbots, Voicebots, Personalización con IA)",
      },
      {
        title: "Automatización de Procesos",
        description: "(n8n, Make, Zapier, Flujos de datos)",
      },
      {
        title: "Integración de Sistemas",
        description: "(CRMs: Kommo/HubSpot, APIs, Calendly)",
      },
    ],
  },
  {
    title: "Desarrollo Full Stack",
    description:
      "Creo soluciones web completas y eficientes con React, TypeScript y Laravel. Especializado en arquitectura escalable, autenticación robusta y bases de datos optimizadas para aplicaciones de alto rendimiento.",
    items: [
      {
        title: "Backend con Laravel & PHP",
        description: "(APIs REST, Autenticación, Notificaciones en tiempo real)",
      },
      {
        title: "Frontend Moderno",
        description: "(React, TypeScript, Next.js, Tailwind CSS)",
      },
      {
        title: "Bases de Datos",
        description: "(PostgreSQL, MySQL, Diseño y optimización)",
      },
    ],
  },
  {
    title: "Desarrollo Frontend Especializado",
    description:
      "Interfaces responsive y pixel-perfect que los usuarios aman. Domino React con TypeScript, componentes reutilizables con shadcn/ui, y animaciones fluidas con GSAP para experiencias web premium.",
    items: [
      {
        title: "React + TypeScript",
        description: "(Componentes tipados, Hooks, Context API)",
      },
      {
        title: "UI/UX Moderno",
        description: "(Tailwind CSS, shadcn/ui, Diseño responsive)",
      },
      {
        title: "Animaciones Premium",
        description: "(GSAP, Framer Motion, Micro-interacciones)",
      },
    ],
  },
  {
    title: "Gestión de Proyectos & Análisis",
    description:
      "Liderazgo técnico con enfoque en resultados. Experiencia en análisis estratégico, documentación técnica, y coordinación de equipos ágiles para entregar soluciones de alto impacto.",
    items: [
      {
        title: "Project Management",
        description: "(Metodologías ágiles, Deadlines, Code reviews)",
      },
      {
        title: "Análisis de Requerimientos",
        description: "(Documentación técnica, Inteligencia de negocios)",
      },
      {
        title: "Dashboards & KPIs",
        description: "(Monitoreo de resultados, Optimización continua)",
      },
    ],
  },
];

// ============================================
// DATOS - PROYECTOS
// ============================================

export const projects: Project[] = [
  {
    id: 1,
    name: "NeonFlux",
    description:
      "Landing page moderna desarrollada con React 18, TypeScript, Tailwind CSS v3.4 y Vite. Integra elementos 3D con React Three Fiber y animaciones con Framer Motion.",
    href: "https://github.com/Jhonatanjacome07/neonflux",
    image: "/assets/projects/NeonFlux.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Vite" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "Three.js" },
    ],
  },
  {
    id: 2,
    name: "Nexus Learn - AI-Powered Learning Platform",
    description:
      "ATransforma tu aprendizaje con compañeros virtuales personalizados impulsados por IA. Estudia Matemáticas, Ciencias, Idiomas y más.",
    href: "https://github.com/Jhonatanjacome07/safesolutionssaas",
    image: "/assets/projects/NexusLearn.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Next.js" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "Shadcn UI" },
      { id: 6, name: "Clerk" },
      { id: 7, name: "Vapi" },
    ],
  },
  {
    id: 3,
    name: "NAR25 CSC - Sitio Web Profesional de Pistolas R25",
    description:
      "Experiencia web inmersiva para productos R25 NA CSC, inspirada en Spylt y potenciada por animaciones GSAP.",
    href: "https://github.com/Jhonatanjacome07/NAR25-CSC",
    image: "/assets/projects/R25NS.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Vite" },
      { id: 3, name: "GSAP" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 4,
    name: "Safe Mobility",
    description:
      "Landing page experimental enfocada en micro-interacciones y animaciones fluidas para mejorar la UX/UI",
    href: "https://github.com/Jhonatanjacome07/animate-website",
    image: "/assets/projects/SafeMobility.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "GSAP" },
      { id: 5, name: "Vite" },
    ],
  },
  {
    id: 5,
    name: "Sound Bit",
    description:
      "Soundbit es un innovador reproductor de música 8D diseñado para sumergirte en una experiencia auditiva única.",
    href: "https://github.com/No-Country-simulation/equipo-s19-06-m-webapp",
    image: "/assets/projects/Soundbit.png",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "Zod 3" },
      { id: 5, name: "TypeScript" },
      { id: 6, name: "Java 21" },
      { id: 7, name: "Spring Boot" },
      { id: 8, name: "MySQL Driver" },
    ],
  },
  {
    id: 6,
    name: "VidSum",
    description:
      "VidSum: Plataforma SaaS para resumir y analizar videos de YouTube con IA. Arquitectura híbrida construida con Next.js 14, Laravel 11, PostgreSQL y automatización con n8n + Gemini..",
    href: "https://github.com/Jhonatanjacome07/resumidor-yt-ia",
    image: "/assets/projects/VidSum.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "Shadcn UI" },
      { id: 4, name: "PostgreSQL" },
      { id: 5, name: "n8n" },
      { id: 6, name: "Gemini" },
      { id: 7, name: "Laravel" },
      { id: 8, name: "Lemon Squeezy" },
    ],
  },
];

// ============================================
// DATOS - ABOUT SECTION
// ============================================

export const aboutData: AboutData = {
  headerTextES: `Ingeniero de Software apasionado por crear soluciones escalables
    Desarrollo aplicaciones web de alto rendimiento
    desde el prototipo hasta producción`,
  headerTextEN: `Software Engineer passionate about building scalable solutions
    I develop high-performance web applications
    from prototype to production`,
  introES: `Especializado en construir aplicaciones rápidas e intuitivas—desde interfaces React pixel-perfect hasta backends robustos con Laravel. Cada línea de código es una promesa: calidad que los usuarios sienten.`,
  introEN: `Specialized in building fast, intuitive applications—from pixel-perfect React interfaces to robust Laravel backends. Every line of code is a promise: quality that users feel.`,
  featuredProject: {
    name: "Nexus Learn",
    descriptionES: `Plataforma SaaS de aprendizaje impulsada por IA que revoluciona la educación con compañeros virtuales personalizados. Aprende Matemáticas, Ciencias, Idiomas y más a través de conversaciones interactivas por voz o chat.`,
    descriptionEN: `AI-powered learning SaaS platform that revolutionizes education with personalized virtual companions. Learn Math, Science, Languages and more through interactive voice or chat conversations.`,
  },
  techStack: [
    {
      category: "Frontend",
      technologies: "React, TypeScript, Tailwind CSS",
    },
    {
      category: "Backend",
      technologies: "Laravel, PHP, Node.js",
    },
    {
      category: "Automatización & IA",
      technologies: "n8n, Gemini, Chatwoot",
    },
    {
      category: "Bases de Datos",
      technologies: "PostgreSQL, MySQL, Supabase",
    },
    {
      category: "DevOps & Tools",
      technologies: "Vercel, Git, GitHub, Postman, Clerk",
    },
  ],
  hobbiesLabelES: "Cuando no estoy programando estoy:",
  hobbiesLabelEN: "When I'm not coding:",
  hobbies: [
    {
      emoji: "🌲",
      textES: "Caminando en la naturaleza",
      textEN: "Walking in nature",
    },
    {
      emoji: "📚",
      textES: "Leyendo sobre psicología",
      textEN: "Reading about psychology",
    },
    {
      emoji: "🤖",
      textES: "Explorando nuevas herramientas de IA",
      textEN: "Exploring new AI tools",
    },
  ],
};

// ============================================
// DATOS - REDES SOCIALES
// ============================================


export const socials: Social[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jhonatan-jacome-/",
  },
  {
    name: "GitHub",
    href: "https://github.com/Jhonatanjacome07",
  },
];

// ============================================
// TIPOS - TECH STACK SECTION
// ============================================

export interface Technology {
  name: string;
  icon: string; // Iconify icon name
  color: string; // Brand color for hover effect
}

export interface TechStackCategory {
  categoryES: string;
  categoryEN: string;
  technologies: Technology[];
}

// ============================================
// DATOS - TECH STACK
// ============================================

export const techStackData: TechStackCategory[] = [
  {
    categoryES: "Frontend",
    categoryEN: "Frontend",
    technologies: [
      { name: "JavaScript", icon: "logos:javascript", color: "#F7DF1E" },
      { name: "TypeScript", icon: "logos:typescript-icon", color: "#3178C6" },
      { name: "React", icon: "logos:react", color: "#61DAFB" },
      { name: "Next.js", icon: "logos:nextjs-icon", color: "#000000" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", color: "#38B2AC" },
      { name: "HTML5", icon: "logos:html-5", color: "#E34F26" },
      { name: "CSS3", icon: "logos:css-3", color: "#1572B6" },
      { name: "Bootstrap", icon: "logos:bootstrap", color: "#7952B3" },
      { name: "Shadcn/ui", icon: "simple-icons:shadcnui", color: "#000000" },
      { name: "GSAP", icon: "logos:greensock-icon", color: "#88CE02" },
      { name: "Framer Motion", icon: "logos:framer", color: "#0055FF" },
      { name: "Lenis", icon: "simple-icons:scrollreveal", color: "#FF6B6B" },
    ],
  },
  {
    categoryES: "Backend & Bases de Datos",
    categoryEN: "Backend & Databases",
    technologies: [
      { name: "PHP", icon: "logos:php", color: "#777BB4" },
      { name: "Laravel", icon: "logos:laravel", color: "#FF2D20" },
      { name: "Node.js", icon: "logos:nodejs-icon", color: "#339933" },
      { name: "Java", icon: "logos:java", color: "#ED8B00" },
      { name: "PostgreSQL", icon: "logos:postgresql", color: "#336791" },
      { name: "MySQL", icon: "logos:mysql", color: "#4479A1" },
      { name: "Supabase", icon: "logos:supabase-icon", color: "#3ECF8E" },
    ],
  },
  {
    categoryES: "IA & Automatización",
    categoryEN: "AI & Automation",
    technologies: [
      { name: "n8n", icon: "simple-icons:n8n", color: "#EA4B71" },
      { name: "Flowise", icon: "simple-icons:flowise", color: "#6366F1" },
      { name: "Gemini", icon: "simple-icons:googlegemini", color: "#8E75B2" },
      { name: "ChatGPT", icon: "simple-icons:openai", color: "#74aa9c" },
      { name: "Retell AI", icon: "simple-icons:ai", color: "#FF6B9D" },
      { name: "Vapi", icon: "simple-icons:v", color: "#00D9FF" },
      { name: "Chatwoot", icon: "simple-icons:chatwoot", color: "#1F93FF" },
    ],
  },
  {
    categoryES: "Cloud & Deployment",
    categoryEN: "Cloud & Deployment",
    technologies: [
      { name: "Vercel", icon: "logos:vercel-icon", color: "#000000" },
      { name: "Netlify", icon: "logos:netlify-icon", color: "#00C7B7" },
      { name: "Railway", icon: "simple-icons:railway", color: "#0B0D0E" },
      { name: "Digital Ocean", icon: "logos:digital-ocean", color: "#0080FF" },
      { name: "Contabo", icon: "simple-icons:contabo", color: "#FF6600" },
      { name: "Hostinger", icon: "simple-icons:hostinger", color: "#673DE6" },
      { name: "Cloudinary", icon: "logos:cloudinary-icon", color: "#3448C5" },
    ],
  },
  {
    categoryES: "Herramientas & Diseño",
    categoryEN: "Tools & Design",
    technologies: [
      { name: "Git", icon: "logos:git-icon", color: "#F05032" },
      { name: "GitHub", icon: "logos:github-icon", color: "#181717" },
      { name: "VS Code", icon: "logos:visual-studio-code", color: "#007ACC" },
      { name: "Postman", icon: "logos:postman-icon", color: "#FF6C37" },
      { name: "Figma", icon: "logos:figma", color: "#F24E1E" },
      { name: "Eclipse", icon: "logos:eclipse-icon", color: "#2C2255" },
      { name: "Clerk", icon: "simple-icons:clerk", color: "#6C47FF" },
    ],
  },
];
