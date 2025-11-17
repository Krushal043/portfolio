import { FiFigma, FiLayers, FiMonitor, FiServer } from "react-icons/fi";

export const dynamicWords = ['FULL-STACK', 'VERSATILE', 'PROBLEM-SOLVER', 'SCALABLE', 'EFFICIENT', 'ADAPTABLE'];

export const premiumSkills = [
    {
        title: 'Frontend',
        desc: 'React & Next.js',
        icon: <FiMonitor className="w-6 h-6" />,
        color: 'purple'
    },
    {
        title: 'Backend',
        desc: 'Node & APIs',
        icon: <FiServer className="w-6 h-6" />,
        color: 'pink'
    },
    {
        title: 'UI/UX',
        desc: 'Design',
        icon: <FiFigma className="w-6 h-6" />,
        color: 'blue'
    },
    {
        title: 'Full-Stack',
        desc: 'Architecture',
        icon: <FiLayers className="w-6 h-6" />,
        color: 'emerald'
    }
]