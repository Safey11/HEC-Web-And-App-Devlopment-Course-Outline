export const courseInfo = {
  name: "HEC (Hafiz Education Center)",
  tagline: "From zero to Full Stack Developer. One weekend at a time.",
  schedule: "Weekends only. Sat & Sun",
  sessionLength: "2 to 3 hours per session",
  level: "Complete beginners",
  goal: "Job ready Full Stack Developer",
};

export const instructors = [
  {
    initials: "HZ",
    name: "Hafiz Zeeshan",
    role: "Head Instructor & Lead",
    bio: "The visionary behind HEC. Leads overall curriculum, mentors instructors, and ensures every student leaves market ready.",
    teaches: ["Course direction and strategy", "Advanced concept sessions", "Career and freelance mentorship", "Final project reviews"],
    accent: "var(--accent)", light: "var(--accent-light)",
  },
  {
    initials: "SA",
    name: "Saif",
    role: "Full Stack Instructor",
    bio: "Hands on full stack developer. Leads frontend, React and Next.js modules. Makes complex topics click through live coding.",
    teaches: ["HTML, CSS and ES6+", "React and Next.js", "AI Integration", "Live coding and demos"],
    accent: "var(--blue)", light: "var(--blue-light)",
  },
  {
    initials: "AD",
    name: "Adnan",
    role: "Backend and DevOps Instructor",
    bio: "Backend specialist focused on Node.js, Express, MongoDB and PostgreSQL. Makes sure students can build and ship production grade APIs.",
    teaches: ["Node.js and Express", "MongoDB and PostgreSQL", "REST APIs and Auth", "Deployment and DevOps"],
    accent: "var(--purple)", light: "var(--purple-light)",
  },
];

