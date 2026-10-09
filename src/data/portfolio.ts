/**
 * Central portfolio data for Niladri Das — The Series.
 * Every section is an episode, every project is an Original, and the whole site plays like a cinematic series.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Niladri Das',
  displayName: 'Niladri Das',
  firstName: 'NILADRI',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A NILADRI ORIGINAL',
  role: 'Full-Stack Developer',
  tagline: ['Full-Stack Developer', 'Cloud Architecture', 'React & Node.js'],
  intro:
    'Building robust web applications with modern technologies, scalable RESTful APIs, real-time WebSocket architecture, secure authentication pipelines, and enterprise cloud systems.',
  location: 'India',
  email: 'niladri.das@example.com',
  links: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  resumePdf: '/assets/Niladri_Das_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Niladri Das',
  },
  interests: ['Distributed Systems', 'Cloud Architecture (AWS)', 'Real-Time Systems', 'AI Integration'],
};

export const education = [
  {
    school: 'University Institute of Technology',
    place: 'India',
    degree: 'Master of Technology — Computer Science',
    period: '2028 – 2030',
    score: 'Dean’s List · 4.0 GPA',
  },
  {
    school: 'Engineering & Technology Institute',
    place: 'India',
    degree: 'Bachelor of Technology — Computer Science',
    period: '2024 – 2028',
    score: 'Summa Cum Laude',
  },
];

export const experience = [
  {
    company: 'Tech Startup',
    role: 'Senior Full Stack Developer',
    place: 'Remote / Hybrid',
    period: '2021 – Present',
    points: [
      'Led full-stack engineering initiatives across the organization, architecting modern platforms with React, Node.js, Express, and PostgreSQL.',
      'Mentored a team of 4 developers, established code review standards, and set up continuous integration pipelines.',
      'Elevated development maturity from ad-hoc to systematic, reducing deployment friction and improving cross-team velocity.',
    ],
  },
  {
    company: 'Fintech Startup',
    role: 'Full Stack Developer',
    place: 'Hybrid',
    period: '2019 – 2021',
    points: [
      'Engineered consumer banking features from concept to production, serving 500,000+ active users with 4.7 App Store rating.',
      'Designed high-throughput payment and transaction processing workflows with sub-second latency.',
      'Conducted end-to-end performance audits and ensured strict financial security compliance and data validation.',
    ],
  },
  {
    company: 'Digital Agency',
    role: 'Backend Developer',
    place: 'Onsite',
    period: '2017 – 2019',
    points: [
      'Delivered backend infrastructure and API integrations for 15+ client projects across healthcare, retail, and education.',
      'Designed microservices and Redis caching architectures that sustained a 95% client satisfaction rating.',
      'Collaborated directly with product leadership to translate business objectives into scalable software solutions.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    year: '2024',
    genre: 'Full-Stack • Fintech • Microservices',
    logline: 'A complete e-commerce solution with real-time inventory management, Stripe payment processing, and admin analytics dashboard.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe API', 'JWT'],
    build: [
      'Engineered a complete e-commerce platform with real-time inventory synchronization, Stripe payment gateway, and an admin dashboard.',
      'Integrated PostgreSQL with optimized relational queries, connection pooling, and strict ACID transaction management.',
    ],
    features: [
      'Secure Stripe payment gateway integration',
      'RESTful product management API with Node.js & Express',
      'Responsive React frontend with optimized product catalog',
      'PostgreSQL database with complex relational modeling',
      'Role-based admin dashboard with real-time order tracking',
    ],
    metrics: [
      { value: '500+', label: 'products cataloged' },
      { value: '100%', label: 'PCI-compliant checkout' },
      { value: '<150ms', label: 'average API response time' },
      { value: '99.9%', label: 'order processing uptime' },
    ],
    github: 'https://github.com',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'realtime-chat',
    title: 'Real-Time Chat Application',
    year: '2024',
    genre: 'Real-Time • WebSockets • Distributed',
    logline: 'Scalable real-time messaging platform with bi-directional WebSocket channels, group rooms, Redis caching, and cloud file sharing.',
    stack: ['Socket.io', 'Node.js', 'MongoDB', 'Redis', 'AWS S3', 'React'],
    build: [
      'Implemented Socket.io for low-latency bi-directional messaging, backed by Redis pub/sub for horizontal message brokering.',
      'Designed MongoDB schemas for fast chat history retrieval, coupled with AWS S3 pre-signed URLs for media file sharing.',
    ],
    features: [
      'Socket.io bi-directional real-time communication',
      'JWT authentication with secure refresh token rotation',
      'MongoDB schemas optimized for rapid message queries',
      'Cloud file attachments with AWS S3 integration',
      'Redis caching for instantaneous online status checks',
    ],
    metrics: [
      { value: '10k+', label: 'concurrent connections' },
      { value: '<25ms', label: 'message delivery latency' },
      { value: '99.95%', label: 'system availability' },
      { value: '0', label: 'message drops under load' },
    ],
    github: 'https://github.com',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'task-management-dashboard',
    title: 'Task Management Dashboard',
    year: '2024',
    genre: 'SaaS • Collaboration • Frontend Engineering',
    logline: 'Collaborative kanban task management platform with fluid drag-and-drop workflows, team permissions, and real-time updates.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
    build: [
      'Developed an interactive drag-and-drop kanban board with optimistic UI updates and custom column stages.',
      'Built a robust RESTful API with role-based access control, MySQL transactional safety, and live WebSocket update channels.',
    ],
    features: [
      'Fluid drag-and-drop interface with react-dnd',
      'Granular role-based access control (RBAC)',
      'Modern responsive design with Tailwind CSS',
      'Real-time team activity feed and notifications',
      'Milestone tracking with interactive analytics',
    ],
    metrics: [
      { value: '60%', label: 'faster team coordination' },
      { value: '100+', label: 'active team workspaces' },
      { value: '60fps', label: 'smooth interaction animations' },
      { value: '4-level', label: 'RBAC security hierarchy' },
    ],
    github: 'https://github.com',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'tenants',
  },
  {
    id: 'weather-dashboard-api',
    title: 'Weather Dashboard API',
    year: '2023',
    genre: 'Backend • Microservices • Caching',
    logline: 'High-throughput weather aggregation gateway that normalizes multi-source meteorological data with an intelligent Redis cache.',
    stack: ['Node.js', 'Express', 'Redis', 'OpenWeather API', 'Docker', 'Swagger'],
    build: [
      'Engineered an aggregation API service querying third-party meteorological providers with automated normalization and failover.',
      'Built an intelligent Redis caching layer with sliding TTLs and token-bucket rate limiting, cutting response latency by 70%.',
    ],
    features: [
      'Two-tier Redis cache layer for sub-millisecond retrieval',
      'Configurable rate limiting and exponential backoff retry middleware',
      'Full OpenAPI / Swagger specification with interactive documentation',
      'Multi-source meteorological provider aggregation',
      'Docker containerized deployment pipeline',
    ],
    metrics: [
      { value: '70%', label: 'latency reduction via Redis' },
      { value: '500k+', label: 'daily API requests handled' },
      { value: '99.9%', label: 'gateway service uptime' },
      { value: '100%', label: 'automated test coverage' },
    ],
    github: 'https://github.com',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'flow',
  },
  {
    id: 'blog-cms-platform',
    title: 'Blog Platform with CMS',
    year: '2023',
    genre: 'Full-Stack • Next.js • Publishing',
    logline: 'Modern publication system with a rich markdown editor, Cloudinary media pipeline, and high-performance SEO static rendering.',
    stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Cloudinary', 'SEO'],
    build: [
      'Created a full-featured content management platform featuring custom markdown rendering, live preview, and role-based publishing.',
      'Implemented automated Cloudinary media transformations and edge-cached static pages with Next.js for top-tier Lighthouse scores.',
    ],
    features: [
      'Custom markdown editor with instant preview and syntax highlighting',
      'Automated Cloudinary image compression and WebP conversion',
      'Next.js static site generation with dynamic SEO OpenGraph tags',
      'Role-based multi-author publication approval workflow',
      'Full-text article search and tag taxonomy',
    ],
    metrics: [
      { value: '100/100', label: 'Google Lighthouse SEO score' },
      { value: '50ms', label: 'edge time-to-first-byte' },
      { value: '80%', label: 'media bandwidth reduction' },
      { value: '15+', label: 'editorial publication categories' },
    ],
    github: 'https://github.com',
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'tenants',
  },
  {
    id: 'auth-microservice',
    title: 'Authentication Microservice',
    year: '2023',
    genre: 'Security • Microservices • Identity',
    logline: 'Zero-trust authentication service with OAuth2 SSO, JWT rotation, and brute-force defenses.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'OAuth2', 'Bcrypt'],
    build: [
      'Architected a decoupled authentication microservice implementing OAuth2 (Google & GitHub), JWT access tokens, and refresh token rotation.',
      'Built rate-limiting guards, Bcrypt password hashing, and encrypted verification email flows for enterprise-grade security.',
    ],
    features: [
      'JWT authentication with cryptographic refresh token rotation',
      'OAuth2 single sign-on integration for Google and GitHub',
      'Brute-force protection and IP-based rate limiting',
      'Automated email verification and cryptographically secure password reset',
      'Reusable SDK client for cross-microservice token validation',
    ],
    metrics: [
      { value: '0', label: 'security vulnerabilities' },
      { value: '100k+', label: 'active sessions authenticated' },
      { value: '12 rounds', label: 'Bcrypt cryptographic work factor' },
      { value: '100%', label: 'OAuth2 spec compliance' },
    ],
    github: 'https://github.com',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'leadership',
    title: 'Senior Engineering Leader',
    org: 'Tech Startup',
    detail: 'Led full-stack architecture initiatives and mentored team of 4 engineers.',
    laurel: 'Engineering Lead',
  },
  {
    id: 'scale',
    title: '500,000+ Active Users Scaled',
    org: 'Fintech Startup',
    detail: 'Scaled consumer banking product to half a million users with a 4.7 App Store rating.',
    laurel: 'Production Scale',
  },
  {
    id: 'performance',
    title: '70% Latency Reduction',
    org: 'High-Throughput Gateway',
    detail: 'Engineered two-tier Redis caching and microservice aggregation reducing latency by 70%.',
    laurel: 'System Performance',
  },
  {
    id: 'academic',
    title: 'Summa Cum Laude Honors',
    org: 'Computer Science',
    detail: 'Graduated with highest academic distinction in Computer Science and Engineering.',
    laurel: 'Academic Excellence',
  },
  {
    id: 'multi-platform',
    title: '15+ Production Architectures',
    org: 'Digital Agency',
    detail: 'Delivered resilient backend platforms across fintech, healthcare, and retail with 95% satisfaction.',
    laurel: 'Production Track Record',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'AWS', name: 'AWS Certified Solutions Architect – Associate' },
  { issuer: 'AWS', name: 'AWS Certified Developer – Associate' },
  { issuer: 'Docker', name: 'Docker Certified Associate (DCA)' },
  { issuer: 'MongoDB', name: 'MongoDB Certified Developer Associate' },
  { issuer: 'OpenJS', name: 'Node.js Application Developer (JSNAD)' },
  { issuer: 'PostgreSQL', name: 'PostgreSQL Database Associate' },
  { issuer: 'Redis', name: 'Redis Certified Developer' },
  { issuer: 'Frontend Masters', name: 'Advanced React & Architecture' },
  { issuer: 'GitHub', name: 'GitHub Actions & CI/CD Pipelines' },
  { issuer: 'Linux Foundation', name: 'Cloud Native Computing Fundamentals' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Core programming languages',
    skills: [
      { name: 'TypeScript', mono: 'Ts', note: 'Primary' },
      { name: 'JavaScript', mono: 'Js', note: 'Core' },
      { name: 'Python', mono: 'Py' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interactive interfaces & architecture',
    skills: [
      { name: 'React', mono: 'Re', note: 'Primary' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'Framer Motion', mono: 'Fm' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server logic & APIs',
    skills: [
      { name: 'Node.js', mono: 'No', note: 'Primary' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'Socket.io', mono: 'So' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'GraphQL', mono: 'Gq' },
      { name: 'Microservices', mono: 'Ms' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Caching',
    subtitle: 'High performance data storage',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg', note: 'Relational' },
      { name: 'MongoDB', mono: 'Mg', note: 'Document' },
      { name: 'Redis', mono: 'Rd', note: 'Cache & PubSub' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    subtitle: 'Infrastructure & deployment',
    skills: [
      { name: 'AWS (S3, EC2)', mono: 'Aw' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'CI/CD Pipelines', mono: 'Ci' },
      { name: 'Swagger / OpenAPI', mono: 'Sw' },
      { name: 'Git & GitHub', mono: 'Gt' },
    ],
  },
  {
    id: 'security',
    title: 'Security & Auth',
    subtitle: 'Identity & zero trust',
    skills: [
      { name: 'JWT Auth', mono: 'Jw' },
      { name: 'OAuth2', mono: 'Oa' },
      { name: 'RBAC', mono: 'Rb' },
      { name: 'Bcrypt', mono: 'Bc' },
      { name: 'Rate Limiting', mono: 'Rl' },
    ],
  },
  {
    id: 'ai-tools',
    title: 'AI & Next-Gen',
    subtitle: 'Modern integrations',
    skills: [
      { name: 'OpenAI API', mono: 'Ai' },
      { name: 'LangChain', mono: 'Lc' },
      { name: 'System Design', mono: 'Sd' },
      { name: 'Distributed Systems', mono: 'Ds' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  TypeScript: ['Task Management Dashboard', 'The Series Portfolio'],
  JavaScript: ['E-Commerce Platform', 'Real-Time Chat Application', 'Weather API'],
  React: ['E-Commerce Platform', 'Task Management Dashboard', 'The Series Portfolio'],
  'Next.js': ['Blog Platform with CMS'],
  'Tailwind CSS': ['Task Management Dashboard', 'The Series Portfolio'],
  'Node.js': ['E-Commerce Platform', 'Real-Time Chat Application', 'Weather API', 'Auth Microservice'],
  'Express.js': ['E-Commerce Platform', 'Real-Time Chat Application', 'Weather API'],
  'Socket.io': ['Real-Time Chat Application', 'Task Management Dashboard'],
  PostgreSQL: ['E-Commerce Platform', 'Blog Platform with CMS', 'Auth Microservice'],
  MongoDB: ['Real-Time Chat Application'],
  Redis: ['Real-Time Chat Application', 'Weather Dashboard API'],
  'AWS (S3, EC2)': ['Real-Time Chat Application', 'AWS Certified Developer'],
  Docker: ['Weather Dashboard API', 'Microservices Architecture'],
  'JWT Auth': ['Auth Microservice', 'E-Commerce Platform', 'Real-Time Chat'],
  OAuth2: ['Auth Microservice (Google & GitHub)'],
  'REST APIs': ['E-Commerce Platform', 'Weather Dashboard API'],
  'System Design': ['Fintech Startup (500k users)', 'Microservices Architecture'],
  'OpenAI API': ['AI Integration Workflows'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundations',
    period: '2017 – 2019',
    synopsis: 'Starting the software journey at Digital Agency — delivering backend systems for 15+ client platforms.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Backend Architect',
        description: 'Designed microservices and Redis caching architectures for 15+ client projects across healthcare and retail.',
        tags: ['Node.js', 'Express', 'MongoDB', 'Redis'],
        runtime: '2017 – 2019',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Client Excellence',
        description: 'Maintained 95% client satisfaction rating and generated recurring enterprise business through reliable systems.',
        tags: ['Architecture', '95% Satisfaction'],
        runtime: '15+ Projects',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'Scaling Consumer Products',
    period: '2019 – 2021',
    synopsis: 'Scaling a consumer banking fintech product to 500,000+ active users with 4.7 App Store rating.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Scale Challenge',
        description: 'Owned end-to-end full-stack feature engineering for consumer banking serving 500k+ users.',
        tags: ['Fintech', 'Scale', '500k Users'],
        runtime: '2019 – 2021',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'Zero Downtime',
        description: 'Optimized transaction latency and ensured strict financial security and high-availability standards.',
        tags: ['4.7 App Store', 'Security', 'React'],
        runtime: 'Continuous',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Technical Leadership',
    period: '2021 – Present',
    synopsis: 'Leading full-stack engineering at Tech Startup — mentoring developers and architecting scalable platforms.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Leading the Charge',
        description: 'Led full-stack development initiatives, modernizing frontend and backend systems with React, Node.js, and PostgreSQL.',
        tags: ['Lead', 'React', 'Node.js', 'PostgreSQL'],
        runtime: '2021 – Present',
        palette: violet,
      },
      {
        code: 'S03 E02',
        title: 'The Mentor',
        description: 'Mentored 4 junior engineers, established code review processes, and streamlined team deployment pipelines.',
        tags: ['Mentorship', 'CI/CD', 'Quality'],
        runtime: 'Ongoing',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'The Originals',
    period: '2023 – 2024',
    synopsis: 'Six production-grade systems — e-commerce, real-time messaging, task boards, caching APIs, CMS, and auth microservices.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Commerce & Real-Time',
        description: 'E-Commerce Platform with Stripe payments and Real-Time Chat Application with Socket.io & Redis.',
        tags: ['Stripe', 'Socket.io', 'Redis', 'AWS'],
        runtime: '2024',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'APIs & Identity',
        description: 'Weather Dashboard API with 70% latency cut via Redis, and zero-trust Authentication Microservice with OAuth2 & JWT.',
        tags: ['OAuth2', 'JWT', 'Microservices'],
        runtime: '2023',
        palette: crimson,
      },
      {
        code: 'S04 E03',
        title: 'Interactive Experiences',
        description: 'Collaborative kanban Task Management Dashboard and Next.js Blog CMS Platform.',
        tags: ['Next.js', 'Kanban', 'Cloudinary'],
        runtime: '2023 – 2024',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Pushing the boundaries of distributed systems, cloud computing, and AI integration.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Frontier',
        description: 'Deep diving into distributed cloud computing on AWS, AI agent workflows, and ultra-high-scale architecture.',
        tags: ['Distributed Systems', 'AWS', 'AI Agents'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Scale milestone', title: '500,000+ Users', detail: 'Fintech consumer banking platform at scale', palette: ocean },
  { label: 'Primary stack', title: 'React & Node.js', detail: 'TypeScript, PostgreSQL, Express, Tailwind', palette: amber },
  { label: 'Performance high', title: '70% Faster API', detail: 'Intelligent Redis caching & aggregation', palette: jade },
  { label: 'Real-time engine', title: 'Socket.io & Redis', detail: '10k+ concurrent WebSocket channels', palette: ocean },
  { label: 'Fintech original', title: 'Stripe E-Commerce', detail: 'PCI-compliant checkout & inventory sync', palette: crimson },
  { label: 'Security guard', title: 'Auth Microservice', detail: 'OAuth2 (Google/GitHub) & JWT rotation', palette: violet },
  { label: 'Leadership', title: 'Senior Tech Lead', detail: 'Mentored 4 developers at Tech Startup', palette: amber },
  { label: 'Academic high', title: 'Summa Cum Laude', detail: 'Top honors in Computer Science', palette: jade },
  { label: 'Client track record', title: '15+ Client Systems', detail: '95% satisfaction across production apps', palette: crimson },
  { label: 'Current focus', title: 'Distributed Systems', detail: 'Cloud architecture on AWS & AI integration', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Starring',
    title: 'Niladri Das',
    lines: ['Full-Stack Developer · Cloud Architecture', 'React · Node.js · TypeScript · PostgreSQL · AWS'],
    chips: ['Senior Engineer', 'Full-Stack'],
  },
  {
    kicker: 'Track Record',
    title: 'Production Scale',
    lines: ['500,000+ users scaled in consumer fintech', '15+ production systems built across industries', 'Mentored engineering teams & streamlined CI/CD'],
    chips: ['500k+ Users', '15+ Architectures'],
  },
  {
    kicker: 'Stack',
    title: 'Modern Architecture',
    lines: ['Frontend: React, Next.js, TypeScript, Tailwind CSS', 'Backend: Node.js, Express, Socket.io, REST APIs, Microservices', 'Data: PostgreSQL, MongoDB, Redis caching'],
    chips: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS'],
  },
  {
    kicker: 'Originals',
    title: 'Six Productions',
    lines: ['E-Commerce Platform with Stripe & inventory sync', 'Real-Time Chat with Socket.io & Redis pub/sub', 'Task Management, Weather API, Blog CMS & Auth Microservice'],
  },
  {
    kicker: 'Performance',
    title: 'High Throughput',
    lines: ['70% API latency cut through intelligent caching', '10k+ concurrent WebSocket connections supported', 'Zero security breaches with OAuth2 & JWT token rotation'],
  },
  {
    kicker: 'Education',
    title: 'Academic Excellence',
    lines: ['Master of Technology — Computer Science (Dean’s List, 4.0 GPA)', 'Bachelor of Technology — Computer Science (Summa Cum Laude)'],
    chips: ['4.0 GPA', 'Summa Cum Laude'],
  },
  {
    kicker: 'Now Streaming',
    title: 'The Next Episode',
    lines: ['Distributed Systems · Cloud Architecture (AWS) · AI Integration'],
  },
];

export type ProfileId = 'niladri' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'niladri',
    name: 'Niladri',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, experience & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, architecture & stack first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The journey arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Engineering philosophy', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Production Systems`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the series', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Milestones', meta: `${achievements.length} Milestones • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
