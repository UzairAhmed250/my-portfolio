import React from 'react';
import {
  EmailIcon,
  PhoneIcon,
  LinkedInIcon,
  GitHubIcon,
  FrontendIcon,
  BackendIcon,
  DatabaseIcon,
  ToolsIcon,
} from '@/components/icons';

// Timeline/Experience data
export const timelineItems = [
  {
    year: 'Apr 2025 - Present',
    title: 'Full Stack Developer (Next.js / Supabase) at 8860319 Canada Inc',
    description:
      'Migrated a legacy OpenCart platform to a modern multi-store architecture using Next.js and Supabase. Built a centralized dashboard for managing multiple e-commerce sites, implemented SSR for SEO and performance, and delivered two production-ready stores while collaborating remotely with stakeholders.',
  },
  {
    year: 'Apr 2024 - Apr 2025',
    title: 'Senior Full Stack Developer at WebLynx',
    description:
      'Served as the primary engineer on multiple client projects using React, Next.js, and Node.js. Led architectural decisions, reviewed pull requests, mentored developers, and worked closely with product owners to deliver scalable, high-quality solutions.',
  },
  // {
  //   year: 'Mar 2023 - Present',
  //   title: 'Freelance Full Stack Developer (Upwork)',
  //   description:
  //     'Delivered multiple client projects using React, Next.js, Node.js, and Firebase. Collaborated directly with clients to gather requirements, implement features, and improve workflows and overall efficiency.',
  // },
  {
    year: '2024 - Present',
    title: 'BS in Computer Science',
    description:
      'Federal Urdu University, Karachi, Pakistan. Studied Data Structures, Web Development, and Software Engineering.',
  },
  {
    year: 'Jan 2023 - Mar 2024',
    title: 'Full Stack Developer at Jtechsight',
    description:
      'Promoted from intern to senior developer. Built 4+ full-stack applications using Next.js, React, and Node.js. Led development teams, mentored junior developers, and optimized deployment pipelines with Docker and Vercel.',
  },

];

// Statistics data
export const stats = [
  { value: '1.5+', label: 'Years Experience' },
  { value: '5+', label: 'Projects Completed' },
  { value: '5+', label: 'Happy Clients' },
  { value: '200+', label: 'Users Served' },
];

// Contact links data
export const contactLinks = [
  { href: 'mailto:uzair2500231@gmail.com', icon: <EmailIcon />, label: 'Email', value: 'uzair2500231@gmail.com' },
  { href: 'tel:+923170807563', icon: <PhoneIcon />, label: 'Phone', value: '+92 317 0807563' },
  { href: 'https://linkedin.com/in/uzair-ahmed-547644244/', icon: <LinkedInIcon />, label: 'LinkedIn', value: 'linkedin.com/in/uzair-ahmed-547644244/', external: true },
  { href: 'https://github.com/UzairAhmed250', icon: <GitHubIcon />, label: 'GitHub', value: 'github.com/UzairAhmed250', external: true },
];

// Skills categories data
export const skillCategories = [
  {
    icon: <FrontendIcon />,
    title: 'Frontend',
    skills: ['React & Next.js', 'JavaScript (ES6+)', 'HTML/CSS', 'Material-UI'],
    proficiency: 90,
  },
  {
    icon: <BackendIcon />,
    title: 'Backend',
    skills: ['Node.js & Express', 'RESTful APIs', 'Python & FastAPI', 'API Integration'],
    proficiency: 85,
  },
  {
    icon: <DatabaseIcon />,
    title: 'Databases',
    skills: ['MongoDB', 'Firebase', 'Supabase', 'SQL'],
    proficiency: 80,
  },
  {
    icon: <ToolsIcon />,
    title: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'Vercel', 'Google Cloud Platform'],
    proficiency: 75,
  },
];

// Education data
export const education = {
  period: '2024 - present',
  degree: 'Bachelor of Science in Computer Science',
  institution: 'Federal Urdu University, Karachi, Pakistan',
  coursework: 'Relevant coursework: Data Structures, Web Development, Software Engineering, Database Systems, Computer Networks, and Information Security.',
};

