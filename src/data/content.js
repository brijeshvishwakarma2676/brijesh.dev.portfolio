import { Globe, Code2, LayoutDashboard, Plug, Workflow } from "lucide-react";

export const expertiseData = [
  {
    icon: Globe,
    title: "Website Development",
    items: [
      "Business Websites",
      "Corporate Websites",
      "Landing Pages",
      "Portfolio Websites",
      "CMS Integration",
    ],
  },
  {
    icon: Code2,
    title: "Frontend Development",
    items: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
      "Component Architecture",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Web Applications",
    items: ["Dashboards", "Admin Panels", "Internal Tools", "Client Portals"],
  },
  {
    icon: Plug,
    title: "API Development",
    items: [
      "REST APIs",
      "Third-party Integrations",
      "Payment Integrations",
      "Authentication Systems",
    ],
  },
  {
    icon: Workflow,
    title: "Automation",
    items: [
      "Workflow Automation",
      "Business Process Automation",
      "API Integrations",
    ],
  },
];

export const projectsData = [
  {
    id: 10,
    slug: "eg-earth-fitness-gym",
    keywords: ["gym", "fitness", "workout", "yoga", "training", "exercise", "wellness", "health", "sports", "trainer"],
    title: "EG Earth Fitness Gym Portal",
    category: "Quick Demo",
    description:
      "A premium, modern fitness brand portal with interactive schedules, training options, and a highly stylized dark-mode theme.",
    challenge:
      "Designing a visual-first layout optimized for swift mobile responsiveness and low latency.",
    solution:
      "Utilized tailored grid utilities, optimized media nodes, and lightweight framer components.",
    techStack: ["React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://eg-earth-fitness-gym-portfolio.vercel.app/",
    githubUrl: "#",
    color: "#16A34A",
    featured: false,
  },
  {
    id: 11,
    slug: "tanisi-impex-demo",
    keywords: ["b2b", "wholesale", "marketplace", "export", "import", "catalog", "trading", "ecommerce", "business"],
    title: "Tanisi Impex (Quick Demo)",
    category: "Quick Demo",
    description:
      "A live demo version of the Tanisi Impex wholesale B2B marketplace application deployed on Vercel.",
    challenge:
      "Configuring serverless routes and client environment parameters for instant visual catalog browsing.",
    solution:
      "Engineered lightweight mocking systems and optimized React table rendering blocks.",
    techStack: ["React", "Node.js", "Tailwind CSS", "Vercel"],
    liveUrl: "https://tanisiimpex.vercel.app/",
    githubUrl: "#",
    color: "#059669",
    featured: false,
  },
  {
    id: 12,
    slug: "healthcare-landing-page",
    keywords: ["healthcare", "hospital", "clinic", "doctor", "medical", "appointment", "booking", "patient", "health", "wellness"],
    title: "Healthcare Services Portal",
    category: "Quick Demo",
    description:
      "A live healthcare presentation and booking services landing page template showcasing clinics, doctor profiles, and appointments.",
    challenge:
      "Building a reassuring user experience featuring clear grids, accessible lists, and mobile booking requests.",
    solution:
      "Designed clear service panels, responsive viewports, and light custom animations.",
    techStack: ["React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://healthcare-landing-page-directions.vercel.app/",
    githubUrl: "#",
    color: "#0284C7",
    featured: false,
  },
  {
    id: 13,
    slug: "generic-email-service",
    keywords: ["email", "smtp", "newsletter", "notification", "automation", "mailing", "alerts", "transactional"],
    title: "PointNest Automated Email System",
    category: "SaaS",
    description:
      "A highly secure and reliable notification engine built to automate customer emails, transaction alerts, and dynamic newsletters.",
    challenge:
      "Ensuring absolute security for client communication pipelines and real-time template personalization at scale.",
    solution:
      "Designed an authenticated gateway with optimized template processing to deliver instant, high-deliverability client emails.",
    techStack: ["Python", "FastAPI", "SMTP", "Cloud Deployment"],
    liveUrl: "#",
    githubUrl: "#",
    color: "#D97706",
    featured: false,
  },
  {
    id: 14,
    slug: "premium-dining-restaurant",
    keywords: ["restaurant", "dining", "food", "cafe", "menu", "reservation", "booking", "culinary", "hotel", "chef"],
    title: "Premium Dining Restaurant",
    category: "Premium Multipage",
    description:
      "A luxury, visual-first culinary website featuring interactive menus, chef profiles, and a seamless reservation booking interface.",
    challenge:
      "Creating an immersive multi-page menu browsing experience and a responsive scheduling flow for table bookings.",
    solution:
      "Used high-resolution lazy-loaded imagery, category-based list filters, and clean client-side validation for booking requests.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveUrl: "https://premium-dining-restaurant.vercel.app/",
    githubUrl: "#",
    color: "#B91C1C",
    featured: true,
  },
  {
    id: 15,
    slug: "premium-fitness-portfolio",
    keywords: ["gym", "fitness", "workout", "yoga", "training", "exercise", "wellness", "health", "sports", "trainer"],
    title: "Premium Fitness Portfolio",
    category: "Premium Multipage",
    description:
      "A high-end, visual-first fitness portfolio featuring interactive schedules, training options, and an immersive dark-mode aesthetic.",
    challenge:
      "Creating an engaging and energetic UI while maintaining fast load times and smooth scroll animations.",
    solution:
      "Utilized fluid layout transitions, optimized media components, and clean styling to deliver a premium user experience.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveUrl: "https://premium-fitness-portfolio.vercel.app/",
    githubUrl: "#",
    color: "#10B981",
    featured: true,
  },
  {
    id: 16,
    slug: "premium-healthcare-portfolio",
    keywords: ["healthcare", "hospital", "clinic", "doctor", "medical", "appointment", "booking", "patient", "health"],
    title: "Premium Healthcare Portfolio",
    category: "Premium Multipage",
    description:
      "A comprehensive, highly-accessible healthcare portal featuring doctor profiles, patient services, and an integrated booking system.",
    challenge:
      "Structuring dense medical information while maintaining an inviting, clean, and accessible user experience across all devices.",
    solution:
      "Implemented a soft, professional color palette with structured service grids, clear typography, and a simplified scheduling flow.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveUrl: "https://premium-healthcare-portfolio.vercel.app/",
    githubUrl: "#",
    color: "#0EA5E9",
    featured: true,
  },
  {
    id: 1,
    slug: "shopcanvas-ecommerce",
    keywords: ["ecommerce", "shop", "store", "cart", "checkout", "retail", "shopping", "online store", "themes"],
    title: "ShopCanvas Multi-Theme E-Commerce",
    category: "React Apps",
    description:
      "A modular, multi-theme e-commerce store featuring dynamic custom theme switcher, responsive cart logic, and streamlined checkout experience.",
    challenge:
      "Implementing high-performance theme transitions and synchronous global cart states without bloated page loads.",
    solution:
      "Engineered clean React state workflows, optimized asset rendering, and Tailwind dynamic utility mappings.",
    techStack: ["React", "Tailwind CSS", "Vercel", "State Management"],
    liveUrl: "https://shopcanvas-multi-theme-ecommerce.vercel.app/",
    githubUrl: "#",
    color: "#2563EB",
    featured: false,
  },
  {
    id: 2,
    slug: "pointnest-saas",
    keywords: ["saas", "loyalty", "rewards", "points", "crm", "dashboard", "platform", "subscription"],
    title: "PointNest SaaS Platform",
    category: "SaaS",
    description:
      "A modern reward and customer loyalty management SaaS application, built to power scalable point systems and client incentives.",
    challenge:
      "Designing a secure database structure to handle point calculations and rewards safely.",
    solution:
      "Designed robust backend handlers, optimized state transitions, and implemented intuitive dashboards.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    liveUrl: "https://point-nest.vercel.app/",
    githubUrl: "#",
    color: "#7C3AED",
    featured: false,
  },
  {
    id: 3,
    slug: "harmony-studio",
    keywords: ["zumba", "yoga", "dance", "fitness", "wellness", "studio", "classes", "workout", "gym", "health", "meditation", "mumbai"],
    title: "Harmony Studio",
    category: "Premium Multipage",
    description:
      "A premium, highly aesthetic website for a Mumbai-based dance, yoga & Zumba studio, prioritizing fluid layout transitions and high-end typography.",
    challenge:
      "Achieving complex interactive scroll behaviors and canvas animations while keeping page speed under 1.5 seconds.",
    solution:
      "Utilized Framer Motion alongside optimized SVGs and lazy load configurations to score top Core Web Vitals.",
    techStack: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://www.harmonystudio.co.in/",
    githubUrl: "#",
    color: "#0D9488",
    featured: true,
  },
  {
    id: 4,
    slug: "tanisi-impex",
    keywords: ["b2b", "wholesale", "export", "import", "marketplace", "catalog", "quotation", "trading", "business"],
    title: "Tanisi Impex B2B Portal",
    category: "Websites",
    description:
      "A dedicated wholesale B2B marketplace highlighting export catalog items, client quotation workflows, and admin panel catalog editors.",
    challenge:
      "Ensuring bulk catalog requests are processed with valid metadata validation and email notification hooks.",
    solution:
      "Coupled a light NodeJS middleware with React tables, automated mailing triggers, and form validators.",
    techStack: ["React", "Node.js", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "https://tanisiimpex.com/",
    githubUrl: "#",
    color: "#059669",
    featured: true,
  },
  {
    id: 5,
    slug: "artsify-gallery",
    keywords: ["art", "portrait", "custom portraits", "hand-drawn", "sketch", "digital art", "gallery", "artist", "paintings", "gifts", "commission"],
    title: "Artsify Digital Gallery",
    category: "Websites",
    description:
      "An interactive gallery for a custom portrait art business, showcasing hand-drawn and digital artworks with commission requests.",
    challenge:
      "Rendering high-resolution images smoothly across various devices and network speeds.",
    solution:
      "Used progressive image loading, optimized rendering boxes, and smooth fade transitions.",
    techStack: ["React", "Tailwind CSS", "CSS Transitions"],
    liveUrl: "https://artsify.in/",
    githubUrl: "#",
    color: "#DB2777",
    featured: false,
  },
  {
    id: 6,
    slug: "sr-motors-portfolio",
    keywords: ["electric vehicle", "ev", "electric bike", "scooter", "motorcycle", "oben", "dealership", "automotive", "showroom", "two-wheeler", "booking", "test ride"],
    title: "SR Motors Oben Portfolio",
    category: "Websites",
    description:
      "A premium portfolio for an electric vehicle dealership, detailing e-bike specs, interactive color select panels, and test-ride booking requests.",
    challenge:
      "Providing users an intuitive booking process with real-time feedback and clear styling options.",
    solution:
      "Developed dynamic detail models, optimized color filters, and a streamlined client-side contact workflow.",
    techStack: ["React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://sr-motors-oben-portfolio.vercel.app/",
    githubUrl: "#",
    color: "#DC2626",
    featured: false,
  },
  {
    id: 7,
    slug: "smart-file-solutions",
    keywords: ["compliance", "documentation", "filing", "legal", "tax", "consulting", "business services", "gst"],
    title: "Smart File Solutions",
    category: "Websites",
    description:
      "A professional business documentation filing portal providing compliance guidance and support services.",
    challenge:
      "Ensuring page legibility and accessible structures for diverse user profiles.",
    solution:
      "Coded clean semantic structures, responsive viewports, and light CSS properties.",
    techStack: ["HTML5", "Vanilla CSS", "JavaScript"],
    liveUrl: "https://smartfilesolutions.in/",
    githubUrl: "#",
    color: "#0284C7",
    featured: false,
  },
  {
    id: 8,
    slug: "veeru-social-welfare",
    keywords: ["ngo", "charity", "nonprofit", "donation", "volunteer", "social welfare", "community", "foundation"],
    title: "Veeru Social Welfare NGO",
    category: "Websites",
    description:
      "A charity portal focusing on community impact initiatives, volunteer recruitment, and program spotlights.",
    challenge:
      "Creating a modern website with clean styling on a quick turnaround.",
    solution:
      "Used modular cards, grid layouts, and clean brand accent colors for readable text blocks.",
    techStack: ["React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://veeru-social-welfare-website.vercel.app/",
    githubUrl: "#",
    color: "#EA580C",
    featured: false,
  },
  {
    id: 9,
    slug: "baba-properties",
    keywords: ["real estate", "property", "realty", "listings", "housing", "apartments", "broker", "flats", "land"],
    title: "Baba Properties Real Estate",
    category: "Websites",
    description:
      "A custom landing page and catalog showcasing available properties, consultancy request forms, and visual location pins.",
    challenge:
      "Structuring listings clearly for searchers to filter and select options quickly.",
    solution:
      "Designed category cards, layout grids, and interactive lead forms.",
    techStack: ["React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://babaproperties.vercel.app/",
    githubUrl: "#",
    color: "#4F46E5",
    featured: true,
  },
];

export const skillsData = {
  Frontend: [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Responsive Design",
    "Component Architecture",
    "State Management",
    "React Hooks",
    "React Router",
    "Accessibility",
  ],
  "UI/UX": [
    "Design Systems",
    "Wireframing",
    "User Experience",
    "Mobile-first Design",
  ],
  "Backend Knowledge": ["Node.js", "Express.js", "REST APIs", "Authentication"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Docker"],
  "Cloud & Deployment": ["Vercel", "Netlify", "AWS Basics"],
  Performance: [
    "SEO Optimization",
    "Core Web Vitals",
    "Lazy Loading",
    "Code Splitting",
    "Performance Audits",
  ],
};

export const processData = [
  {
    step: 1,
    title: "Discovery",
    description:
      "Understanding your business, goals, target audience, and technical requirements through detailed conversations.",
  },
  {
    step: 2,
    title: "Planning",
    description:
      "Defining the project scope, timeline, milestones, and technical architecture. Creating a clear roadmap.",
  },
  {
    step: 3,
    title: "Design",
    description:
      "Wireframing and prototyping the user interface with a focus on usability, accessibility, and brand consistency.",
  },
  {
    step: 4,
    title: "Development",
    description:
      "Writing clean, maintainable, and well-tested code. Regular progress updates and demos at each milestone.",
  },
  {
    step: 5,
    title: "Testing",
    description:
      "Thorough cross-browser testing, performance audits, accessibility checks, and user acceptance testing.",
  },
  {
    step: 6,
    title: "Launch",
    description:
      "Deploying to production with proper CI/CD, monitoring setup, and performance verification.",
  },
  {
    step: 7,
    title: "Support",
    description:
      "Ongoing maintenance, bug fixes, performance monitoring, and iterative improvements based on real usage data.",
  },
];

export const testimonialsData = [
  {
    name: "Amit Patel",
    role: "Founder, Tanisi Impex",
    text: "Brijesh did an exceptional job building our B2B wholesale platform, Tanisi Impex. The digital product catalog structure and automated quotation inquiry form have significantly streamlined how we connect with international importers. Highly recommended for business solutions.",
    initials: "AP",
  },
  {
    name: "Rohan Deshmukh",
    role: "Creative Director, Harmony Studio",
    text: "We needed an agency-grade website for Harmony Studio that reflected our premium design aesthetic. Brijesh exceeded expectations with pixel-perfect attention to detail, fluid scroll behaviors, and flawless performance benchmarks.",
    initials: "RD",
  },
  {
    name: "Sandeep Mehta",
    role: "Managing Director, Smart File Solutions",
    text: "Brijesh helped us develop the Smart File Solutions portal from scratch. His backend API knowledge, clean React practices, and solid communication made the process incredibly smooth. Our clients find the portal straightforward and efficient.",
    initials: "SM",
  },
];

export const blogData = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    category: "React Development",
    excerpt:
      "Patterns and practices for structuring React applications that grow with your team and codebase.",
    date: "Nov 2025",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "REST API Design Best Practices",
    category: "API Design",
    excerpt:
      "A practical guide to designing APIs that are consistent, well-documented, and easy to consume.",
    date: "Oct 2025",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Performance Optimization in Modern Web Apps",
    category: "Website Performance",
    excerpt:
      "Techniques for improving Core Web Vitals, reducing bundle sizes, and delivering fast user experiences.",
    date: "Sep 2025",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Automating Business Workflows with APIs",
    category: "Automation",
    excerpt:
      "How to identify repetitive processes and build reliable automation pipelines that save real time.",
    date: "Aug 2025",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Component Architecture Patterns in React",
    category: "Frontend Engineering",
    excerpt:
      "Compound components, render props, and hooks — when to use each pattern and why.",
    date: "Jul 2025",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "Deploying to the Edge with Vercel",
    category: "SaaS Development",
    excerpt:
      "Leveraging edge functions and CDN caching for globally distributed, low-latency applications.",
    date: "Jun 2025",
    readTime: "5 min read",
  },
];

export const faqData = [
  {
    question: "What technologies do you use?",
    answer:
      "My primary stack is React.js with JavaScript for the frontend, Node.js and Express for backend services, and PostgreSQL or MongoDB for databases. I use Tailwind CSS for styling, and deploy on platforms like Vercel and AWS. I choose technologies based on what best fits the project requirements rather than personal preference.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the scope. A landing page or simple business website typically takes 2–3 weeks. A full web application with custom features can take 6–12 weeks. I provide detailed timelines during the planning phase and keep you updated on progress throughout development.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer:
      "Yes. After launch, I offer maintenance packages that include bug fixes, performance monitoring, security updates, and feature improvements. I also provide documentation and knowledge transfer so your team can handle day-to-day management independently.",
  },
  {
    question: "Can you work with existing systems and codebases?",
    answer:
      "Absolutely. A significant portion of my work involves improving or extending existing applications. I can audit your current codebase, identify areas for improvement, and integrate new features without disrupting what already works.",
  },
  {
    question: "How do you communicate during projects?",
    answer:
      "I provide regular progress updates — typically weekly written summaries and demo calls at each milestone. I am available via email and messaging for day-to-day questions. Clear, proactive communication is something I prioritize on every project.",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
