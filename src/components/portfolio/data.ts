export const links = {
  email: "mailto:gauravbalade@gmail.com",
  github: "https://github.com/gauravbalade",
  leetcode: "https://leetcode.com/u/gauravbalade/",
  linkedin: "https://linkedin.com/in/gaurav-balade-86bbb3321",
  resume: "/resume.pdf",
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
    repository: "https://github.com/gauravbalade/propertysetu",
    demo: "https://frontend-six-amber-63.vercel.app",
    tags: ["Academic project", "Payments: test mode"],
    stack: ["React", "Spring Boot", "MySQL", "JWT", "Razorpay (Test Mode)"],
    description:
      "An academic property application and document workflow, built with a React front end and a Spring Boot REST back end secured with JWT. Razorpay is integrated in test mode only — no real payments are processed.",
  },
  {
    title: "Barber Shop Website",
    tags: ["Academic team project"],
    stack: ["HTML", "CSS", "JavaScript"],
    description: "A website for a barber shop, built as part of an academic team using plain HTML, CSS and JavaScript.",
  },
  {
    title: "Bus Reservation System",
    tags: ["Academic team project"],
    stack: ["Python", "Django", "PostgreSQL"],
    description: "A bus reservation web application, built as part of an academic team with Django and a PostgreSQL database.",
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
