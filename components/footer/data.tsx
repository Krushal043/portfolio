import { FiLinkedin, FiMail, FiMessageCircle } from "react-icons/fi";

export const quickContacts = [
    {
        id: 1,
        label: 'Email',
        href: "mailto:krushalsojitra043@gmail.com",
        icon: <FiMail className="w-4 h-4" />,
        contentCss: "hover:bg-purple-500/10 hover:border-purple-500/20 hover:text-purple-300",
        labelCss: " hover:text-purple-400",
    },
    {
        id: 2,
        label: 'WhatsApp',
        href: "https://wa.me/917069108043",
        icon: <FiMessageCircle className="w-4 h-4" />,
        contentCss: "hover:bg-green-500/10 hover:border-green-500/20 hover:text-green-300",
        labelCss: " hover:text-green-400",
    },
    {
        id: 3,
        label: 'LinkedIn',
        href: "https://www.linkedin.com/in/kushal-sojitra-8097161b9",
        icon: <FiLinkedin className="w-4 h-4" />,
        contentCss: "hover:bg-blue-500/10 hover:border-blue-500/20 hover:text-blue-300",
        labelCss: " hover:text-blue-400",
    }
]

export const services = [
    { name: "Frontend Development", href: "#services" },
    { name: "Backend & APIs", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "Full-Stack Web Apps", href: "#services" },
    { name: "Web Performance & SEO", href: "#services" },
    { name: "Deployment & DevOps", href: "#services" },
];

export const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Qualifications", href: "#qualifications" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
];