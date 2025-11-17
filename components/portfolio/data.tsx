import { AiFillTrophy } from "react-icons/ai";
import { FiGlobe, FiGrid, FiShoppingCart, FiStar, FiTool, FiZap } from "react-icons/fi";
import { testimonials } from "../testimonials/data";
import { startDate } from "../about/data";
import useExperience from "@/hooks/useExperience";

export interface Projects {
    id: number;
    name: string;
    img: string;
    logo: string;
    url: string;
    year: string;
    client: string;
    category: string;
    featured?: boolean;
    role: { id: number; info: string }[];
    tech: { id: number; tech: string; img: string }[];
    panel: { id: number; name: string }[];
}
export const useStats = () => {
    const experience = useExperience(startDate, 1000 * 60);
    const projectCount = projects.length;
    const testimonialCount = testimonials.length;

    return [
        { label: "Projects", value: `${projectCount}+` },
        { label: "Clients", value: `${testimonialCount}+` },
        { label: "Awards", value: "4+" },
        { label: "Years", value: experience }
    ] as const;
};

export const icons = {
    "All": <FiZap className="w-4 h-4" />,
    "Featured": <FiStar className="w-4 h-4" />,
    "Web Apps": <FiGlobe className="w-4 h-4" />,
    "E-Commerce": <FiShoppingCart className="w-4 h-4" />,
    "Sports": <AiFillTrophy className="w-4 h-4" />,
    "Tools": <FiTool className="w-4 h-4" />,
    "Gaming": <FiGrid className="w-4 h-4" />
};
export const categories = [
    {
        name: "All",
        title: "All Projects",
        spotlightTitle: "Complete Project Portfolio",
        description: "Explore every project I've built, from concept to deployment, across all domains and technologies."
    },
    {
        name: "Featured",
        title: "Featured",
        spotlightTitle: "Featured Highlights",
        description: "Spotlight on my most impactful and award-winning projects."
    },
    {
        name: "Web Apps",
        title: "Web Applications",
        spotlightTitle: "Dynamic Web Solutions",
        description: "Full-stack web applications built with modern frameworks, delivering seamless user experiences and robust functionality."
    },
    {
        name: "E-Commerce",
        title: "E-Commerce Platforms",
        spotlightTitle: "Online Shopping Experiences",
        description: "Secure, scalable e-commerce solutions with payment integration, inventory management, and personalized shopping flows."
    },
    {
        name: "Sports",
        title: "Sports & Fitness",
        spotlightTitle: "Athletic Tech Innovations",
        description: "Applications for sports analytics, fan engagement, training tools, and live event experiences."
    },
    {
        name: "UI/UX",
        title: "UI/UX Design",
        spotlightTitle: "Design That Delights",
        description: "Beautiful, intuitive interfaces and user experiences crafted with attention to accessibility, usability, and visual storytelling."
    },
    {
        name: "Gaming",
        title: "Gaming Projects",
        spotlightTitle: "Interactive Entertainment",
        description: "Engaging games and gaming platforms with immersive graphics, real-time multiplayer, and creative gameplay mechanics."
    }
];

