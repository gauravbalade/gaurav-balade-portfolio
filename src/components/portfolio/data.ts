export const links = {
  email: "mailto:gauravbalade@gmail.com",
  github: "https://github.com/gauravbalade",
  leetcode: "https://leetcode.com/u/gauravbalade/",
  linkedin: "https://linkedin.com/in/gaurav-balade-86bbb3321",
  resume: "#resume",
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const projects = [
  {
    title: "PropertySetu",
    tags: ["Academic project", "Payments: test mode"],
    stack: ["React", "Spring Boot", "MySQL", "JWT", "Razorpay (Test Mode)"],
    description:
      "An academic property application and document workflow system. Users submit property applications, upload documents and track status, with JWT-secured REST APIs and Razorpay integrated in test mode only.",
  },
  {
    title: "Barber Shop Website",
    tags: ["Academic team project"],
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "A responsive website for a barber shop presenting services, pricing and booking information, built as a team with vanilla web technologies.",
  },
  {
    title: "Bus Reservation System",
    tags: ["Academic team project"],
    stack: ["Python", "Django", "PostgreSQL"],
    description:
      "A web-based reservation system for searching routes and booking seats, built with Django and a PostgreSQL relational schema.",
  },
];

export const skills = [
  { group: "Languages", items: ["Java", "JavaScript", "Python", "C", "C++", "SQL"] },
  { group: "Frontend", items: ["React", "HTML", "CSS"] },
  { group: "Backend", items: ["Spring Boot", "REST APIs", "Spring Data JPA", "Spring Security", "JWT"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL"] },
  { group: "Tools", items: ["Git", "GitHub", "Eclipse", "VS Code", "Postman", "Vercel"] },
  { group: "Fundamentals", items: ["OOP", "DSA", "DBMS"] },
];

export const education = [
  { school: "Datta Meghe College of Engineering (DMCE)", detail: "B.E. Computer Engineering", years: "2023 – 2027" },
  { school: "Narayana Junior College", detail: "HSC Science (PCM)", years: "2021 – 2023" },
];

export const achievements = [
  "Unstop Talent Park 2025 — Round 1 winner",
  "Hacktoberfest 2024 — Level 4 participant badge",
  "ENSPIRE’26 Ideathon — participant",
  "Former member, CSI-CATT",
];

export const certifications = [
  "Google Cloud — Prompt Design in Vertex AI",
  "JavaScript training — CSI-CATT",
  "AWS — S3 Basics",
];
