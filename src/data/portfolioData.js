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
    github: "https://github.com/Fiddo0",
    linkedin: "https://www.linkedin.com/in/raza-haan-fiddo-baab22293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/razaayst?igsh=MWR3cmFlNjVpdHB3Zw==",
    tiktok: "",
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
    percentage: 50,
    color: "#F0DB4F",
    category: "Frontend"
  },
  {
    id: 4,
    name: "React JS",
    icon: "FaReact",
    percentage: 30,
    color: "#61DAFB",
    category: "Frontend"
  },
  {
    id: 5,
    name: "Python",
    icon: "FaPython",
    percentage: 65,
    color: "#4479A1",
    category: "Backend"
  },
  {
    id: 6,
    name: "Microsoft Excel",
    icon: "FaFileExcel",
    percentage: 60,
    color: "#34c22a",
    category: "Office"
  },
  {
    id: 7,
    name: "Git",
    icon: "FaGitAlt",
    percentage: 60,
    color: "#F05032",
    category: "Tools"
  },
  {
    id: 8,
    name: "Tailwind CSS",
    icon: "SiTailwindcss",
    percentage: 30,
    color: "#06B6D4",
    category: "Frontend"
  },
];

// ---- Data Projects ----
export const projects = [
  {
    id: 1,
    title: "E-Learning Platform",
    description: "Platform pembelajaran interaktif untuk meningkatkan pengetahuan, keterampilan, dan pengalaman belajar secara efektif.",
    image: "/guru_kita.png",
    tags: ["React", "Node.js", "MySQL",],
    demo: "https://demo.example.com",
    github: "https://github.com/example/ecommerce",
    featured: true,
  },
  {
    id: 2,
    title: "Travel Website",
    description: "Menghadirkan layanan perjalanan terbaik untuk kenyamanan dan pengalaman liburan Anda.",
    image: "/travel_web.png",
    tags: ["React", "mMy Sql", "Tailwind"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/taskmanager",
    featured: true,
  },
  {
    id: 3,
    title: "Majalengka Travel Website",
    description: "Temukan pesona alam, budaya, dan wisata terbaik Majalengka dalam satu perjalanan.",
    image: "/majvel.png",
    tags: ["React", "Chart.js", "API"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/dashboard",
    featured: false,
  },
  {
    id: 4,
    title: "Restaurant Foods Website",
    description: "Temukan hidangan favorit Anda dengan rasa autentik dan kualitas terbaik.",
    image: "/foods_website.png",
    tags: ["Node.js", "Express", "MySQL"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/restaurant",
    featured: false,
  },
  {
    id: 5,
    title: "Data Management Web",
    description: "Sistem manajemen data yang membantu pengelolaan informasi menjadi lebih cepat, rapi, dan efisien.",
    image: "/cooming-soon.jpg",
    tags: ["React", "OpenWeather API", "CSS3"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/weather",
    featured: false,
  },
  {
    id: 6,
    title: "PromptUMKM Website",
    description: "Ubah cerita produk UMKM jadi prompt visual yang menarik dan efektif untuk meningkatkan penjualan.",
    image: "/PromptUMKM.png",
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
