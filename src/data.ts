// Services data
export const services = [
  {
    title: "SEO Consulting",
    description: "Personalized SEO strategy and optimization services for businesses in Singapore and international markets.",
    icon: "ri:search-line"
  },
  {
    title: "AI Integration",
    description: "Custom AI solutions development using technical expertise and certifications in AI and Data Science.",
    icon: "ri:brain-line"
  },
  {
    title: "Digital Strategy",
    description: "Training workshops and educational programs on cutting-edge digital marketing strategies.",
    icon: "ri:presentation-line"
  },
  {
    title: "Technical Development",
    description: "Software development services leveraging Polytechnic education and ongoing technical certifications.",
    icon: "ri:code-box-line"
  },
  {
    title: "Content Marketing",
    description: "Strategic content creation and distribution to attract and engage target audiences.",
    icon: "ri:article-line"
  },
  {
    title: "Data Analytics",
    description: "Advanced data analysis to extract meaningful insights and drive data-informed decisions.",
    icon: "ri:line-chart-line"
  }
];

// Skills data
export const skills = [
  {
    category: "SEO & Marketing",
    skills: [
      "Technical SEO",
      "Content Strategy",
      "Analytics",
      "Keyword Research",
      "SEM",
      "Local SEO"
    ]
  },
  {
    category: "Technical",
    skills: [
      "Software Engineering",
      "Python",
      "Web Development",
      "RedHat",
      "JavaScript",
      "React/Next.js"
    ]
  },
  {
    category: "AI & Data",
    skills: [
      "AI Prompt Engineering",
      "Data Science",
      "Machine Learning",
      "Analytics",
      "NLP",
      "Predictive Models"
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      "Communication",
      "Strategic Planning",
      "Project Management",
      "Client Relations",
      "Teaching",
      "Leadership"
    ]
  }
];

// Tech brands data
export const techBrands = [
  {
    name: "Python",
    icon: "simple-icons:python"
  },
  {
    name: "React",
    icon: "simple-icons:react"
  },
  {
    name: "JavaScript",
    icon: "simple-icons:javascript"
  },
  {
    name: "TypeScript",
    icon: "simple-icons:typescript"
  },
  {
    name: "Node.js",
    icon: "simple-icons:nodedotjs"
  },
  {
    name: "Astro",
    icon: "simple-icons:astro"
  },
  {
    name: "TailwindCSS",
    icon: "simple-icons:tailwindcss"
  },
  {
    name: "Google Analytics",
    icon: "simple-icons:googleanalytics"
  },
  {
    name: "Firebase",
    icon: "simple-icons:firebase"
  },
  {
    name: "AWS",
    icon: "simple-icons:amazonaws"
  },
  {
    name: "Docker",
    icon: "simple-icons:docker"
  },
  {
    name: "Git",
    icon: "simple-icons:git"
  }
];

// Quote data
export const quotes = [
  {
    quote: "I believe in combining technical expertise with strategic marketing knowledge to create digital solutions that not only rank well but genuinely provide value to users and businesses alike.",
    author: "Khuzayfah Redo",
    title: "Digital Marketing Professional"
  }
];

// Bio data
export const bio = "Seasoned SEO and Digital Marketing Professional with over 13 years of experience, specializing in technical search engine optimization, AI integration, and strategic marketing. Founder of SingRank, Singapore's leading digital marketing and AI solutions provider. Working at the intersection of technology and marketing to deliver data-driven strategies that generate exceptional results.";

// Projects data
export const projects = [
  {
    title: "E-commerce SEO Strategy",
    body: "Developed and implemented a comprehensive SEO strategy for an Indonesian e-commerce company, resulting in a 70% increase in organic traffic within 6 months.",
    href: "#",
    colSpan: "md:col-span-2",
    variant: "default" as const
  },
  {
    title: "Marketing Analytics Dashboard",
    body: "Built a comprehensive marketing analytics dashboard using React and Chart.js, integrating multiple data sources for unified reporting.",
    href: "https://github.com/yourusername/marketing-dashboard",
    colSpan: "md:col-span-1",
    variant: "glass" as const
  },
  {
    title: "Local Business SEO Campaign",
    body: "Helped a chain of local restaurants in Jakarta improve their Google My Business profiles and local search rankings, leading to 45% increase in search visibility.",
    href: "#",
    colSpan: "md:col-span-1",
    variant: "default" as const
  },
  {
    title: "News Portal SEO Overhaul",
    body: "Complete technical and content SEO restructuring for a major Indonesian news portal, resulting in 120% increase in search traffic and improved SERP rankings.",
    href: "#",
    colSpan: "md:col-span-1",
    variant: "gradient" as const
  },
  {
    title: "SEO Audit Tool",
    body: "Developed a tool for automated SEO auditing that checks over 100 ranking factors and provides actionable recommendations for improvement.",
    href: "https://github.com/yourusername/seo-audit-tool",
    colSpan: "md:col-span-1",
    variant: "glass" as const
  }
];

// Log history of changes
const changeLog = [
  {
    date: "2023-12-20",
    changes: "Initial portfolio setup with basic sections"
  },
  {
    date: "2023-12-25",
    changes: "Added projects and skills sections"
  },
  {
    date: "2024-01-15",
    changes: "Updated with new Digital Terminal theme"
  }
];

// Keep a record of this for debugging purposes
console.log("Data loaded successfully", { services, skills, techBrands, projects });

export default {
  services,
  skills,
  techBrands,
  quotes,
  bio,
  projects,
  changeLog
}; 