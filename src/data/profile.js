/**
 * @typedef {Object} SocialLink
 * @property {string} label
 * @property {string} href
 */

/**
 * @typedef {Object} Highlight
 * @property {string} label
 * @property {string} value
 * @property {string} description
 */

/**
 * @typedef {Object} ExperienceItem
 * @property {string} title
 * @property {string} org
 * @property {string} date
 * @property {string} description
 */

/**
 * @typedef {Object} SkillGroup
 * @property {string} label
 * @property {string} icon
 * @property {string[]} items
 */

/**
 * @typedef {Object} TimelineChapter
 * @property {string} title
 * @property {string} summary
 * @property {string[]} bullets
 */

/**
 * @typedef {Object} KeyWin
 * @property {string} label
 */

/**
 * @typedef {Object} HowIGotHereData
 * @property {TimelineChapter[]} chapters
 * @property {KeyWin[]} keyWins
 */

/**
 * @typedef {Object} Profile
 * @property {string} name
 * @property {string} title
 * @property {string} branding
 * @property {string} location
 * @property {string} email
 * @property {string} emailAlt
 * @property {string} siteUrl
 * @property {string} resumeUrl
 * @property {string} profileImage
 * @property {string} profileImageAlt
 * @property {string} profileImagePosition
 * @property {string} summary
 * @property {string[]} story
 * @property {string[]} focusAreas
 * @property {string[]} focusHighlights
 * @property {string} focusSummary
 * @property {string[]} openRoles
 * @property {string} techStackLine
 * @property {string[]} topSkills
 * @property {string[]} strengths
 * @property {Highlight[]} highlights
 * @property {ExperienceItem[]} experience
 * @property {SkillGroup[]} techStack
 * @property {SocialLink[]} socials
 */

/** @type {Profile} */
export const profile = {
  name: 'Adham Ahmed Altony',
  title: 'Product Engineer | Full-Stack + AI | Deployment',
  branding: 'You handle the business. I handle the engine behind it.',
  location: 'El Sherouk, Cairo, Egypt',
  email: 'adham.a.altony@gmail.com',
  emailAlt: 'Adham.A.Altony@gmail.com',
  siteUrl: 'https://adhamaltony.com',
  resumeUrl: '/AdhamAltony-CV.pdf',
  profileImage:
    '/2025-12-28_img_2025-12-28_profile_square_tight_1024-removebg-preview.png',
  profileImageAlt: 'Adham Ahmed Altony portrait',
  profileImagePosition: '50% 45%',
  summary:
    'Product engineer turning rough ideas into shipped full-stack applications. I handle UX, APIs, AI features when they add value, and deployment with cost-aware infrastructure so you can focus on customers and growth.',
  story: [
    "I am Adham Ahmed Altony, a Product Engineer based in El Sherouk, Cairo. I take ideas from concept to production using Next.js (App Router), React, Node.js, and modern deployment workflows with AWS and Docker.",
    "My journey started with self-learning and hands-on building, which evolved into client delivery. I am currently a Frontend Web Developer Intern at the Digital Egypt Pioneers Initiative (DEPI) and a Freelance Web Developer through ITIDA Gigs, where I deliver end-to-end builds under deadlines and collaborate in real environments. I have also integrated payments at scale using Stripe, Al Rajhi ARP, and Hyperpay on large projects.",
    "On the AI side, I trained at the National Telecommunication Institute (NTI), where I worked on practical machine learning projects, including a Movie Genre Classifier that reached 93% accuracy. I integrate AI only when it improves outcomes, focusing on performance, usability, and clean UX.",
    "Recently, I built SehaTalk, a bilingual medical consultation platform designed for the Egyptian market, featuring RTL/LTR support, dashboards for different roles, and an SEO-focused experience. I am currently open to Product Engineer, Full-Stack Engineer, or Founding Engineer roles where I can own the idea-to-launch pipeline.",
  ],
  focusAreas: [
    'Turning raw ideas into scoped products, roadmaps, and MVPs',
    'Building full-stack apps end to end with strong UX and reliable APIs',
    'Adding AI features when they improve outcomes (RAG, NLP, automation)',
    'Deploying and optimizing costs with AWS + Docker and production-ready workflows',
  ],
  focusHighlights: [
    'Idea to launch delivery',
    'Full-stack + product UX',
    'AI when it adds value',
    'Deployments + cost control',
  ],
  focusSummary: 'You handle the business. I handle the engine behind it.',
  openRoles: [
    'Product Engineer',
    'Full-Stack Engineer',
    'AI Engineer',
    'Founding Engineer',
  ],
  techStackLine:
    'Next.js, React, JavaScript, Tailwind, Node.js/Express, MongoDB/PostgreSQL, REST APIs, Auth/RBAC, AWS, Docker, Python, Scikit-learn, Streamlit.',
  topSkills: [
    'React.js',
    'Next.js (App Router)',
    'JavaScript',
    'Tailwind CSS',
    'Node.js/Express',
    'MongoDB',
    'PostgreSQL',
    'REST APIs',
    'Auth & RBAC',
    'Stripe',
    'Al Rajhi ARP',
    'Hyperpay',
    'Python',
    'Pandas',
    'NumPy',
    'Scikit-learn',
    'NLP (TF-IDF)',
    'CNNs/Transfer Learning',
    'Streamlit',
    'AWS',
    'Docker',
    'Git/GitHub',
    'Linux',
    'Postman',
  ],
  strengths: ['Teamwork', 'Problem solving', 'Clear communication', 'Product thinking'],
  highlights: [
    {
      label: 'Experience',
      value: '4+ years',
      description: 'Shipping full-stack products from idea to launch.',
    },
    {
      label: 'Delivery',
      value: 'Idea to launch',
      description: 'Scope, build, and deploy complete applications.',
    },
    {
      label: 'Stack',
      value: 'Full-stack + AI',
      description: 'Next.js, APIs, data, and AI when it adds value.',
    },
    {
      label: 'Deployment',
      value: 'AWS + Docker',
      description: 'Cost-aware infrastructure and production readiness.',
    },
  ],
  experience: [
    {
      title: 'Education',
      org: 'Faculty of Electronic Engineering',
      date: '2023',
      description:
        'Studies Computer Science and Engineering at the Faculty of Electronic Engineering, building a strong foundation in software engineering, problem-solving, and computer science fundamentals supported by continuous hands-on development.',
    },
    {
      title: 'Freelance Web Developer',
      org: 'Clients Worldwide',
      date: '2024 - Present (Now)',
      description:
        'Currently freelancing with clients worldwide and contributing to 6+ client projects, supporting delivery across UI implementation, feature development, API integration, and deployment-ready handoff. Payment integrations delivered: implemented payment gateway flows across 3 platforms - Stripe, Al Rajhi ARP, and Hyperpay.',
    },
    {
      title: 'Frontend Web Developer',
      org: 'Digital Egypt Pioneers Initiative (DEPI)',
      date: 'Jun 2025 - Dec 2025',
      description:
        'Delivered production-grade UI work using modern React/Next.js workflows, focusing on responsive design, accessibility, and fast iteration in a team environment.',
    },
    {
      title: 'Movie Genre Classifier',
      org: 'AI Product Demo',
      date: 'Jul 2025',
      description:
        'Built an interactive ML demo achieving 93% accuracy using TF-IDF + Random Forest, trained on 5,000+ records. Owned data preprocessing and led project delivery/presentation.',
    },
    {
      title: 'SehaTalk',
      org: 'Bilingual Medical Consultation Platform (Full-Stack Delivery)',
      date: 'Aug 2025 - Dec 2025',
      description:
        'Delivered a feature-rich healthtech platform with Patient / Doctor / Admin roles, Arabic/English (RTL/LTR) support, dashboards, verification, profiles, categories/threads, and notifications built with production-ready architecture and SEO-focused pages.',
    },
    {
      title: 'PDFSwifter',
      org: 'Document Automation Web App (Flagship Project)',
      date: '2025',
      description:
        'Built PDFSwifter, a practical document workflow product focused on speeding up common PDF tasks through a clean UI and reliable processing. Designed for real usage: fast interactions, clear outputs, and a streamlined user experience for converting/handling PDF files.',
    },
  ],
  techStack: [
    {
      label: 'Frontend',
      icon: 'code',
      items: ['React.js', 'Next.js (App Router)', 'JavaScript', 'Tailwind CSS'],
    },
    {
      label: 'Backend',
      icon: 'server',
      items: ['Node.js/Express', 'REST APIs', 'Auth & RBAC'],
    },
    {
      label: 'Databases',
      icon: 'database',
      items: ['MongoDB', 'PostgreSQL'],
    },
    {
      label: 'AI/ML',
      icon: 'brain',
      items: [
        'Python',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'NLP (TF-IDF)',
        'CNNs/Transfer Learning',
        'Streamlit',
      ],
    },
    {
      label: 'Cloud & DevOps',
      icon: 'cloud',
      items: ['AWS', 'Docker', 'Git/GitHub', 'Linux', 'Postman'],
    },
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adham-altony' },
    { label: 'GitHub', href: 'https://github.com/adhamaltony' },
    { label: 'Email', href: 'mailto:adham.a.altony@gmail.com' },
  ],
};