export const modules = [
  {
    id: 1,
    label: "Module 1",
    name: "Web Designing",
    duration: "2.5 Months",
    prereq: "Matric and Computer Familiarity",
    quizzes: ["HTML5", "CSS3"],
    icon: "🎨",
    hackathonGoal: "Design and deploy a pixel perfect responsive website",
    tags: ["HTML5", "CSS3", "Figma", "Bootstrap", "Git", "Netlify"],
    sections: [
      {
        title: "Internet",
        topics: [
          "How Does The Internet Work",
          "What is HTTP",
          "Domain Name",
          "Hosting",
          "DNS",
          "Browsers",
        ],
      },
      {
        title: "HTML5",
        topics: ["Book (Duckett)"],
      },
      {
        title: "CSS3",
        topics: [
          "Book (Duckett)",
          "CSS Animations via Animate.style",
          "Media Queries via CSS Tricks",
          "Flexbox via CSS Tricks",
        ],
      },
      {
        title: "Tools and Libraries",
        topics: [
          "Font Awesome",
          "Bootstrap",
          "Google Fonts",
          "Figma. Plugins, Developer Mode, Pixel Perfect UI",
          "Explore AI tools",
          "Web Accessibility",
        ],
      },
      {
        title: "Deployment",
        topics: [
          "Netlify Hosting",
          "Git and Github Basics via GitHub Desktop",
          "Domain and Hosting Subscription via Namecheap",
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Module 2",
    name: "Front End Development",
    duration: "4.5 Months",
    prereq: "Module 1",
    quizzes: ["JS1 Ch 1 to 20", "JS2 Ch 21 to 40", "JS3 Ch 41 to 60", "JS4 Ch 61 to 89", "TypeScript", "Git"],
    icon: "⚡",
    hackathonGoal: "Full frontend app with TypeScript and Supabase auth",
    tags: ["JavaScript ES6+", "TypeScript", "GSAP", "Supabase", "Advanced Git"],
    sections: [
      {
        title: "JavaScript",
        topics: [
          "Docs via javascript.info",
          "Assignments",
          "Fetch API and AJAX",
        ],
      },
      {
        title: "Advanced JavaScript All ES Versions",
        topics: [
          "Variable Scoping and Closure",
          "Template literals",
          "Destructuring",
          "Default parameters",
          "Rest parameter and Spread Operator",
          "Arrow functions",
          "Enhanced object literals",
          "Iterators and For of",
          "Generators",
          "Modules",
          "Map and Array methods",
          "Higher order function and Callback",
          "Promises",
          "Exponentiation Operator",
          "Classes",
          "Ternary Operator",
          "Optional chaining",
        ],
      },
      {
        title: "TypeScript",
        topics: [
          "TS Compiler",
          "Type Annotations",
          "Interfaces and Classes",
          "Generics and Enums",
          "Type Inference",
          "Union and Intersection Types",
          "Type Guards",
          "Decorators",
        ],
      },
      {
        title: "Advanced Github",
        topics: [
          "Branches and PR",
          "PR Review and Merge",
          "Rebase and Cherry Pick",
        ],
      },
      {
        title: "GSAP Animations",
        topics: ["Scroll and timeline animations"],
      },
      {
        title: "Supabase",
        topics: [
          "Authentication via Email and Google",
          "Database and Storage",
        ],
      },
      {
        title: "Certifications",
        topics: ["JavaScript by JetBrains"],
      },
    ],
  },
  {
    id: 3,
    label: "Module 3",
    name: "Modern Front End Development",
    duration: "3 Months",
    prereq: "Modules 1 and 2",
    quizzes: ["ReactJS"],
    icon: "⚛️",
    hackathonGoal: "Full Next.js app with auth, API integration, deployed to Vercel",
    tags: ["React v19", "Next.js", "Tailwind CSS", "Shadcn UI", "Redux Toolkit", "TanStack Query"],
    sections: [
      {
        title: "Node Runtime and Package Managers",
        topics: ["NPM", "Yarn"],
      },
      {
        title: "ReactJS V19",
        topics: [
          "CRA and Vite",
          "Linters and Formatters",
          "Module Bundlers",
          "Context API",
          "Redux and RTK",
          "TanStack Query",
          "Zustand Optional",
          "Axios API Integration",
        ],
      },
      {
        title: "Styling",
        topics: ["Tailwind CSS", "Shadcn UI"],
      },
      {
        title: "Authentication Strategies and Web Security",
        topics: [
          "CORS and HTTPS",
          "Content Security Policy",
          "OWASP Security Risks",
        ],
      },
      {
        title: "NextJS Introduction",
        topics: [
          "App Router",
          "Server vs Client Components",
          "SSR, SSG and ISR",
          "API Routes",
        ],
      },
      {
        title: "Testing",
        topics: ["Playwright and Vitest"],
      },
      {
        title: "Certifications",
        topics: [
          "React Nanodegree via Udacity",
          "Meta Front End Developer via Coursera",
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Module 4",
    name: "Back End App Development",
    duration: "4 Months",
    prereq: "Module 2",
    quizzes: ["NodeJS and Express", "MongoDB", "PostgreSQL"],
    icon: "🖥️",
    hackathonGoal: "Full REST API with auth, DB, file uploads and payments deployed live",
    tags: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Socket.IO", "Redis", "Stripe"],
    sections: [
      {
        title: "NodeJS and ExpressJS",
        topics: [
          "RESTful APIs. Architecture, Basic Routes, CRUD",
          "Database Connection and Middleware",
          "Authentication and Protected Routes",
          "JWT and Bcrypt",
          "WebSocket",
          "Cloudinary for file uploads",
          "Redis and Node cache",
          "Messaging Queue",
          "File System module",
        ],
      },
      {
        title: "Socket IO",
        topics: ["Real time bidirectional communication"],
      },
      {
        title: "MongoDB",
        topics: ["CRUD and Queries"],
      },
      {
        title: "PostgreSQL",
        topics: ["CRUD and Queries"],
      },
      {
        title: "Payment Integration",
        topics: ["Stripe", "PayPal"],
      },
      {
        title: "DevOps and Deployment",
        topics: [
          "Linux Basics",
          "Google Cloud Deployment",
        ],
      },
    ],
  },
  {
    id: 5,
    label: "Module 5",
    name: "AI Integration for Web Apps",
    duration: "3 Weeks",
    prereq: "Modules 3 and 4",
    quizzes: ["AI Integration"],
    icon: "🤖",
    hackathonGoal: "Add a working AI feature to a full stack web app and deploy it live",
    tags: ["Groq API", "OpenAI API", "Prompt Engineering", "Next.js AI", "Express AI"],
    sections: [
      {
        title: "AI APIs Setup",
        topics: [
          "What are AI models and how they work",
          "Groq API setup and API key management",
          "OpenAI API setup",
          "Storing keys safely in .env",
        ],
      },
      {
        title: "Prompt Engineering Basics",
        topics: [
          "Writing effective system prompts",
          "Giving context to the model",
          "Controlling output format",
          "Few shot prompting",
        ],
      },
      {
        title: "AI in Next.js Frontend",
        topics: [
          "Calling AI APIs from a Next.js app",
          "Building a simple AI chat UI",
          "Streaming AI responses to the browser",
          "Vercel AI SDK basics",
        ],
      },
      {
        title: "AI in Express Backend",
        topics: [
          "Creating an Express route that calls Groq or OpenAI",
          "Handling AI responses in the backend",
          "Sending AI output to the frontend",
        ],
      },
      {
        title: "Practical AI Features to Build",
        topics: [
          "AI chatbot for a website",
          "AI text summarizer",
          "AI resume analyzer",
          "AI form assistant",
          "AI powered search",
        ],
      },
    ],
  },
  {
    id: 6,
    label: "Module 6",
    name: "Mobile App Development",
    duration: "1 Month",
    prereq: "Module 2",
    quizzes: ["React Native"],
    icon: "📱",
    hackathonGoal: "Ship a real mobile app to the Play Store",
    tags: ["React Native", "Expo", "iOS", "Android"],
    sections: [
      {
        title: "React Native",
        topics: [
          "CLI setup",
          "Expo",
          "Build",
          "App Publish",
          "iOS and Android",
        ],
      },
    ],
  },
];

export const outcomes = [
  "Build and deploy full MERN stack apps",
  "Write clean ES6+ and TypeScript",
  "Create REST APIs with Node and Express",
  "Design React and Next.js frontends",
  "Work with MongoDB and PostgreSQL",
  "Implement JWT authentication",
  "Add AI features to any web app",
  "Build real time apps with Socket.IO",
  "Integrate payments with Stripe and PayPal",
  "Deploy mobile apps to iOS and Android",
  "Build a freelance ready portfolio",
  "Interview ready with 6 live projects",
];

export const techStack = [
  { name: "HTML5",          module: 1, color: "#e34c26" },
  { name: "CSS3",           module: 1, color: "#264de4" },
  { name: "Figma",          module: 1, color: "#f24e1e" },
  { name: "Bootstrap",      module: 1, color: "#7952b3" },
  { name: "Git and GitHub", module: 1, color: "#f05032" },
  { name: "JavaScript",     module: 2, color: "#f7df1e", dark: true },
  { name: "TypeScript",     module: 2, color: "#3178c6" },
  { name: "GSAP",           module: 2, color: "#88ce02", dark: true },
  { name: "Supabase",       module: 2, color: "#3ecf8e", dark: true },
  { name: "React v19",      module: 3, color: "#61dafb", dark: true },
  { name: "Next.js",        module: 3, color: "#171717" },
  { name: "Tailwind CSS",   module: 3, color: "#38bdf8", dark: true },
  { name: "Redux Toolkit",  module: 3, color: "#764abc" },
  { name: "TanStack Query", module: 3, color: "#ef4444" },
  { name: "Node.js",        module: 4, color: "#3c873a" },
  { name: "Express",        module: 4, color: "#444444" },
  { name: "MongoDB",        module: 4, color: "#47a248" },
  { name: "PostgreSQL",     module: 4, color: "#336791" },
  { name: "Socket.IO",      module: 4, color: "#010101" },
  { name: "Redis",          module: 4, color: "#dc382d" },
  { name: "Stripe",         module: 4, color: "#635bff" },
  { name: "Groq API",       module: 5, color: "#f55036" },
  { name: "OpenAI API",     module: 5, color: "#10a37f" },
  { name: "React Native",   module: 6, color: "#61dafb", dark: true },
  { name: "Expo",           module: 6, color: "#000020" },
];

export const modColors = [
  { accent: "#38bdf8", light: "#e0f7fe", darkLight: "rgba(56,189,248,0.12)" },
  { accent: "#d97706", light: "#fffbeb", darkLight: "rgba(217,119,6,0.12)" },
  { accent: "#0891b2", light: "#ecfeff", darkLight: "rgba(8,145,178,0.12)" },
  { accent: "#059669", light: "#ecfdf5", darkLight: "rgba(5,150,105,0.12)" },
  { accent: "#7c3aed", light: "#f5f3ff", darkLight: "rgba(124,58,237,0.12)" },
  { accent: "#16a34a", light: "#f0fdf4", darkLight: "rgba(22,163,74,0.12)" },
];