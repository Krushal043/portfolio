import React from 'react';
import { FiBook, FiBookOpen, FiBriefcase } from 'react-icons/fi';

export const qualifications = ["Experiences", "Educations", "Certificates"];

export const icons = {
    "Experiences": <FiBriefcase className="w-4 h-4" />,
    "Educations": <FiBook className="w-4 h-4" />,
    "Certificates": <FiBookOpen className="w-4 h-4" />,
};

export const qualificationsInfos: QualificationsInfo[] = [
    {
        id: 1,
        label: "Web Developer",
        company: "Baliosoft Solutions Pvt. Ltd.",
        date: "November 2024 - Present",
        description: "Building modern, responsive web applications using React, TypeScript, and Node.js. Collaborating with cross-functional teams to deliver high-quality digital solutions.",
        image: "/company/baliosoft_logo.svg",
        popular: true,
        tag: "Web Developer",
        color: "blue",
        category: "Experiences",
    },
    {
        id: 2,
        label: "Jr. Full Stack Developer",
        company: "IIH Global Solutions Pvt. Ltd.",
        date: "January 2024 - October 2024",
        description: "Developed full-stack features using MERN stack. Implemented RESTful APIs, optimized database queries, and improved application performance.",
        image: "/company/iih_global_logo.svg",
        popular: true,
        tag: "Jr. Full Stack Developer",
        color: "green",
        category: "Experiences",
    },
    {
        id: 3,
        label: "Jr. Frontend Developer",
        company: "Yudiz Solutions Ltd.",
        date: "June 2022 - December 2023",
        description: "Crafted pixel-perfect UIs with React and Tailwind CSS. Enhanced user experience through animations and responsive design principles.",
        image: "/company/yudiz_logo.png",
        popular: true,
        tag: "Jr. Frontend Developer",
        color: "purple",
        category: "Experiences",
    },
    {
        id: 4,
        label: "Web developer Internship",
        company: "Simform Solutions Pvt. Ltd.",
        date: "December 2021 - May 2022",
        description: "Crafted intuitive, visually appealing website designs with Figma and Adobe XD. Transformed UI mockups into responsive, pixel-perfect HTML/CSS codebases.",
        image: "/company/simform_logo.svg",
        popular: true,
        tag: "Internship",
        color: "orange",
        category: "Experiences",
    },
    {
        id: 5,
        label: "Parul University",
        description: "Master of Computer Application [MCA]",
        date: "July 2020 - October 2022",
        image: "/company/parul_university_logo.png",
        popular: true,
        color: "purple",
        tag: "Masters",
        category: "Educations",
    },
    {
        id: 6,
        label: "Sutex Bank College of Computer Applications & Science",
        description: "Bachelor of Computer Applications [BCA]",
        date: "May 2017 - June 2020",
        image: "/company/sutex.png",
        popular: true,
        color: "teal",
        tag: "Bachelors",
        category: "Educations",
    },
    {
        id: 7,
        label: "Foundations of User Experience (UX) Design",
        description:
            "A foundational UX design program introducing user research, journey mapping, personas, wireframing, and prototyping. The course teaches design thinking, usability testing, and essential collaboration workflows used by modern product teams. Learners gain practical experience with low-fidelity and mid-fidelity design processes, enabling them to understand how to create intuitive, user-centered digital experiences.",
        date: "2021",
        image: "/certificates/coursera.png",
        preview: "/certificates/c1.png",
        popular: true,
        color: "blue",
        tag: "Coursera",
        category: "Certificates",
    },
    {
        id: 8,
        label: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
        description:
            "A comprehensive deep dive into modern CSS, focusing on Flexbox, CSS Grid, responsive layout architecture, advanced animations, and scalable design patterns. The course also emphasizes Sass workflows, component-driven styling, and performance-focused approaches. Includes multiple real-world projects designed to build production-ready UI skills and elevate front-end development expertise.",
        date: "2020",
        image: "/certificates/udemy.png",
        preview: "/certificates/c2.png",
        popular: true,
        color: "red",
        tag: "Udemy",
        category: "Certificates",
    },
    {
        id: 9,
        label: "The Complete JavaScript Course 2021: From Zero to Expert!",
        description:
            "A complete, hands-on JavaScript learning experience covering core fundamentals, ES6+ features, asynchronous programming, data structures, and DOM manipulation. The course includes real-world projects, coding challenges, and advanced concepts like OOP, functional programming, and modern tooling. Designed to transform beginners into confident, job-ready JavaScript developers capable of building scalable, interactive applications.",
        date: "2020",
        image: "/certificates/udemy.png",
        preview: "/certificates/c3.png",
        popular: true,
        color: "orange",
        tag: "Udemy",
        category: "Certificates",
    },
    {
        id: 10,
        label: "Understanding Redux: A Beginner's Guide to State Management",
        description:
            "A beginner-friendly introduction to Redux, covering core principles such as actions, reducers, the store, middleware, and unidirectional data flow. The course provides hands-on examples, practical state architecture patterns, and real project scenarios. It helps developers understand how to manage complex application state reliably and integrate Redux effectively into modern front-end applications.",
        date: "2020",
        image: "/certificates/educative.png",
        preview: "/certificates/c4.png",
        popular: true,
        color: "green",
        tag: "Educative",
        category: "Certificates",
    }
];

interface QualificationsInfo {
    id: number;
    label: string;
    description: string;
    date?: string;
    image?: string | React.ReactNode;
    company?: string;
    popular?: boolean;
    color: string;
    tag?: string;
    category: string;
    preview?: string;
}