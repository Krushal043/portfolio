import { title } from "process";
import {
    FiFigma,
    FiCode,
    FiServer,
    FiTool,
    FiZap
} from "react-icons/fi";

export interface Skill {
    id: number;
    title: string;
    name: string;
    icon: React.ReactNode;
}

export const skills = [
    {
        id: 1,
        title: "Core Skills & Specialties",
        name: "All",
        icon: <FiZap className="h-6 w-6 " />
    },
    {
        id: 2,
        title: "Frontend Development",
        name: "Frontend",
        icon: <FiCode className="h-6 w-6" />
    },
    {
        id: 3,
        title: "UI/UX Design",
        name: "UI/UX",
        icon: <FiFigma className="h-6 w-6" />
    },
    {
        id: 4,
        title: "Backend Development",
        name: "Backend",
        icon: <FiServer className="h-6 w-6" />
    },
    {
        id: 5,
        title: "Development Tools",
        name: "Dev Tools",
        icon: <FiTool className="h-6 w-6" />
    },
];

export const specialties = [
    // ── Design ─────────────────────
    {
        id: 1,
        name: "AdobeXD",
        img: "/design_tools/adobe.svg",
        category: "UI/UX",
        color: "purple"
    },
    {
        id: 2,
        name: "Figma",
        img: "/design_tools/figma.svg",
        category: "UI/UX",
        color: "purple"
    },
    {
        id: 3,
        name: "Canva",
        img: "/design_tools/canva.svg",
        category: "UI/UX",
        color: "purple"
    },

    // ── Frontend ───────────────────
    {
        id: 4,
        name: "Javascript",
        img: "/design_tools/javascript.svg",
        category: "Frontend",
        color: "yellow"
    },
    {
        id: 5,
        name: "ReactJS",
        img: "/design_tools/react.svg",
        category: "Frontend",
        color: "cyan"
    },
    {
        id: 6,
        name: "NextJS",
        img: "/design_tools/nextjs.svg",
        category: "Frontend",
        color: "emerald"
    },
    {
        id: 7,
        name: "ElectronJS",
        img: "/design_tools/electronjs.svg",
        category: "Frontend",
        color: "blue"
    },
    {
        id: 8,
        name: "HTML5",
        img: "/design_tools/html.svg",
        category: "Frontend",
        color: "orange"
    },
    {
        id: 9,
        name: "CSS3",
        img: "/design_tools/css.svg",
        category: "Frontend",
        color: "indigo"
    },
    {
        id: 10,
        name: "JQuery",
        img: "/design_tools/jquery.svg",
        category: "Frontend",
        color: "pink"
    },
    {
        id: 11,
        name: "SCSS",
        img: "/design_tools/sass.svg",
        category: "Frontend",
        color: "rose"
    },
    {
        id: 12,
        name: "Bootstrap",
        img: "/design_tools/bootstrap.svg",
        category: "Frontend",
        color: "purple"
    },
    {
        id: 13,
        name: "Redux",
        img: "/design_tools/redux.svg",
        category: "Frontend",
        color: "indigo"
    },
    {
        id: 14,
        name: "AMP",
        img: "/design_tools/amp.svg",
        category: "Frontend",
        color: "amber"
    },
    {
        id: 15,
        name: "Tailwind CSS",
        img: "/design_tools/tailwind.svg",
        category: "Frontend",
        color: "cyan"
    },
    {
        id: 16,
        name: "Material UI",
        img: "/design_tools/mui.svg",
        category: "Frontend",
        color: "blue"
    },
    {
        id: 17,
        name: "Semantic UI",
        img: "/design_tools/semantic.svg",
        category: "Frontend",
        color: "teal"
    },
    {
        id: 18,
        name: "GraphQL",
        img: "/design_tools/graphql.svg",
        category: "Frontend",
        color: "pink"
    },
    {
        id: 19,
        name: "Apollo GraphQL",
        img: "/design_tools/apollo.svg",
        category: "Frontend",
        color: "pink"
    },
    {
        id: 20,
        name: "Framer motion",
        img: "/design_tools/motion.svg",
        category: "Frontend",
        color: "emerald"
    },
    {
        id: 21,
        name: "Styled Components",
        img: "/design_tools/styledcomponents.svg",
        category: "Frontend",
        color: "rose"
    },
    {
        id: 22,
        name: "React Query",
        img: "/design_tools/reactquery.svg",
        category: "Frontend",
        color: "teal"
    },
    {
        id: 23,
        name: "GIT",
        img: "/design_tools/git.svg",
        category: "Frontend",
        color: "orange"
    },

    // ── Backend ────────────────────
    {
        id: 24,
        name: "NodeJS",
        img: "/design_tools/nodejs.svg",
        category: "Backend",
        color: "emerald"
    },
    {
        id: 25,
        name: "ExpressJS",
        img: "/design_tools/express.svg",
        category: "Backend",
        color: "blue"
    },
    {
        id: 26,
        name: "MongoDB",
        img: "/design_tools/mongodb.svg",
        category: "Backend",
        color: "green" // Note: green not in colorMap yet — see note below
    },
    {
        id: 27,
        name: "Firebase",
        img: "/design_tools/firebase.svg",
        category: "Backend",
        color: "amber"
    },
    {
        id: 28,
        name: "My SQL",
        img: "/design_tools/mysql.svg",
        category: "Backend",
        color: "cyan"
    },

    // ── Dev Tools ──────────────────
    {
        id: 29,
        name: "Visual Studio Code",
        img: "/design_tools/vscode.svg",
        category: "Dev Tools",
        color: "blue"
    },
    {
        id: 30,
        name: "Github",
        img: "/design_tools/github.svg",
        category: "Dev Tools",
        color: "indigo"
    },
    {
        id: 31,
        name: "Gitlab",
        img: "/design_tools/gitlab.svg",
        category: "Dev Tools",
        color: "orange"
    },
    {
        id: 32,
        name: "Notion",
        img: "/design_tools/notion.svg",
        category: "Dev Tools",
        color: "purple"
    },
    {
        id: 33,
        name: "Jira",
        img: "/design_tools/jira.svg",
        category: "Dev Tools",
        color: "blue"
    },
    {
        id: 34,
        name: "Postman",
        img: "/design_tools/postman.svg",
        category: "Dev Tools",
        color: "orange"
    },
    {
        id: 35,
        name: "Linear",
        img: "/design_tools/linear.svg",
        category: "Dev Tools",
        color: "pink"
    },
];