/** @type {HowIGotHereData} */
export const howIGotHere = {
  chapters: [
    {
      title: 'Foundations',
      summary:
        "I'm Adham Ahmed Altony, a Product Engineer based in El Sherouk, Cairo, Egypt, and I studied Computer Science and Engineering. I build with Next.js (App Router), React, Node.js, AWS, and Docker.",
      bullets: [
        'I take ideas from concept to production.',
        'I prioritize product outcomes, UX, and cost-aware architecture.',
      ],
    },
    {
      title: 'Client Delivery',
      summary:
        'I started freelancing in 2024 and deliver end-to-end builds for clients worldwide.',
      bullets: [
        'I contributed to 6+ client projects across UX, features, API integration, and deployment.',
        'I implemented payment flows on 3 platforms: Stripe, Al Rajhi ARP, Hyperpay.',
      ],
    },
    {
      title: 'AI Track',
      summary:
        'I built the Movie Genre Classifier to 93% accuracy on 5,000+ records and learned to integrate AI responsibly.',
      bullets: [
        'I owned data preprocessing and the feature pipeline.',
        'I focus on using AI only when it improves product outcomes.',
      ],
    },
    {
      title: 'Recent Builds',
      summary:
        'I shipped product-ready builds including SehaTalk and PDFSwifter, owning the full lifecycle.',
      bullets: [
        'SehaTalk: I built a bilingual RTL/LTR experience with multi-role dashboards.',
        'PDFSwifter: I shipped a document automation app with fast, clean workflows.',
      ],
    },
  ],
  keyWins: [
    { label: '6+ Client projects (worldwide)' },
    { label: '3 Payment platforms (Stripe, Al Rajhi ARP, Hyperpay)' },
    { label: '93% ML accuracy' },
    { label: '5,000+ records' },
    { label: 'Bilingual RTL/LTR + multi-role dashboards (SehaTalk)' },
  ],
};
