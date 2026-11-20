export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  clientName: string;
  category: 'Commercial Client' | 'Academic & Systems';
  collaboration: string;
  tags: string[];
  keyFeatures: string[];
  metricsOrHighlight: string;
  previewColor: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: 'Freelance' | 'Internship';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  location: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  type: 'Certification' | 'Workshop';
  description: string;
}

export const CANDIDATE = {
  name: "Nava Dharshini M",
  roleTitle: "Front-End Developer & UI Engineer",
  tagline: "Building modern, responsive, and accessible web experiences.",
  availability: "Available for Front-End Roles",
  location: "Sattur, Virudhunagar, Tamil Nadu, India",
  email: "navadharshini2004@gmail.com",
  phone: "+91 8148291212",
  phoneRaw: "8148291212",
  github: "https://github.com/Navadharshini-M",
  githubUsername: "Navadharshini-M",
  linkedin: "https://www.linkedin.com/in/navadharshini-m-76b3602ab",
  photoUrl: "/assets/nava_photo.png",
  photoFallback: "/assets/nava_photo_original.png",
  resumePdfUrl: "/Nava_Dharshini_Resume.pdf",
  bio: `Passionate Front-End Developer and B.Tech graduate in Artificial Intelligence & Data Science with hands-on experience building clean, responsive, and user-friendly web interfaces. Through collaborative freelance client engagements and industry internships, I transform complex business requirements into intuitive digital experiences using React.js, Tailwind CSS, and AI-assisted engineering workflows.`
};

export const SKILL_CATEGORIES = [
  {
    category: "Front-End Core",
    description: "Semantic, modern, and high-performance client-side interfaces",
    skills: [
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "React.js", level: "Advanced" }
    ]
  },
  {
    category: "Styling & Responsive Systems",
    description: "Design-system thinking, token management, and fluid responsive layouts",
    skills: [
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "CSS Flexbox", level: "Advanced" },
      { name: "CSS Grid", level: "Advanced" },
      { name: "Responsive Web Design", level: "Advanced" },
      { name: "Bootstrap", level: "Intermediate" }
    ]
  },
  {
    category: "Development Architecture",
    description: "Component-driven design, state handling, and client integration",
    skills: [
      { name: "React Hooks", level: "Advanced" },
      { name: "Component-Based Architecture", level: "Advanced" },
      { name: "Reusable Components", level: "Advanced" },
      { name: "REST API Integration (Axios)", level: "Proficient" },
      { name: "Props & State Management", level: "Advanced" },
      { name: "Front-End Debugging", level: "Proficient" }
    ]
  },
  {
    category: "Tools & Ecosystem",
    description: "Modern developer tooling, version control, and build setups",
    skills: [
      { name: "VS Code", level: "Proficient" },
      { name: "Git", level: "Proficient" },
      { name: "GitHub", level: "Proficient" },
      { name: "Vite", level: "Proficient" },
      { name: "npm", level: "Proficient" }
    ]
  },
  {
    category: "AI-Assisted Engineering",
    description: "Leveraging agentic AI tools to accelerate prototyping, code review, and debugging",
    skills: [
      { name: "Antigravity", level: "Proficient" },
      { name: "ChatGPT", level: "Proficient" },
      { name: "AI-Assisted UI Implementation", level: "Proficient" },
      { name: "AI-Assisted Debugging", level: "Proficient" }
    ]
  },
  {
    category: "Foundational & Data Skills",
    description: "Data-aware computing and backend database fundamentals",
    skills: [
      { name: "Python", level: "Proficient" },
      { name: "SQL (MySQL)", level: "Proficient" },
      { name: "MongoDB Basics", level: "Foundational" },
      { name: "Microsoft Excel", level: "Proficient" }
    ]
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "pokkisham",
    title: "Pokkisham Steel Doors",
    subtitle: "Commercial Architectural Security Solutions Website",
    clientName: "Pokkisham Steel Doors",
    category: "Commercial Client",
    collaboration: "Collaborative freelance partnership with a developer friend",
    url: "https://pokkisham-steel-doors.vercel.app/",
    description: "Modern web presence showcasing custom residential and commercial steel security doors, technical specifications, design catalogs, and direct inquiry channels.",
    keyFeatures: [
      "Responsive door catalog with high-resolution visual previews and architectural specifications",
      "Interactive specification breakdowns covering gauges, locking systems, and weatherproofing",
      "Clear call-to-action flows for customer inquiries, quote requests, and instant communication",
      "Optimized lightweight assets deployed on Vercel with zero layout shift"
    ],
    tags: ["React.js", "Tailwind CSS", "Vercel", "Responsive Web Design", "Client Project"],
    metricsOrHighlight: "Real client website actively deployed and serving customer inquiries",
    previewColor: "from-stone-900 to-zinc-800"
  },
  {
    id: "uyirsaaru",
    title: "Uyirsaaru",
    subtitle: "Traditional Cold-Pressed Fruit & Herbal Wellness Platform",
    clientName: "Sri Palaniyandavar Uyir Saaru",
    category: "Commercial Client",
    collaboration: "Collaborative freelance partnership with a developer friend",
    url: "https://uyirsaaru.com",
    description: "Direct-to-door fresh natural juice delivery platform highlighting 100% pure organic fruit extracts, nutritional information, and customer order booking.",
    keyFeatures: [
      "Bilingual typography and localized Tamil/English cultural branding for authentic audience connection",
      "Product collection browsing categorizing detox, immunity, and daily nutrition juices",
      "Direct door-step delivery order flows with responsive mobile navigation and clear contact CTAs",
      "Semantic HTML and clean UI structuring ensuring fast load times across mobile network conditions"
    ],
    tags: ["Web Architecture", "UI Design", "Responsive Layout", "Localization", "Client Project"],
    metricsOrHighlight: "Active commercial domain serving daily regional health beverage customers",
    previewColor: "from-emerald-900 to-green-950"
  },
  {
    id: "sarvamcare",
    title: "Sarvam Care Hospital",
    subtitle: "Multispeciality Healthcare Institution Digital Portal",
    clientName: "SarvamCare Hospital, Salem",
    category: "Commercial Client",
    collaboration: "Collaborative freelance partnership with a developer friend",
    url: "https://sarvamcarehospital.in",
    description: "Comprehensive medical services portal presenting advanced trauma care, neurosurgery, orthopaedics, diagnostic facilities, and doctor consultation inquiries.",
    keyFeatures: [
      "Clear visual hierarchy organizing emergency trauma units, clinical departments, and medical specialties",
      "Consultant doctor directory detailing qualifications, areas of clinical focus, and OPD schedules",
      "Prominent emergency ambulance contact integration and patient appointment inquiry mechanisms",
      "Accessible typography and high-contrast color structure meeting healthcare usability standards"
    ],
    tags: ["Healthcare UI", "Information Architecture", "Mobile First", "Client Project"],
    metricsOrHighlight: "Official live institutional website for a multispeciality hospital in Salem",
    previewColor: "from-teal-950 to-slate-900"
  }
];

