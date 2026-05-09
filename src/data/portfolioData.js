// ==========================================
// DATA FILE - portfolioData.js
// Semua data konten website ada di sini
// Ubah data ini untuk kustomisasi website
// ==========================================

// ---- Data Pribadi ----
export const personalInfo = {
  name: "Raza Haan Fiddo Aryasturangga",
  // title: "Full Stack Developer",
  subtitle: "Membangun pengalaman digital sekaligus belajar dan berkembang",
  description: "Saya memiliki minat di bidang Frontend Development, Graphic Design, dan Data Analysis. Saya senang membuat tampilan digital yang modern, kreatif, dan informatif, serta terus mengembangkan kemampuan dalam teknologi, desain, dan pengolahan data.",
  email: "razahaanfiddo@gmail.com",
  phone: "+62 821-2593-1889",
  location: "Majalengka, Indonesia",
  cv: "/cv-razahaanfiddo.pdf",
  
  // Sosial Media
  social: {
    github: "https://github.com/aryapratama",
    linkedin: "https://linkedin.com/in/aryapratama",
    instagram: "https://instagram.com/aryapratama",
    tiktok: "https://tiktok.com/@aryapratama",
  }
};

// ---- Statistik / About ----
export const stats = [
  { number: "1+", label: "Tahun Pengalaman" },
  { number: "5+", label: "Project Selesai" },
  { number: "10+", label: "Klien Puas" },
  { number: "1+", label: "Award Diterima" },
];

// ---- Data Skills ----
export const skills = [
  {
    id: 1,
    name: "HTML5",
    icon: "FaHtml5",
    percentage: 95,
    color: "#E44D26",
    category: "Frontend"
  },
  {
    id: 2,
    name: "CSS3",
    icon: "FaCss3Alt",
    percentage: 90,
    color: "#264DE4",
    category: "Frontend"
  },
  {
    id: 3,
    name: "JavaScript",
    icon: "FaJs",
    percentage: 88,
    color: "#F0DB4F",
    category: "Frontend"
  },
  {
    id: 4,
    name: "React JS",
    icon: "FaReact",
    percentage: 85,
    color: "#61DAFB",
    category: "Frontend"
  },
  {
    id: 5,
    name: "Node.js",
    icon: "FaNodeJs",
    percentage: 78,
    color: "#339933",
    category: "Backend"
  },
  {
    id: 6,
    name: "MySQL",
    icon: "FaDatabase",
    percentage: 75,
    color: "#4479A1",
    category: "Database"
  },
  {
    id: 7,
    name: "Git",
    icon: "FaGitAlt",
    percentage: 85,
    color: "#F05032",
    category: "Tools"
  },
  {
    id: 8,
    name: "Tailwind CSS",
    icon: "SiTailwindcss",
    percentage: 88,
    color: "#06B6D4",
    category: "Frontend"
  },
];

// ---- Data Projects ----
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Platform belanja online modern dengan fitur cart, payment gateway, dan dashboard admin yang komprehensif.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tags: ["React", "Node.js", "MySQL", "Stripe"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/ecommerce",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplikasi manajemen tugas kolaboratif dengan real-time updates, drag & drop, dan integrasi tim.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
    tags: ["React", "Firebase", "Tailwind"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/taskmanager",
    featured: true,
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Dashboard analitik untuk monitoring performa akun sosial media dengan visualisasi data yang indah.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tags: ["React", "Chart.js", "API"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/dashboard",
    featured: false,
  },
  {
    id: 4,
    title: "Restaurant Booking System",
    description: "Sistem reservasi restoran online dengan manajemen meja, menu digital, dan notifikasi real-time.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
    tags: ["Node.js", "Express", "MySQL"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/restaurant",
    featured: false,
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description: "Aplikasi cuaca interaktif dengan visualisasi data meteorologi dan prediksi 7 hari ke depan.",
    image: "https://images.unsplash.com/photo-1504608524841-42584120d693?w=600&q=80",
    tags: ["React", "OpenWeather API", "CSS3"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/weather",
    featured: false,
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "Platform e-learning dengan fitur video streaming, quiz interaktif, dan sertifikasi otomatis.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80",
    tags: ["React", "Node.js", "MongoDB"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/lms",
    featured: false,
  },
];

// ---- Navigation Menu ----
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
