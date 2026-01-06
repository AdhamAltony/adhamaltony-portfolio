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
  title: 'AI Product Engineer | Full-Stack Developer (Next.js, React, AWS)',
  branding: 'Building RAG & AI-powered web apps',
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
    'AI Product Engineer and full-stack developer building RAG-ready web apps with Next.js, AWS, and clean UX. 6+ years crafting production web experiences across frontend, backend, and data workflows.',
  story: [
    "I am Adham Ahmed Altony, an AI Product Engineer & Full-Stack Developer based in El Sherouk, Cairo. I build scalable web applications and AI-powered systems using Next.js (App Router), React, Node.js, and modern deployment workflows with AWS and Docker.",
    "My journey started with self-learning and hands-on building, which evolved into real projects and client work. I am currently a Frontend Web Developer Intern at the Digital Egypt Pioneers Initiative (DEPI) and a Freelance Web Developer through ITIDA Gigs, where I sharpen my ability to deliver under deadlines and collaborate in real environments. I have also integrated payments at scale using Stripe, Al Rajhi ARP, and Hyperpay on large projects.",
    "On the AI side, I trained at the National Telecommunication Institute (NTI), where I worked on practical machine learning projects, including a Movie Genre Classifier that reached 93% accuracy. I led the project's data preprocessing and presentation. I am especially interested in AI products, RAG systems, and cloud architectures, and I like building solutions that balance performance, usability, and clean UX.",
    "Recently, I built SehaTalk, a bilingual medical consultation platform designed for the Egyptian market, featuring RTL/LTR support, dashboards for different roles, and an SEO-focused experience. I am currently open to roles as a Software Engineer, AI Engineer, Web Developer, or Frontend Developer, especially where I can build impactful products with strong engineering standards.",
  ],
  focusAreas: [
    'Building Next.js full-stack apps with clean architecture and strong UI/UX',
    'Designing AI-powered features (RAG, NLP pipelines, ML integration) in real products',
    'Deploying with AWS + Docker and creating reliable, production-ready workflows',
    'Writing maintainable, modular code and shipping fast without sacrificing quality',
  ],
  focusHighlights: [
    'Next.js full-stack, clean architecture',
    'AI features: RAG, NLP, ML',
    'AWS + Docker deployments',
    'Modular code, fast shipping',
  ],
  focusSummary: 'Full-stack product builder.',
  openRoles: [
    'Software Engineer',
    'AI Engineer',
    'Web Developer',
    'Frontend Developer',
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
      value: '6+ years',
      description: 'Building full-stack web products and shipping to production.',
    },
    {
      label: 'Focus',
      value: 'AI + RAG',
      description: 'Designing retrieval-augmented workflows and AI-first UX.',
    },
    {
      label: 'Stack',
      value: 'Next.js + AWS',
      description: 'App Router, React, cloud services, and secure APIs.',
    },
    {
      label: 'Location',
      value: 'Cairo, Egypt',
      description: 'Open to remote or hybrid roles worldwide.',
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
        "I'm Adham Ahmed Altony, an AI Product Engineer & Full-Stack Developer based in El Sherouk, Cairo, Egypt, and I studied Computer Science and Engineering. I build with Next.js (App Router), React, Node.js, AWS, and Docker.",
      bullets: [
        'I build scalable web systems with clean UX.',
        'I prioritize production-ready architecture and performance.',
      ],
    },
    {
      title: 'Client Delivery',
      summary:
        'I started freelancing in 2024 and currently work with clients worldwide.',
      bullets: [
        'I contributed to 6+ client projects across UI, features, and API integration.',
        'I implemented payment flows on 3 platforms: Stripe, Al Rajhi ARP, Hyperpay.',
      ],
    },
    {
      title: 'AI Track',
      summary:
        'I built the Movie Genre Classifier to 93% accuracy on 5,000+ records and led delivery.',
      bullets: [
        'I owned data preprocessing and the feature pipeline.',
        'I led the presentation and project delivery.',
      ],
    },
    {
      title: 'Recent Builds',
      summary: 'I shipped product-ready builds including SehaTalk and PDFSwifter.',
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