export const SECONDARY_PROJECTS: ProjectItem[] = [
  {
    id: "nexpath",
    title: "NexPath — Career Guidance Web Application",
    subtitle: "Full-Stack Student Learning & Roadmap Platform",
    clientName: "Academic Project",
    category: "Academic & Systems",
    collaboration: "Independent development",
    url: "https://github.com/Navadharshini-M",
    description: "Full-stack educational platform built to guide students through career roadmaps, structured skill paths, and learning resources across engineering domains.",
    keyFeatures: [
      "Built responsive front-end interfaces using React.js with reusable card components",
      "Engineered Node.js/Express API backend with MongoDB for curated roadmap management",
      "Intuitive navigation for tracking student learning milestones and domain progression"
    ],
    tags: ["React.js", "Node.js", "Express", "MongoDB", "MERN Stack"],
    metricsOrHighlight: "Comprehensive student roadmap platform with end-to-end data integration",
    previewColor: "from-blue-950 to-indigo-900"
  },
  {
    id: "election-analytics",
    title: "Election Analytics: Voter Turnout & Issue Sentiment",
    subtitle: "Data-Driven Regional Sentiment Visualization Dashboard",
    clientName: "Academic Project",
    category: "Academic & Systems",
    collaboration: "Independent development",
    url: "https://github.com/Navadharshini-M",
    description: "Interactive web analytics platform analyzing citizen sentiment and regional voting trends using data processing models and dynamic visual charts.",
    keyFeatures: [
      "Built interactive dashboard UI using React connected to Flask REST endpoints",
      "Processed feedback datasets using Python Pandas and NumPy for classification",
      "Visualized regional participation trends and key issues through responsive Chart.js dashboards"
    ],
    tags: ["React", "Flask", "Python", "Pandas", "MongoDB", "Data Visualization"],
    metricsOrHighlight: "Full pipeline: Data cleaning, sentiment classification & interactive charts",
    previewColor: "from-purple-950 to-neutral-900"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2025-2026",
    role: "Freelance Front-End Developer",
    company: "Client Web Projects (Collaborative with Friend)",
    location: "Tamil Nadu, India",
    type: "Freelance",
    description: "Partnered collaboratively with a fellow developer to design, build, and deploy responsive client websites for local businesses and healthcare institutions.",
    achievements: [
      "Completed 3 live commercial client websites: Pokkisham Steel Doors, Uyirsaaru, and Sarvam Care Hospital.",
      "Translated client requirements into mobile-first, responsive, and accessible UI components.",
      "Employed modern AI-assisted engineering workflows (Antigravity & ChatGPT) to accelerate prototyping, verify cross-browser rendering, and debug styling edge-cases.",
      "Delivered clean semantic code structures and coordinated domain configuration and production deployments."
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML5/CSS3", "Vercel", "AI-Assisted Workflow"]
  },
  {
    period: "Dec 2024 – Jan 2025",
    role: "Web Development Intern",
    company: "Novanector Services Pvt. Ltd.",
    location: "Dehradun, India (Remote)",
    type: "Internship",
    description: "Completed an intensive 1-month full-stack web development internship focusing on practical front-end engineering, catalog management, and application workflows.",
    achievements: [
      "Engineered and deployed a functional online store with dynamic product catalog views.",
      "Implemented an interactive client-side shopping cart with real-time state updates.",
      "Strengthened hands-on skills in responsive design patterns and cross-device testing."
    ],
    technologies: ["Web Development", "JavaScript", "HTML5", "CSS3", "Product Cart Architecture"]
  },
  {
    period: "July 2024",
    role: "Mobile App Development Intern",
    company: "UpgradeNow Technologies",
    location: "Tamil Nadu, India",
    type: "Internship",
    description: "Completed an intensive 15-day technical internship focused on rapid application building with Microsoft Power Apps.",
    achievements: [
      "Developed a dynamic mobile application equipped with interactive UI components.",
      "Designed clean input forms, data-binding models, and user workflow validations.",
      "Gained foundational exposure to enterprise application UX, layout rhythm, and component hierarchy."
    ],
    technologies: ["Microsoft Power Apps", "Mobile UI Components", "Interactive UX", "Form Validation"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Tech – Artificial Intelligence & Data Science",
    institution: "PSR Engineering College",
    period: "2022 – 2026",
    score: "CGPA: 7.5 / 10",
    location: "Sivakasi / Sattur, Tamil Nadu",
    highlights: [
      "Rigorous coursework in Data Structures, Web Technologies, Database Management, and Machine Learning.",
      "Hands-on project work in full-stack web development, frontend frameworks, and analytical dashboards."
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "JavaScript Certification",
    issuer: "PORTALAM",
    type: "Certification",
    description: "Core JavaScript programming, DOM manipulation, asynchronous patterns, and modern ES6+ paradigms."
  },
  {
    title: "Chatbot using NLP",
    issuer: "NOVITECH",
    type: "Certification",
    description: "Natural Language Processing fundamentals, intent classification, and conversational interface implementation."
  },
  {
    title: "Embedded Systems Workshop",
    issuer: "Technical Academic Workshop",
    type: "Workshop",
    description: "Hands-on engineering workshop exploring hardware-software interfacing, microcontrollers, and sensor data."
  }
];

export const SOFT_SKILLS = [
  { name: "Problem Solving", desc: "Analytical mindset for diagnosing styling bugs, layout shifts, and interface state edge-cases." },
  { name: "Critical Thinking", desc: "Evaluating UX trade-offs between visual flair and accessibility, performance, and simplicity." },
  { name: "Team Collaboration", desc: "Proven track record collaborating with peers on client delivery and code reviews." },
  { name: "Adaptability", desc: "Quick to master new tooling, frameworks, CSS capabilities, and AI-accelerated workflows." },
  { name: "Time Management", desc: "Balancing client delivery milestones, academic coursework, and internship commitments." }
];

export const LANGUAGES = [
  { language: "English", proficiency: "Professional Working Proficiency" },
  { language: "Tamil", proficiency: "Native / Bilingual Proficiency" }
];
