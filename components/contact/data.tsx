import { FiClock, FiLinkedin, FiMail, FiMapPin, FiMessageCircle, FiPhone } from "react-icons/fi";

export const socialLinks = [
    {
        id: 1,
        name: 'WhatsApp',
        url: 'https://wa.me/917069108043',
        icon: <FiMessageCircle className="w-5 h-5" />,
        description: "Instant messaging",
        contentCss: " hover:bg-green-500/10 hover:border-green-500/20",
        iconCss: "bg-green-500/10 text-green-400 group-hover:bg-green-500/20"
    },
    {
        id: 2,
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/kushal-sojitra-8097161b9',
        icon: <FiLinkedin className="w-5 h-5" />,
        description: "Professional network",
        contentCss: "hover:bg-blue-500/10 hover:border-blue-500/20",
        iconCss: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20"
    },
]

export const contactInfo = [
    {
        id: 1,
        label: 'Email',
        value: 'krushalsojitra043@gmail.com',
        href: "mailto:krushalsojitra043@gmail.com",
        icon: <FiMail className="w-5 h-5" />,
        contentCss: "hover:text-purple-400",
        iconCss: "bg-purple-500/10 text-purple-400"
    },
    {
        id: 2,
        label: 'Phone',
        value: '+91 7069108043',
        href: "tel:+917069108043",
        icon: <FiPhone className="w-5 h-5" />,
        contentCss: "hover:text-green-400",
        iconCss: "bg-green-500/10 text-green-400"
    },
    {
        id: 3,
        label: 'Location',
        value: 'Ahmedabad, Gujarat, India',
        href: "https://www.google.com/maps/place/Ahmedabad,+Gujarat,+India",
        icon: <FiMapPin className="w-5 h-5" />,
        contentCss: "hover:text-blue-400",
        iconCss: "bg-blue-500/10 text-blue-400"
    },
    {
        id: 4,
        label: 'Availability',
        value: '24/7',
        href: "#",
        icon: <FiClock className="w-5 h-5" />,
        contentCss: "hover:text-cyan-400",
        iconCss: "bg-cyan-500/10 text-cyan-400"
    }
]