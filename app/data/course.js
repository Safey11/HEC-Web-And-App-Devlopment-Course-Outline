export const courseInfo = {
  name: "WebCraft Academy",
  tagline: "From zero to Full-Stack + AI Developer — one weekend at a time.",
  schedule: "Weekends only · Sat & Sun",
  sessionLength: "2–3 hours per session",
  level: "Complete beginners",
  goal: "Job-ready Full-Stack + Agentic AI Developer",
};

export const instructors = [
  {
    initials: "HZ", name: "Hafiz Zeeshan", role: "Head Instructor & Lead",
    bio: "The visionary behind WebCraft Academy. Leads overall curriculum, mentors instructors, and ensures every student leaves market-ready.",
    teaches: ["Course direction & strategy", "Advanced concept sessions", "Career & freelance mentorship", "Final project reviews"],
    accent: "var(--accent)", light: "var(--accent-light)",
  },
  {
    initials: "SA", name: "Saif", role: "Full-Stack & AI Instructor",
    bio: "Hands-on full-stack developer. Leads frontend, React, Next.js and the Agentic AI module. Makes complex topics click through live coding.",
    teaches: ["HTML, CSS & ES6+", "React & Next.js", "Agentic AI & LangChain", "Live coding & demos"],
    accent: "var(--blue)", light: "var(--blue-light)",
  },
  {
    initials: "AD", name: "Adnan", role: "Backend & DevOps Instructor",
    bio: "Backend specialist focused on Node.js, Express, MongoDB and PostgreSQL. Makes sure students can build and ship production-grade APIs.",
    teaches: ["Node.js & Express", "MongoDB & PostgreSQL", "REST APIs & Auth", "Deployment & DevOps"],
    accent: "var(--purple)", light: "var(--purple-light)",
  },
];

