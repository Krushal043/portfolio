import { FiCloud, FiFigma, FiLayers, FiMonitor, FiServer, FiZap } from "react-icons/fi";

interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    price?: string;
    popular?: boolean;
    color: string;
}

export const stats = [
    { label: "Services", value: "6+" },
    { label: "Specialties", value: "30+" },
    { label: "Tools", value: "20+" },
    { label: "Satisfaction", value: "100%" }
]

export const services: Service[] = [
    {
        id: 1,
        title: "Frontend Development",
        description: "Building responsive, pixel-perfect interfaces with modern frameworks and clean, maintainable code.",
        icon: <FiMonitor className="w-8 h-8" />,
        features: [
            "React / Next.js Development",
            "Tailwind CSS & Styled Components",
            "Performance Optimization",
            "Cross-Browser Compatibility",
            "Interactive Animations"
        ],
        popular: true,
        color: "purple"
    },
    {
        id: 2,
        title: "Backend & APIs",
        description: "Developing secure, scalable backend systems and REST/GraphQL APIs to power your application.",
        icon: <FiServer className="w-8 h-8" />,
        features: [
            "Node.js / Express / NestJS",
            "Database Design (PostgreSQL, MongoDB)",
            "REST & GraphQL APIs",
            "Authentication (JWT, OAuth)",
            "Serverless Functions"
        ],
        color: "blue"
    },
    {
        id: 3,
        title: "UI/UX Design",
        description: "Designing intuitive, user-centered digital experiences that convert and retain users.",
        icon: <FiFigma className="w-8 h-8" />,
        features: [
            "User Research & Personas",
            "Wireframing & Prototyping",
            "Design Systems (Figma)",
            "Accessibility (a11y) Standards",
            "Usability Testing"
        ],
        popular: true,
        color: "pink"
    },
    {
        id: 4,
        title: "Full-Stack Web Apps",
        description: "End-to-end development of dynamic, high-performance web applications from concept to deployment.",
        icon: <FiLayers className="w-8 h-8" />,
        features: [
            "Custom Web Applications",
            "E-Commerce Platforms",
            "SaaS Product Development",
            "Real-Time Features (WebSockets)",
            "Admin Dashboards"
        ],
        color: "emerald"
    },
    {
        id: 5,
        title: "Web Performance & SEO",
        description: "Optimizing speed, Core Web Vitals, and search visibility to boost rankings and user satisfaction.",
        icon: <FiZap className="w-8 h-8" />,
        features: [
            "Lighthouse Optimization",
            "Core Web Vitals Improvement",
            "SEO-Friendly Markup",
            "Image & Asset Optimization",
            "CDN & Caching Strategies"
        ],
        color: "orange"
    },
    {
        id: 6,
        title: "Deployment & DevOps",
        description: "Seamless deployment, monitoring, and maintenance to ensure your app runs smoothly in production.",
        icon: <FiCloud className="w-8 h-8" />,
        features: [
            "Vercel / Netlify / AWS Deployment",
            "CI/CD Pipelines",
            "Environment Management",
            "Monitoring & Logging",
            "Domain & SSL Setup"
        ],
        color: "cyan"
    }
];

export const colorMap = {
    purple: {
        icon: 'text-purple-400 group-hover:text-purple-300',
        gradient: 'from-purple-600 to-purple-400',
        bg: 'bg-purple-500/10',
        border: 'border-purple-400/30',
        glow: 'shadow-purple-500/25'
    },
    pink: {
        icon: 'text-pink-400 group-hover:text-pink-300',
        gradient: 'from-pink-600 to-pink-400',
        bg: 'bg-pink-500/10',
        border: 'border-pink-400/30',
        glow: 'shadow-pink-500/25'
    },
    blue: {
        icon: 'text-blue-400 group-hover:text-blue-300',
        gradient: 'from-blue-600 to-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-400/30',
        glow: 'shadow-blue-500/25'
    },
    emerald: {
        icon: 'text-emerald-400 group-hover:text-emerald-300',
        gradient: 'from-emerald-600 to-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-400/30',
        glow: 'shadow-emerald-500/25'
    },
    orange: {
        icon: 'text-orange-400 group-hover:text-orange-300',
        gradient: 'from-orange-600 to-orange-400',
        bg: 'bg-orange-500/10',
        border: 'border-orange-400/30',
        glow: 'shadow-orange-500/25'
    },
    cyan: {
        icon: 'text-cyan-400 group-hover:text-cyan-300',
        gradient: 'from-cyan-600 to-cyan-400',
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-400/30',
        glow: 'shadow-cyan-500/25'
    },
    // === NEW COLORS BELOW ===
    red: {
        icon: 'text-red-400 group-hover:text-red-300',
        gradient: 'from-red-600 to-red-400',
        bg: 'bg-red-500/10',
        border: 'border-red-400/30',
        glow: 'shadow-red-500/25'
    },
    yellow: {
        icon: 'text-yellow-400 group-hover:text-yellow-300',
        gradient: 'from-yellow-600 to-yellow-400',
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-400/30',
        glow: 'shadow-yellow-500/25'
    },
    indigo: {
        icon: 'text-indigo-400 group-hover:text-indigo-300',
        gradient: 'from-indigo-600 to-indigo-400',
        bg: 'bg-indigo-500/10',
        border: 'border-indigo-400/30',
        glow: 'shadow-indigo-500/25'
    },
    teal: {
        icon: 'text-teal-400 group-hover:text-teal-300',
        gradient: 'from-teal-600 to-teal-400',
        bg: 'bg-teal-500/10',
        border: 'border-teal-400/30',
        glow: 'shadow-teal-500/25'
    },
    rose: {
        icon: 'text-rose-400 group-hover:text-rose-300',
        gradient: 'from-rose-600 to-rose-400',
        bg: 'bg-rose-500/10',
        border: 'border-rose-400/30',
        glow: 'shadow-rose-500/25'
    },
    amber: {
        icon: 'text-amber-400 group-hover:text-amber-300',
        gradient: 'from-amber-600 to-amber-400',
        bg: 'bg-amber-500/10',
        border: 'border-amber-400/30',
        glow: 'shadow-amber-500/25'
    }
};