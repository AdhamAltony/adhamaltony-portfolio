/**
 * @typedef {Object} ProjectLinks
 * @property {string} [live]
 * @property {string} [repo]
 */

/**
 * @typedef {Object} ProjectMedia
 * @property {string} src
 * @property {string} alt
 */

/**
 * @typedef {Object} Project
 * @property {string} title
 * @property {string} slug
 * @property {string} shortDescription
 * @property {string} role
 * @property {string} timeline
 * @property {string} category
 * @property {string[]} tags
 * @property {string} [image]
 * @property {string} [video]
 * @property {ProjectMedia[]} [gallery]
 * @property {string[]} stack
 * @property {string[]} outcomes
 * @property {string} overview
 * @property {string} problem
 * @property {string} solution
 * @property {string[]} contributions
 * @property {string[]} features
 * @property {string[]} challenges
 * @property {ProjectLinks} links
 * @property {boolean} featured
 */

/**
 * @typedef {Object} MiniProject
 * @property {string} title
 * @property {string} description
 * @property {string[]} stack
 * @property {string} category
 * @property {ProjectLinks | null} [links]
 */

export const projectFilters = ['Full-Stack', 'Frontend', 'AI/ML', 'Tools'];

const asset = (path) => encodeURI(path);

/** @type {Project[]} */
export const projects = [
  {
    title: 'SehaTalk - Medical Consultation Platform',
    slug: 'sehatalk',
    shortDescription:
      'Bilingual medical consultations platform with patient and doctor dashboards, SEO-first architecture, and role-based workflows.',
    role: 'Full-Stack Developer',
    timeline: 'Aug 2025 - Dec 2025',
    category: 'Full-Stack',
    tags: ['Healthcare', 'Bilingual', 'SEO', 'RBAC'],
    image: asset('/sehatalk/landing page.png'),
    video: asset(
      '/sehatalk/Screen Recording 2025-12-12 at 6.47.17 PM_3x_noaudio.mp4'
    ),
    gallery: [
      {
        src: asset('/sehatalk/landing page.png'),
        alt: 'SehaTalk landing page',
      },
      {
        src: asset('/sehatalk/Specialties page.png'),
        alt: 'SehaTalk specialties directory',
      },
      {
        src: asset('/sehatalk/Ask a question page.png'),
        alt: 'SehaTalk ask a question flow',
      },
      {
        src: asset('/sehatalk/Signup page.png'),
        alt: 'SehaTalk signup page',
      },
    ],
    stack: [
      'Next.js (App Router)',
      'JavaScript',
      'Tailwind CSS',
      'Radix UI',
      'MongoDB',
    ],
    outcomes: [
      'SEO-first SSR with Arabic-first discoverability.',
      'Role-based authentication for patient and doctor journeys.',
      'End-to-end profile verification and Q&A workflows.',
    ],
    overview:
      'SehaTalk is a medical consultation platform designed for Arabic-first audiences, enabling patients to ask questions and connect with verified doctors in a structured, SEO-friendly environment.',
    problem:
      'Existing medical Q&A sites lacked bilingual UX, strong SEO, and clear separation between patient and doctor flows. Verification and moderation were also friction points for adoption.',
    solution:
      'Built a bilingual, RTL/LTR-ready platform with dedicated dashboards, role-based access, doctor verification, and category-driven Q&A to support reliable, search-friendly health content.',
    contributions: [
      'Designed the full-stack architecture with Next.js App Router and server-rendered SEO pages.',
      'Implemented bilingual UI with RTL/LTR support and Arabic-first SEO metadata.',
      'Built secure role-based authentication, doctor verification, and profile management flows.',
    ],
    features: [
      'Bilingual Arabic/English UI with RTL/LTR switching',
      'Patient and doctor dashboards with personalized workflows',
      'Role-based authentication and doctor verification',
      'Q&A categories, badges, and notifications',
      'Profile management and reputation signals',
    ],
    challenges: [
      'Balancing Arabic-first SEO with dynamic, role-based content.',
      'Designing verification workflows that feel safe yet lightweight.',
      'Ensuring consistent UX across RTL/LTR layouts.',
    ],
    links: {
      live: 'https://sehatalk.vercel.app',
      repo: 'https://github.com/AdhamAhmed2005/SehaTalk',
    },
    featured: true,
  },
  {
    title: 'PDFSwifter - All-in-One Document Toolkit',
    slug: 'pdfswifter',
    shortDescription:
      'Large-scale PDF utilities suite inspired by iLovePDF, with media conversion tools and a FastAPI backend.',
    role: 'Full-Stack Developer',
    timeline: '2025',
    category: 'Tools',
    tags: ['PDF', 'Automation', 'API', 'Productivity'],
    image: asset('/pdfswifter/Landing page.png'),
    gallery: [
      {
        src: asset('/pdfswifter/Landing page.png'),
        alt: 'PDFSwifter landing page',
      },
      {
        src: asset('/pdfswifter/Tools page.png'),
        alt: 'PDFSwifter tools library',
      },
      {
        src: asset('/pdfswifter/download page.png'),
        alt: 'PDFSwifter download flow',
      },
    ],
    stack: ['Python', 'FastAPI', 'REST API'],
    outcomes: [
      'Unified many document utilities into one cohesive platform.',
      'API-first architecture to support web and future clients.',
      'Expanded into YouTube/TikTok media conversion tools.',
    ],
    overview:
      'PDFSwifter is a comprehensive toolkit for PDF management and media conversion, designed to offer iLovePDF-style utilities with an extensible API foundation.',
    problem:
      'Managing PDFs often requires multiple tools and inconsistent workflows. I wanted a single platform that centralizes PDF operations and can grow beyond documents.',
    solution:
      'Built a modular tool suite with a FastAPI backend that exposes PDF operations and media conversion endpoints for YouTube and TikTok workflows.',
    contributions: [
      'Designed and implemented the FastAPI backend in Python.',
      'Structured modular utilities for PDF processing and media conversion.',
      'Created API endpoints to support automation and future integrations.',
    ],
    features: [
      'Core PDF tools for merging, splitting, compressing, and converting files',
      'Media conversion utilities for YouTube and TikTok formats',
      'API-first architecture using FastAPI',
      'Extensible structure for adding new tools',
    ],
    challenges: [
      'Keeping the toolset modular as the feature list expanded.',
      'Balancing usability with the technical depth of multi-tool workflows.',
    ],
    links: {
      repo: 'https://github.com/AdhamAltony/PDFSwifter',
    },
    featured: true,
  },
  {
    title: 'Saudi School Attendance & Discipline Management System',
    slug: 'saudi-school-attendance',
    shortDescription:
      'Admin dashboard for attendance tracking, automated discipline warnings, and reporting with real-time API integration.',
    role: 'Frontend Developer',
    timeline: 'Oct 2025',
    category: 'Frontend',
    tags: ['Education', 'Dashboards', 'Automation'],
    image: asset(
      '/school_attendance_system/Main attendance recording page.jpeg'
    ),
    gallery: [
      {
        src: asset(
          '/school_attendance_system/Main attendance recording page.jpeg'
        ),
        alt: 'Attendance recording dashboard',
      },
      {
        src: asset('/school_attendance_system/Behaviour page.jpeg'),
        alt: 'Discipline behaviour management screen',
      },
      {
        src: asset('/school_attendance_system/reports page.jpeg'),
        alt: 'Attendance and discipline reports',
      },
    ],
    stack: ['React', 'Tailwind CSS', 'Swagger API'],
    outcomes: [
      'Automated warning cycles every 5 absences.',
      'Streamlined admin workflows across users, subjects, and sessions.',
      'Delivered responsive dashboards optimized for daily use.',
    ],
    overview:
      'A discipline management interface for Saudi schools that unifies attendance tracking, warnings, and reporting in a single admin experience.',
    problem:
      'Manual attendance tracking and fragmented dashboards made it difficult to enforce discipline policies consistently and generate reports quickly.',
    solution:
      'Delivered a focused admin UI with automated warning logic, dashboards, and real-time reporting backed by Swagger API integration.',
    contributions: [
      'Built core attendance flows, dashboards, and reporting views in React.',
      'Integrated Swagger-based APIs for users, subjects, and sessions.',
      'Implemented automated warning logic aligned with absence thresholds.',
    ],
    features: [
      'Attendance tracking with automated warnings every 5 absences',
      'Admin dashboard for oversight and daily operations',
      'Reports view with export-friendly summaries',
      'User, subject, and session management',
      'Swagger API integration for real-time data',
    ],
    challenges: [
      'Coordinating complex admin workflows without overwhelming users.',
      'Keeping data flow consistent across multiple API endpoints.',
    ],
    links: {
      live: 'https://school-discipline-app-new-flame.vercel.app',
      repo: 'https://github.com/AdhamAhmed2005/School_attendance_system',
    },
    featured: true,
  },
  {
    title: 'Movie Genre Classifier (93% Accuracy)',
    slug: 'movie-genre-classifier',
    shortDescription:
      'Machine learning classifier that predicts movie genres from text data with 93% accuracy and a Streamlit demo.',
    role: 'ML Engineer (Data + Presentation)',
    timeline: '2025',
    category: 'AI/ML',
    tags: ['NLP', 'Classification', 'Data Science'],
    stack: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'NLP (TF-IDF)',
      'Random Forest',
      'Streamlit',
    ],
    outcomes: [
      'Achieved 93% accuracy on 5,000+ records.',
      'Delivered a working Streamlit demo for stakeholders.',
      'Led the final project presentation and results walkthrough.',
    ],
    overview:
      'A supervised learning project that classifies movie genres using textual metadata and TF-IDF features.',
    problem:
      'Manual genre classification is slow and inconsistent when datasets grow. The goal was to automate labeling with strong accuracy.',
    solution:
      'Built a preprocessing pipeline and trained a Random Forest model on TF-IDF vectors, then packaged results in a Streamlit demo for easy exploration.',
    contributions: [
      'Performed data cleaning, preprocessing, and feature extraction.',
      'Trained and tuned a Random Forest classifier with TF-IDF vectors.',
      'Led the final presentation and delivered model insights.',
    ],
    features: [
      'TF-IDF based text vectorization',
      'Random Forest classification pipeline',
      'Streamlit demo for interactive predictions',
    ],
    challenges: [
      'Balancing precision and recall across multi-genre categories.',
      'Communicating model performance to non-technical audiences.',
    ],
    links: {
      live: '',
      repo: '',
    },
    featured: false,
  },
];

/** @type {MiniProject[]} */
export const miniProjects = [
  {
    title: 'Mostaql-notifier',
    description: 'Python automation tool to track new opportunities and send notifications.',
    stack: ['Python', 'Automation'],
    category: 'Tools',
    links: null,
  },
  {
    title: 'Dantix-frontend',
    description: 'Frontend UI build for a client dashboard experience.',
    stack: ['JavaScript', 'Frontend'],
    category: 'Frontend',
    links: null,
  },
];