export const modules = [
  {
    id: 1, label: "Module 1", name: "Web Designing",
    duration: "2.5 Months", prereq: "Matric & Computer Familiarity",
    quizzes: ["HTML5", "CSS3"], icon: "🎨",
    accent: "#E24B4A", light: "#FCEBEB",
    sections: [
      {
        title: "Internet",
        topics: ["How Does The Internet Work", "What is HTTP?", "Domain Name & Hosting", "DNS & Browsers"],
      },
      {
        title: "HTML5",
        topics: ["Duckett Book — full chapters", "Semantic HTML & Accessibility", "Forms & Inputs"],
      },
      {
        title: "CSS3",
        topics: ["Duckett Book — full chapters", "CSS Animations (Animate.style)", "Media Queries (CSS-Tricks)", "Flexbox (CSS-Tricks)"],
      },
      {
        title: "Tools & Libraries",
        topics: ["Font Awesome", "Bootstrap", "Google Fonts", "Figma — Plugins, Developer Mode, Pixel Perfect UI", "Explore AI tools", "Web Accessibility"],
      },
      {
        title: "Deployment",
        topics: ["Netlify Hosting", "Git & Github Basics (GitHub Desktop)", "Domain & Hosting — Namecheap"],
      },
    ],
    hackathonGoal: "Design & deploy a pixel-perfect responsive website",
    tags: ["HTML5", "CSS3", "Figma", "Bootstrap", "Git", "Netlify"],
  },
  {
    id: 2, label: "Module 2", name: "Front-End Development",
    duration: "4.5 Months", prereq: "Module 1",
    quizzes: ["JS1 (Ch 1–20)", "JS2 (Ch 21–40)", "JS3 (Ch 41–60)", "JS4 (Ch 61–89)", "TypeScript", "Git"],
    icon: "⚡", accent: "#EF9F27", light: "#FAEEDA",
    sections: [
      {
        title: "JavaScript (89 chapters · 4 quizzes)",
        topics: ["Docs & Assignments", "Fetch API / AJAX", "Variable Scoping & Closure", "Template literals & Destructuring", "Default params, Rest & Spread", "Arrow functions & Enhanced object literals", "Iterators & For..of, Generators", "Modules, Map, Array methods", "Higher-order functions & Callbacks", "Promises & Async/Await", "Classes, Ternary, Optional chaining"],
      },
      {
        title: "TypeScript (1 quiz)",
        topics: ["TS Compiler & Type Annotations", "Interfaces & Classes", "Generics & Enums", "Type Inference & Union/Intersection", "Type Guards & Decorators"],
      },
      {
        title: "Advanced Github (1 quiz)",
        topics: ["Branches & Pull Requests", "PR Review & Merge", "Rebase & Cherry Pick"],
      },
      {
        title: "GSAP Animations",
        topics: ["Scroll & timeline animations", "Professional UI motion effects"],
      },
      {
        title: "Supabase",
        topics: ["Authentication — Email & Google", "Database & Storage"],
      },
      {
        title: "Certifications",
        topics: ["JavaScript by JetBrains"],
      },
    ],
    hackathonGoal: "Full frontend app with TypeScript + Supabase auth + GSAP animations",
    tags: ["JavaScript ES6+", "TypeScript", "GSAP", "Supabase", "Advanced Git"],
  },
  {
    id: 3, label: "Module 3", name: "Modern Front-End Development",
    duration: "3 Months", prereq: "Modules 1 & 2",
    quizzes: ["ReactJS"], icon: "⚛️",
    accent: "#06b6d4", light: "#ecfeff",
    sections: [
      {
        title: "Node Runtime & Package Managers",
        topics: ["npm & Yarn", "npx & scripts"],
      },
      {
        title: "ReactJS v19 (1 quiz)",
        topics: ["CRA & Vite setup", "Linters & Formatters", "Module Bundlers", "Context API", "Redux & RTK", "TanStack Query", "Zustand (Optional)", "Axios — API Integration"],
      },
      {
        title: "Styling",
        topics: ["Tailwind CSS v4", "Shadcn/UI"],
      },
      {
        title: "Authentication Strategies",
        topics: ["JWT, OAuth, Session-based auth"],
      },
      {
        title: "Web Security",
        topics: ["CORS & HTTPS", "Content Security Policy", "OWASP Security Risks"],
      },
      {
        title: "Next.js 15",
        topics: ["App Router & file-based routing", "Server vs Client Components", "SSR, SSG & ISR", "API Routes"],
      },
      {
        title: "Testing",
        topics: ["Playwright & Vitest"],
      },
      {
        title: "Certifications",
        topics: ["React Nanodegree", "Meta Front-End Developer"],
      },
    ],
    hackathonGoal: "Full Next.js app with auth, API integration, deployed to Vercel",
    tags: ["React v19", "Next.js 15", "Tailwind v4", "Shadcn", "Redux Toolkit", "TanStack Query"],
  },
  {
    id: 4, label: "Module 4", name: "Back-End App Development",
    duration: "4 Months", prereq: "Module 2",
    quizzes: ["NodeJS / Express", "MongoDB", "PostgreSQL"],
    icon: "🖥️", accent: "#1a6b4a", light: "#eaf4ef",
    sections: [
      {
        title: "NodeJS & ExpressJS (1 quiz)",
        topics: ["RESTful APIs — Architecture, Routes, CRUD", "Database Connection & Middleware", "Authentication & Protected Routes", "JWT & Bcrypt", "WebSocket & Socket.IO", "Cloudinary (file uploads)", "Redis & Node-cache", "Messaging Queue", "File System module"],
      },
      {
        title: "MongoDB (1 quiz)",
        topics: ["CRUD & Queries", "Mongoose schemas & Aggregation", "Indexing & Data validation"],
      },
      {
        title: "PostgreSQL (1 quiz)",
        topics: ["CRUD & Queries", "Relationships & Joins"],
      },
      {
        title: "Payment Integration",
        topics: ["Stripe", "PayPal"],
      },
      {
        title: "DevOps & Deployment",
        topics: ["Linux Basics", "Google Cloud deployment"],
      },
    ],
    hackathonGoal: "Full REST API with auth, DB, file uploads, payments — deployed live",
    tags: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Socket.IO", "Redis", "Stripe"],
  },
  {
    id: 5, label: "Module 5", name: "Agentic AI Development",
    duration: "2 Months", prereq: "Modules 3 & 4",
    quizzes: ["LangChain & Agents", "RAG & Vector DBs"],
    icon: "🤖", accent: "#7F77DD", light: "#EEEDFE",
    isNew: true,
    sections: [
      {
        title: "Python Fast-Track (2 weeks)",
        topics: ["Variables, functions, loops, classes", "pip, virtual environments, .env files", "Python for AI scripting"],
      },
      {
        title: "LLM APIs & Prompt Engineering",
        topics: ["OpenAI API & Groq API", "Streaming responses", "Chain-of-thought & ReAct prompting", "Few-shot & system prompts"],
      },
      {
        title: "LangChain",
        topics: ["Chains & Prompt Templates", "Memory & Conversation history", "Tool calling & Output parsers"],
      },
      {
        title: "LangGraph",
        topics: ["Nodes, Edges & State management", "ReAct agent pattern", "Human-in-the-loop workflows", "Multi-agent systems"],
      },
      {
        title: "RAG (Retrieval-Augmented Generation)",
        topics: ["Vector databases — ChromaDB & Pinecone", "Embedding models & Semantic search", "Document Q&A pipelines"],
      },
      {
        title: "AI Features in Web Apps",
        topics: ["AI chat in Next.js (Vercel AI SDK)", "Integrating Groq/OpenAI into Express APIs", "MCP — Model Context Protocol intro", "Streaming AI responses to frontend"],
      },
    ],
    hackathonGoal: "AI-powered full-stack product — AI tutor, resume analyzer, or smart dashboard",
    tags: ["Python", "LangChain", "LangGraph", "RAG", "Groq API", "OpenAI", "MCP"],
  },
  {
    id: 6, label: "Module 6", name: "Mobile App Development",
    duration: "1–2 Months", prereq: "Module 2",
    quizzes: ["React Native"], icon: "📱",
    accent: "#16a34a", light: "#f0fdf4",
    sections: [
      {
        title: "React Native",
        topics: ["CLI & Expo setup", "Core components & Styling", "Navigation (React Navigation)", "API calls & State management", "Device features — camera, storage, notifications", "Build & publish — iOS & Android"],
      },
    ],
    hackathonGoal: "Ship a real mobile app to the Play Store",
    tags: ["React Native", "Expo", "iOS", "Android"],
  },
];

