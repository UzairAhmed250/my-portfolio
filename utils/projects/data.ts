export interface Project {
  title: string;
  description: string;
  demoLink: string;
  repoLink: string;
  technologies: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "RV Help",
    description:
      "A trusted platform that connects RV owners with certified mobile RV technicians, inspectors, and service providers across North America. RV Help makes it easy to find qualified professionals for repairs, maintenance, pre-purchase inspections, and remote tech support, with tools for reviews, scheduling, and peace of mind on the road.",
    demoLink: "https://rvhelp.com/",
    repoLink: "https://github.com/uzairahmed250/rv-help-frontend",
    technologies: ["Next.js", "Supabase", "SSR", "RBAC"],
    featured: true,
  },
  {
    title: "Black Inventors Game",
    description:
      "An educational web-based game highlighting Black inventors and their innovations. Built with Vite and React, featuring a modern UI using shadcn/ui and Tailwind CSS, Supabase for backend services, and deployed on Vercel for performance and scalability.",
    demoLink: "https://www.blackinventorsgame.com/",
    repoLink: "https://github.com/UzairAhmed250/big-black-invention",
    technologies: ["Vite", "React", "Supabase", "shadcn/ui", "Tailwind CSS", "Vercel"],
    featured: false,
  },
  {
    title: "Pet Tag Finder",
    description:
      "A pet recovery system using QR/NFC tags attached to pet collars. When someone taps or scans the tag, they are redirected to a public page displaying pet details and owner contact information, enabling quick and secure pet recovery.",
    demoLink: "https://skypeak.tech/",
    repoLink: "https://github.com/UzairAhmed250/pet-tag-finder",
    technologies: ["Next.js", "Supabase", "QR Codes", "NFC"],
    featured: false,
  },
  {
    title: "Turbo Donate",
    description:
      "A multi-user donation management platform with distinct roles for Carrier, Donation Center, and Donor. Integrated Firebase for real-time data synchronization and user authentication.",
    demoLink: "https://dashboard.turbodonate.com/",
    repoLink: "https://github.com/UzairAhmed250/turbodonate",
    technologies: ["React", "Node.js", "MongoDB", "Firebase", "Authentication"],
    featured: false,
  },

  {
    title: "PamiFactura",
    description:
      "Invoice management platform for Costa Rican businesses, integrating tax APIs and ensuring regulatory compliance. Optimized for business workflows and financial tracking.",
    demoLink: "https://pamifactura.com",
    repoLink: "https://github.com/UzairAhmed250",
    technologies: ["Next.js", "Ant Design", "API Integration"],
  },
  {
    title: "Pami Concierge",
    description:
      "A comprehensive concierge service platform offering a wide range of services to clients. Features include booking management, inventory tracking, and secure payment gateways.",
    demoLink: "https://pamiconcierge.com",
    repoLink: "https://github.com/UzairAhmed250/pamiconcierge",
    technologies: ["React", "Node.js", "Firebase"],
  },
  {
    title: "Dyte Scheduler",
    description:
      "Scheduling tool similar to Calendly, with calendar API integration and optimized scheduling algorithms. Allows seamless appointment booking and calendar synchronization.",
    demoLink: "https://dytescheduler.example.com",
    repoLink: "https://github.com/ashirzuhaib",
    technologies: ["Next.js", "Firebase", "Calendar API"],
  },

];

