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
        value: "AdobeXD",
        img: "/design_tools/adobe.svg",
        category: "UI/UX",
        color: "purple",
        url: "https://www.adobe.com/products/xd.html"
    },
    {
        id: 2,
        name: "Figma",
        value: "Figma",
        img: "/design_tools/figma.svg",
        category: "UI/UX",
        color: "purple",
        url: "https://www.figma.com/"
    },
    {
        id: 3,
        name: "Canva",
        value: "Canva",
        img: "/design_tools/canva.svg",
        category: "UI/UX",
        color: "purple",
        url: "https://www.canva.com/"
    },

    // ── Frontend ───────────────────
    {
        id: 4,
        name: "Javascript",
        value: "Javascript",
        img: "/design_tools/javascript.svg",
        category: "Frontend",
        color: "yellow",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        id: 5,
        name: "ReactJS",
        value: "ReactJS",
        img: "/design_tools/react.svg",
        category: "Frontend",
        color: "cyan",
        url: "https://react.dev/"
    },
    {
        id: 6,
        name: "NextJS",
        value: "NextJS",
        img: "/design_tools/nextjs.svg",
        category: "Frontend",
        color: "emerald",
        url: "https://nextjs.org/"
    },
    {
        id: 7,
        name: "ElectronJS",
        value: "ElectronJS",
        img: "/design_tools/electronjs.svg",
        category: "Frontend",
        color: "blue",
        url: "https://www.electronjs.org/"
    },
    {
        id: 8,
        name: "HTML5",
        value: "HTML5",
        img: "/design_tools/html.svg",
        category: "Frontend",
        color: "orange",
        url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
    },
    {
        id: 9,
        name: "CSS3",
        value: "CSS3",
        img: "/design_tools/css.svg",
        category: "Frontend",
        color: "indigo",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
        id: 10,
        name: "JQuery",
        value: "JQuery",
        img: "/design_tools/jquery.svg",
        category: "Frontend",
        color: "pink",
        url: "https://jquery.com/"
    },
    {
        id: 11,
        name: "SCSS",
        value: "SCSS",
        img: "/design_tools/sass.svg",
        category: "Frontend",
        color: "rose",
        url: "https://sass-lang.com/"
    },
    {
        id: 12,
        name: "Bootstrap",
        value: "Bootstrap",
        img: "/design_tools/bootstrap.svg",
        category: "Frontend",
        color: "purple",
        url: "https://getbootstrap.com/"
    },
    {
        id: 13,
        name: "Redux",
        value: "Redux",
        img: "/design_tools/redux.svg",
        category: "Frontend",
        color: "indigo",
        url: "https://redux.js.org/"
    },
    {
        id: 14,
        name: "AMP",
        value: "AMP",
        img: "/design_tools/amp.svg",
        category: "Frontend",
        color: "amber",
        url: "https://amp.dev/"
    },
    {
        id: 15,
        name: "Tailwind CSS",
        value: "Tailwind CSS",
        img: "/design_tools/tailwind.svg",
        category: "Frontend",
        color: "cyan",
        url: "https://tailwindcss.com/"
    },
    {
        id: 16,
        name: "Material UI",
        value: "Material UI",
        img: "/design_tools/mui.svg",
        category: "Frontend",
        color: "blue",
        url: "https://mui.com/"
    },
    {
        id: 17,
        name: "Semantic UI",
        value: "Semantic UI",
        img: "/design_tools/semantic.svg",
        category: "Frontend",
        color: "teal",
        url: "https://semantic-ui.com/"
    },
    {
        id: 18,
        name: "GraphQL",
        value: "GraphQL",
        img: "/design_tools/graphql.svg",
        category: "Frontend",
        color: "pink",
        url: "https://graphql.org/"
    },
    {
        id: 19,
        name: "Apollo GraphQL",
        value: "Apollo GraphQL",
        img: "/design_tools/apollo.svg",
        category: "Frontend",
        color: "pink",
        url: "https://www.apollographql.com/"
    },
    {
        id: 20,
        name: "Framer motion",
        value: "Framer motion",
        img: "/design_tools/motion.svg",
        category: "Frontend",
        color: "emerald",
        url: "https://www.framer.com/motion/"
    },
    {
        id: 21,
        name: "Styled Components",
        value: "Styled Components",
        img: "/design_tools/styledcomponents.svg",
        category: "Frontend",
        color: "rose",
        url: "https://styled-components.com/"
    },
    {
        id: 22,
        name: "React Query",
        value: "React Query",
        img: "/design_tools/reactquery.svg",
        category: "Frontend",
        color: "teal",
        url: "https://tanstack.com/query/latest"
    },
    {
        id: 23,
        name: "GIT",
        value: "GIT",
        img: "/design_tools/git.svg",
        category: "Frontend",
        color: "orange",
        url: "https://git-scm.com/"
    },

    // ── Backend ────────────────────
    {
        id: 24,
        name: "NodeJS",
        value: "NodeJS",
        img: "/design_tools/nodejs.svg",
        category: "Backend",
        color: "emerald",
        url: "https://nodejs.org/"
    },
    {
        id: 25,
        name: "ExpressJS",
        value: "ExpressJS",
        img: "/design_tools/express.svg",
        category: "Backend",
        color: "blue",
        url: "https://expressjs.com/"
    },
    {
        id: 26,
        name: "MongoDB",
        value: "MongoDB",
        img: "/design_tools/mongodb.svg",
        category: "Backend",
        color: "green",
        url: "https://www.mongodb.com/"
    },
    {
        id: 27,
        name: "Firebase",
        value: "Firebase",
        img: "/design_tools/firebase.svg",
        category: "Backend",
        color: "amber",
        url: "https://firebase.google.com/"
    },
    {
        id: 28,
        name: "My SQL",
        value: "My SQL",
        img: "/design_tools/mysql.svg",
        category: "Backend",
        color: "cyan",
        url: "https://www.mysql.com/"
    },

    // ── Dev Tools ──────────────────
    {
        id: 29,
        name: "Visual Studio Code",
        value: "Visual Studio Code",
        img: "/design_tools/vscode.svg",
        category: "Dev Tools",
        color: "blue",
        url: "https://code.visualstudio.com/"
    },
    {
        id: 30,
        name: "Github",
        value: "Github",
        img: "/design_tools/github.svg",
        category: "Dev Tools",
        color: "indigo",
        url: "https://github.com/"
    },
    {
        id: 31,
        name: "Gitlab",
        value: "Gitlab",
        img: "/design_tools/gitlab.svg",
        category: "Dev Tools",
        color: "orange",
        url: "https://gitlab.com/"
    },
    {
        id: 32,
        name: "Notion",
        value: "Notion",
        img: "/design_tools/notion.svg",
        category: "Dev Tools",
        color: "purple",
        url: "https://www.notion.so/"
    },
    {
        id: 33,
        name: "Jira",
        value: "Jira",
        img: "/design_tools/jira.svg",
        category: "Dev Tools",
        color: "blue",
        url: "https://www.atlassian.com/software/jira"
    },
    {
        id: 34,
        name: "Postman",
        value: "Postman",
        img: "/design_tools/postman.svg",
        category: "Dev Tools",
        color: "orange",
        url: "https://www.postman.com/"
    },
    {
        id: 35,
        name: "Linear",
        value: "Linear",
        img: "/design_tools/linear.svg",
        category: "Dev Tools",
        color: "pink",
        url: "https://linear.app/"
    },
];