export const outcomes = [
  "Build & deploy full MERN stack apps",
  "Write clean ES6+ & TypeScript",
  "Create REST APIs with Node & Express",
  "Design React & Next.js frontends",
  "Work with MongoDB & PostgreSQL",
  "Implement JWT & OAuth authentication",
  "Build AI agents with LangChain & LangGraph",
  "Add RAG pipelines to web apps",
  "Deploy mobile apps to iOS & Android",
  "Deploy to Vercel, Render & Google Cloud",
  "Build a freelance-ready portfolio",
  "Interview-ready with 6 live projects",
];

export const techStack = [
  { name: "HTML5",         module: 1, color: "#e34c26" },
  { name: "CSS3",          module: 1, color: "#264de4" },
  { name: "Figma",         module: 1, color: "#f24e1e" },
  { name: "Bootstrap",     module: 1, color: "#7952b3" },
  { name: "Git & GitHub",  module: 1, color: "#f05032" },
  { name: "JavaScript",    module: 2, color: "#f7df1e", dark: true },
  { name: "TypeScript",    module: 2, color: "#3178c6" },
  { name: "GSAP",          module: 2, color: "#88ce02", dark: true },
  { name: "Supabase",      module: 2, color: "#3ecf8e", dark: true },
  { name: "React v19",     module: 3, color: "#61dafb", dark: true },
  { name: "Next.js 15",    module: 3, color: "#171717" },
  { name: "Tailwind v4",   module: 3, color: "#38bdf8", dark: true },
  { name: "Redux Toolkit", module: 3, color: "#764abc" },
  { name: "TanStack Query",module: 3, color: "#ef4444" },
  { name: "Node.js",       module: 4, color: "#3c873a" },
  { name: "Express",       module: 4, color: "#444444" },
  { name: "MongoDB",       module: 4, color: "#47a248" },
  { name: "PostgreSQL",    module: 4, color: "#336791" },
  { name: "Socket.IO",     module: 4, color: "#010101" },
  { name: "Redis",         module: 4, color: "#dc382d" },
  { name: "Stripe",        module: 4, color: "#635bff" },
  { name: "Python",        module: 5, color: "#3776ab" },
  { name: "LangChain",     module: 5, color: "#1c3c3c" },
  { name: "LangGraph",     module: 5, color: "#7F77DD" },
  { name: "Groq API",      module: 5, color: "#f55036" },
  { name: "OpenAI API",    module: 5, color: "#10a37f" },
  { name: "React Native",  module: 6, color: "#61dafb", dark: true },
  { name: "Expo",          module: 6, color: "#000020" },
];