export const projects: Projects[] = [
    {
        id: 1,
        name: "Loopedin",
        img: "/projects/loopedin.png",
        logo: "/projects/loopedin_logo.png",
        url: "https://www.loopedin.io/",
        year: "2024",
        client: "Loopedin Inc.",
        category: "Web Apps",
        featured: true,
        role: [
            { id: 1001, info: "Team Collaboration: Worked collaboratively in a team of 5 developers, comprising UI designers, backend developers, QAs, and fellow front-end developers." },
            { id: 1002, info: "Development and Design: As Lead Developer, constructed and designed reusable components and pages, ensuring full responsiveness in alignment with Figma designs." },
            { id: 1003, info: "Project Leadership: As Lead Developer, handled both frontend and backend development for the Loopedin Website and Admin Panel, including designing UI components, building pages, and implementing API integrations and server-side logic for seamless functionality." },
            { id: 1004, info: "API Integration: Successfully integrated Rest APIs, facilitating seamless data exchange to enhance the platform's capabilities." },
            { id: 1005, info: "Project Management: Played a pivotal role in debugging, bug fixing, and deploying the project on various servers, including Development, Staging, and Production, ensuring optimal performance and accessibility." },
            { id: 1006, info: "Performance Optimization: Worked on enhancing Core Web Vitals and Page Speed Score, optimizing the website's performance." },
            { id: 1007, info: "Client Communication: Actively communicated with clients to understand their requirements and provided regular updates on project progress, ensuring alignment with expectations." },
        ],
        tech: [
            { id: 101, tech: "Javascript", img: "/design_tools/javascript.svg" },
            { id: 102, tech: "ElectronJS", img: "/design_tools/electronjs.svg" },
            { id: 103, tech: "NodeJS", img: "/design_tools/nodejs.svg" },
            { id: 104, tech: "JQuery", img: "/design_tools/jquery.svg" },
            { id: 105, tech: "HTML", img: "/design_tools/html.svg" },
            { id: 106, tech: "Tailwind CSS", img: "/design_tools/tailwind.svg" },
            { id: 107, tech: "Figma", img: "/design_tools/figma.svg" },
            { id: 108, tech: "Linear", img: "/design_tools/linear.svg" },
            { id: 109, tech: "Git", img: "/design_tools/git.svg" },
            { id: 110, tech: "Github", img: "/design_tools/github.svg" },
            { id: 111, tech: "MongoDB", img: "/design_tools/mongodb.svg" },
        ],
        panel: [
            { id: 111, name: "Website" },
            { id: 112, name: "Admin Panel" },
        ],
    },
    {
        id: 5,
        name: "CricTracker",
        img: "/projects/crictracker.png",
        logo: "/projects/crictracker_logo.png",
        url: "https://www.crictracker.com/",
        year: "2023",
        client: "CricTracker Media",
        category: "Sports",
        role: [
            { id: 5001, info: "Team Collaboration: Worked in a team of 8 developers, including UI designers, backend developers, QAs, and fellow front-end developers." },
            { id: 5002, info: "Development and Design: Lead frontend development, constructing and designing reusable components and pages, ensuring full responsiveness in alignment with Figma designs." },
            { id: 5003, info: "API Integration: Successfully integrated Rest APIs for CricTracker website, enabling smooth data handling and user experience." },
            { id: 5004, info: "Bug Fixing: Debugged existing code and fixed issues to enhance the performance and reliability of the website." },
            { id: 5005, info: "Performance Optimization: Enhanced Core Web Vitals and Page Speed Score, ensuring fast load times for users." },
            { id: 5006, info: "Client Communication: Engaged with clients to gather feedback, ensure timely delivery, and align project outcomes with their business goals." },
        ],
        tech: [
            { id: 501, tech: "Javascript", img: "/design_tools/javascript.svg" },
            { id: 502, tech: "Bootstrap", img: "/design_tools/bootstrap.svg" },
            { id: 503, tech: "ReactJS", img: "/design_tools/react.svg" },
            { id: 504, tech: "SCSS", img: "/design_tools/sass.svg" },
            { id: 505, tech: "NextJS", img: "/design_tools/nextjs.svg" },
            { id: 506, tech: "AMP", img: "/design_tools/amp.svg" },
            { id: 508, tech: "GraphQL", img: "/design_tools/graphql.svg" },
            { id: 509, tech: "Apollo GraphQL", img: "/design_tools/apollo.svg" },
            { id: 510, tech: "Git", img: "/design_tools/git.svg" },
            { id: 511, tech: "Github", img: "/design_tools/github.svg" },
            { id: 512, tech: "MongoDB", img: "/design_tools/mongodb.svg" },
        ],
        panel: [{ id: 511, name: "Website" }],
    },
    {
        id: 2,
        name: "EQL Global",
        img: "/projects/eqlglobal.png",
        logo: "/projects/eqlglobal_logo.png",
        url: "https://www.eqlglobal.com/",
        year: "2024",
        client: "EQL Global Ltd.",
        category: "Web Apps",
        featured: true,
        role: [
            { id: 2001, info: "Team Collaboration: Worked collaboratively in a team of 6 developers, comprising UI designers, backend developers, QAs, and fellow front-end developers." },
            { id: 2002, info: "Development and Design: Constructed and designed reusable components and pages, ensuring full responsiveness in alignment with Figma designs." },
            { id: 2003, info: "Handled both frontend and backend development for the EQL Global Website and Admin Panel, including designing UI components, building pages, and implementing API integrations and server-side logic for seamless functionality." },
            { id: 2004, info: "API Integration: Successfully integrated Rest APIs, facilitating seamless data exchange to enhance the platform's capabilities." },
            { id: 2005, info: "Project Management: Played a pivotal role in debugging, bug fixing, and deploying the project on various servers, including Development, Staging, and Production, ensuring optimal performance and accessibility." },
            { id: 2006, info: "Worked on enhancing Core Web Vitals and Page Speed Score, optimizing the website's performance." },
            { id: 2007, info: "Client Communication: Maintained clear and consistent communication with the client, providing regular progress reports and gathering feedback to ensure the project aligned with their vision and needs." },
        ],
        tech: [
            { id: 201, tech: "Javascript", img: "/design_tools/javascript.svg" },
            { id: 202, tech: "NextJS", img: "/design_tools/nextjs.svg" },
            { id: 203, tech: "NodeJS", img: "/design_tools/nodejs.svg" },
            { id: 204, tech: "HTML", img: "/design_tools/html.svg" },
            { id: 205, tech: "Tailwind CSS", img: "/design_tools/tailwind.svg" },
            { id: 206, tech: "Figma", img: "/design_tools/figma.svg" },
            { id: 207, tech: "Git", img: "/design_tools/git.svg" },
            { id: 208, tech: "Github", img: "/design_tools/github.svg" },
            { id: 209, tech: "MongoDB", img: "/design_tools/mongodb.svg" },
        ],
        panel: [
            { id: 211, name: "Website" },
            { id: 212, name: "Admin Panel" },
        ],
    },
    {
        id: 4,
        name: "999Tee",
        img: "/projects/999tee.png",
        logo: "/projects/999tee_logo.png",
        url: "https://999tee.com/",
        year: "2023",
        client: "999Tee Apparel",
        category: "E-Commerce",
        role: [
            { id: 4001, info: "Team Collaboration: Worked collaboratively in a team of 10 developers, comprising UI designers, backend developers, QAs, and fellow front-end developers." },
            { id: 4002, info: "Development and Design: Lead frontend development, constructing and designed reusable components and pages, ensuring full responsiveness in alignment with Figma designs." },
            { id: 4003, info: "Project Leadership: As Lead Frontend Developer, actively contributed to the 999Tee Website and Admin Panel, overseeing the design and development of components, pages, and handling API integration for both." },
            { id: 4004, info: "API Integration: Successfully integrated Rest APIs, facilitating seamless data exchange to enhance the platform's capabilities." },
            { id: 4005, info: "Performance Optimization: Worked on enhancing Core Web Vitals and Page Speed Score, optimizing the website's performance." },
            { id: 4006, info: "Client Communication: Acted as a liaison between the client and the development team, ensuring that client requirements were understood and incorporated into the project." },
        ],
        tech: [
            { id: 401, tech: "Javascript", img: "/design_tools/javascript.svg" },
            { id: 402, tech: "ReactJS", img: "/design_tools/react.svg" },
            { id: 403, tech: "Bootstrap", img: "/design_tools/bootstrap.svg" },
            { id: 404, tech: "GraphQL", img: "/design_tools/graphql.svg" },
            { id: 405, tech: "Apollo GraphQL", img: "/design_tools/apollo.svg" },
            { id: 406, tech: "Git", img: "/design_tools/git.svg" },
            { id: 407, tech: "Github", img: "/design_tools/github.svg" },
        ],
        panel: [{ id: 411, name: "Website" }],
    },
    {
        id: 3,
        name: "Yumyhub",
        img: "/projects/yumyhub.png",
        logo: "/projects/yumyhub_logo.png",
        url: "https://yumyhub.com/",
        year: "2023",
        client: "Yumyhub Inc.",
        category: "Web Apps",
        role: [
            { id: 3001, info: "Team Collaboration: Worked collaboratively in a team of 3 developers, comprising UI designers, backend developers, QAs, and fellow front-end developers." },
            { id: 3002, info: "Development and Design: As Lead Developer, constructed and designed reusable components and pages, ensuring full responsiveness in alignment with Figma designs." },
            { id: 3003, info: "Project Leadership: As Lead Developer, actively contributed to the Yumyhub Website and Admin Panel, focusing on designing components, pages, and handling API integration for both." },
            { id: 3004, info: "API Integration: Successfully integrated Rest APIs, facilitating seamless data exchange to enhance the platform's capabilities." },
            { id: 3005, info: "Performance Optimization: Worked on enhancing Core Web Vitals and Page Speed Score, optimizing the website's performance." },
            { id: 3006, info: "Client Communication: Worked directly with clients to gather requirements, provide updates, and ensure the project met their specifications and business goals." },
        ],
        tech: [
            { id: 301, tech: "Javascript", img: "/design_tools/javascript.svg" },
            { id: 302, tech: "ReactJS", img: "/design_tools/react.svg" },
            { id: 303, tech: "NodeJS", img: "/design_tools/nodejs.svg" },
            { id: 304, tech: "HTML", img: "/design_tools/html.svg" },
            { id: 305, tech: "Tailwind CSS", img: "/design_tools/tailwind.svg" },
            { id: 306, tech: "MUI", img: "/design_tools/mui.svg" },
            { id: 307, tech: "Figma", img: "/design_tools/figma.svg" },
            { id: 308, tech: "Git", img: "/design_tools/git.svg" },
            { id: 309, tech: "Github", img: "/design_tools/github.svg" },
            { id: 310, tech: "MySQL", img: "/design_tools/mysql.svg" },
        ],
        panel: [
            { id: 311, name: "Website" },
            { id: 312, name: "Admin Panel" },
        ],
    },
    {
        id: 6,
        name: "SportsBuzz",
        img: "/projects/sportsbuzz.png",
        logo: "/projects/sportsbuzz.png",
        url: "http://www.sportsbuzz.com/",
        year: "2022",
        client: "SportsBuzz Network",
        category: "Sports",
        role: [
            { id: 6001, info: "Team Collaboration: Part of an 8-member team, working closely with UI designers, backend developers, and fellow front-end developers." },
            { id: 6002, info: "Development and Design: Designed and constructed reusable components and pages, adhering to Figma designs and ensuring responsiveness." },
            { id: 6003, info: "Actively contributed to both the SportsBuzz Website and Admin Panel, taking charge of designing components, pages, and API integration." },
            { id: 6004, info: "Team Communication: Engaged in daily team calls and stand-up meetings on Slack to foster collaboration and project progress." },
            { id: 6005, info: "Junior Developer Management: Managed Junior Developer's Pull Requests on GitHub, ensuring a smooth integration process by merging them into various deployment repositories." },
            { id: 6006, info: "Performance Optimization: Built and maintained AMP (Accelerated Mobile Pages) to enhance the mobile user experience." },
            { id: 6007, info: "Worked on improving Core Web Vitals and Page Speed Score, optimizing the website's overall performance." },
            { id: 6008, info: "Project and Task Management: Utilized Jira for project and task sprint management, aiding in efficient project organization." },
            { id: 6009, info: "Assigned tasks to junior front-end developers according to sprint objectives, playing an active role in debugging, bug fixing, and deploying the project on different servers for accessibility." },
        ],
        tech: [
            { id: 601, tech: "Javascript", img: "/design_tools/javascript.svg" },
            { id: 602, tech: "Bootstrap", img: "/design_tools/bootstrap.svg" },
            { id: 603, tech: "ReactJS", img: "/design_tools/react.svg" },
            { id: 604, tech: "SCSS", img: "/design_tools/sass.svg" },
            { id: 605, tech: "NextJS", img: "/design_tools/nextjs.svg" },
            { id: 606, tech: "AMP", img: "/design_tools/amp.svg" },
            { id: 608, tech: "GraphQL", img: "/design_tools/graphql.svg" },
            { id: 609, tech: "Apollo GraphQL", img: "/design_tools/apollo.svg" },
            { id: 610, tech: "Git", img: "/design_tools/git.svg" },
            { id: 611, tech: "Gitlab", img: "/design_tools/gitlab.svg" },
            { id: 612, tech: "MongoDB", img: "/design_tools/mongodb.svg" },
        ],
        panel: [
            { id: 611, name: "Website" },
            { id: 612, name: "Admin Panel" },
        ],
    },
    {
        id: 7,
        name: "K L BAJORIA College",
        img: "/projects/klbajoriacollege.png",
        logo: "/projects/klbajoriacollege_logo.png",
        url: "https://www.klbajoriacollege.org/",
        year: "2022",
        client: "K L Bajoria College",
        category: "Web Apps",
        role: [
            { id: 7001, info: "Team Collaboration: Collaborated with a team of 8 members, including a UI designer, backend developers, and front-end developers." },
            { id: 7002, info: "Development and Design: Constructed and designed reusable components and pages, ensuring full responsiveness in alignment with Figma designs." },
            { id: 7003, info: "Handled both frontend and backend development for the K L Bajoria College Website, including designing UI components, building pages, and implementing API integrations and server-side logic for seamless functionality." },
            { id: 7004, info: "API Integration: Successfully integrated Rest APIs, facilitating seamless data exchange to enhance the platform's capabilities." },
            { id: 7005, info: "Project Management: Played a pivotal role in debugging, bug fixing, and deploying the project on various servers, including Development, Staging, and Production, ensuring optimal performance and accessibility." },
            { id: 7006, info: "Performance Optimization: Worked on enhancing Core Web Vitals and Page Speed Score, optimizing the website's performance." },
            { id: 7007, info: "Client Communication: Actively communicated with clients to understand their requirements and provided regular updates on project progress, ensuring alignment with expectations." },
        ],
        tech: [
            { id: 701, tech: "Javascript", img: "/design_tools/javascript.svg" },
            { id: 702, tech: "Bootstrap", img: "/design_tools/bootstrap.svg" },
            { id: 703, tech: "ReactJS", img: "/design_tools/react.svg" },
            { id: 704, tech: "SCSS", img: "/design_tools/sass.svg" },
            { id: 705, tech: "HTML", img: "/design_tools/html.svg" },
            { id: 706, tech: "Git", img: "/design_tools/git.svg" },
            { id: 707, tech: "Github", img: "/design_tools/github.svg" },
            { id: 708, tech: "CSS", img: "/design_tools/css.svg" },
            { id: 709, tech: ".NET", img: "/design_tools/dotnet.svg" },
        ],
        panel: [{ id: 711, name: "Website" }],
    },
    {
        id: 8,
        name: "Tracker Uplift",
        img: "/projects/tracker.png",
        logo: "/projects/tracker_logo.png",
        url: "https://www.figma.com/design/T5VC9lfdWlKDoOvu70eATa/Tracker-App?node-id=0-1&t=WgoB9UROOFtq4Jc8-1",
        year: "2022",
        client: "Uplift Analytics",
        category: "UI/UX",
        role: [
            { id: 8001, info: "Frontend Development: Developed and implemented responsive and user-friendly interfaces, ensuring a seamless user experience." },
            { id: 8002, info: "UI/UX Design: Crafted intuitive wireframes, prototypes, and high-fidelity designs in Figma to enhance user engagement and accessibility." },
            { id: 8003, info: "State Management: Implemented efficient state handling using React hooks and Context API for scalable data flow." },
            { id: 8004, info: "Performance Optimization: Optimized rendering and bundle size to achieve fast load times and smooth interactions." },
            { id: 8005, info: "Version Control: Managed code versioning, branching, and collaboration workflows using Git and GitHub." },
            { id: 8006, info: "Responsive Design: Ensured cross-device compatibility with Bootstrap and custom CSS media queries." },
            { id: 8007, info: "Backend Integration: Connected frontend with .NET APIs for real-time data synchronization and CRUD operations." }
        ],
        tech: [
            { id: 801, tech: "Javascript", img: "/design_tools/javascript.svg" },
            { id: 802, tech: "ReactJS", img: "/design_tools/react.svg" },
            { id: 803, tech: "HTML", img: "/design_tools/html.svg" },
            { id: 804, tech: "CSS", img: "/design_tools/css.svg" },
            { id: 805, tech: "Git", img: "/design_tools/git.svg" },
            { id: 806, tech: "Github", img: "/design_tools/github.svg" },
            { id: 807, tech: "Bootstrap", img: "/design_tools/bootstrap.svg" },
            { id: 808, tech: "Figma", img: "/design_tools/figma.svg" },
            { id: 809, tech: ".NET", img: "/design_tools/dotnet.svg" },
        ],
        panel: [{ id: 811, name: "Website" }],
    },
    {
        id: 9,
        name: "Link Replace Tool",
        img: "/projects/linkreplacetool.png",
        logo: "/baliosoft_logo.svg",
        url: "https://www.figma.com/design/LU75IPggghyg1a5JGjJK2C/Link-Replace-Portal?node-id=0-1&t=hrBVNfy6Uf4KRrva-1",
        year: "2021",
        client: "SEO Tools Co.",
        category: "UI/UX",
        role: [
            { id: 9001, info: "Frontend Development: Developed and implemented responsive and user-friendly interfaces, ensuring a seamless user experience." },
            { id: 9002, info: "Interactive Prototyping: Built clickable prototypes in Figma to validate user flows and gather stakeholder feedback." },
            { id: 9003, info: "Form Validation & Logic: Engineered robust client-side validation and link processing logic using JavaScript." },
            { id: 9004, info: "SEO Optimization: Applied best practices for performance and accessibility to improve search visibility." },
            { id: 9005, info: "Collaboration & CI/CD: Set up GitHub Actions for automated testing and deployment pipelines." },
            { id: 9006, info: "Styling Framework: Leveraged Bootstrap for rapid, consistent, and mobile-first styling across components." },
            { id: 9007, info: "API Consumption: Integrated .NET backend services for secure data handling and link replacement operations." }
        ],
        tech: [
            { id: 901, tech: "Javascript", img: "/design_tools/javascript.svg" },
            { id: 902, tech: "ReactJS", img: "/design_tools/react.svg" },
            { id: 903, tech: "HTML", img: "/design_tools/html.svg" },
            { id: 904, tech: "CSS", img: "/design_tools/css.svg" },
            { id: 905, tech: "Git", img: "/design_tools/git.svg" },
            { id: 906, tech: "Github", img: "/design_tools/github.svg" },
            { id: 907, tech: "Bootstrap", img: "/design_tools/bootstrap.svg" },
            { id: 908, tech: "Figma", img: "/design_tools/figma.svg" },
            { id: 909, tech: ".NET", img: "/design_tools/dotnet.svg" },
        ],
        panel: [{ id: 911, name: "Website" }],
    },
    {
        id: 10,
        name: "Pokerlion",
        img: "/projects/pokerlion.png",
        logo: "/projects/pokerlion_logo.png",
        url: "https://www.pokerlion.com/",
        year: "2021",
        client: "Pokerlion Gaming",
        category: "Gaming",
        role: [
            { id: 10001, info: "Frontend Development: Developed and implemented responsive and user-friendly interfaces, ensuring a seamless user experience." },
            { id: 10002, info: "Component Architecture: Designed reusable React components with Tailwind for rapid UI iteration." },
            { id: 10003, info: "Real-time Features: Implemented WebSocket connections for live game updates and multiplayer interactions." },
            { id: 10004, info: "Animation & UX: Added micro-interactions and transitions to elevate the gaming immersion." },
            { id: 10005, info: "Code Review & Collaboration: Conducted peer reviews and maintained clean Git history on GitHub." },
            { id: 10006, info: "Performance Tuning: Optimized asset loading and lazy-loading strategies for fast game startup." },
            { id: 10007, info: "Accessibility Compliance: Ensured WCAG standards for inclusive gameplay across devices." }
        ],
        tech: [
            { id: 1001, tech: "Javascript", img: "/design_tools/javascript.svg" },
            { id: 1002, tech: "ReactJS", img: "/design_tools/react.svg" },
            { id: 1003, tech: "HTML", img: "/design_tools/html.svg" },
            { id: 1004, tech: "CSS", img: "/design_tools/css.svg" },
            { id: 1005, tech: "Git", img: "/design_tools/git.svg" },
            { id: 1006, tech: "Github", img: "/design_tools/github.svg" },
            { id: 1007, tech: "Tailwind", img: "/design_tools/tailwind.svg" },
        ],
        panel: [{ id: 1011, name: "Admin Panel" }],
    },
    {
        id: 11,
        name: "Shiny NFT",
        img: "/projects/shinynft.png",
        logo: "/projects/shinynft_logo.png",
        url: "https://shinynft.com/",
        year: "2021",
        client: "Shiny NFT Studio",
        category: "Web Apps",
        role: [
            { id: 11001, info: "Frontend Development: Developed and implemented responsive and user-friendly interfaces, ensuring a seamless user experience." },
            { id: 11002, info: "NFT Marketplace UI: Built gallery views, minting flows, and wallet connection modals with React." },
            { id: 11003, info: "Tailwind Styling: Created a modern, dark-mode compatible design system using utility-first CSS." },
            { id: 11004, info: "Blockchain Integration: Connected to Web3 providers for wallet authentication and transaction handling." },
            { id: 11005, info: "Testing & QA: Wrote unit tests with Jest and end-to-end tests with Cypress for reliability." },
            { id: 11006, info: "Deployment Pipeline: Configured GitHub Pages and Vercel for continuous deployment." },
            { id: 11007, info: "Analytics Tracking: Integrated event tracking for user behavior and conversion optimization." }
        ],
        tech: [
            { id: 1101, tech: "Javascript", img: "/design_tools/javascript.svg" },
            { id: 1102, tech: "ReactJS", img: "/design_tools/react.svg" },
            { id: 1103, tech: "HTML", img: "/design_tools/html.svg" },
            { id: 1104, tech: "CSS", img: "/design_tools/css.svg" },
            { id: 1105, tech: "Git", img: "/design_tools/git.svg" },
            { id: 1106, tech: "Github", img: "/design_tools/github.svg" },
            { id: 1107, tech: "Tailwind", img: "/design_tools/tailwind.svg" },
        ],
        panel: [{ id: 1111, name: "Website" }],
    },
];