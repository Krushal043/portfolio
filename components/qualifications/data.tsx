import React from 'react';
import { FiBook, FiBriefcase } from 'react-icons/fi';

export const qualifications = ["Experiences", "Educations"];

export const icons = {
    "Experiences": <FiBriefcase className="w-4 h-4" />,
    "Educations": <FiBook className="w-4 h-4" />,
};

export const qualificationsInfos: QualificationsInfo[] = [
    {
        id: 1,
        label: "Web Developer",
        company: "Baliosoft Solutions Pvt. Ltd.",
        date: "November 2024 - Present",
        description: "Building modern, responsive web applications using React, TypeScript, and Node.js. Collaborating with cross-functional teams to deliver high-quality digital solutions.",
        image: "/baliosoft_logo.svg",
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
        image: "/iih_global_logo.svg",
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
        image: "/yudiz_logo.png",
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
        image: "simform_logo.svg",
        popular: true,
        tag: "Internship",
        color: "orange",
        category: "Experiences",
    },
    {
        id: 1,
        label: "Parul University",
        description: "Master of Computer Application [MCA]",
        date: "July 2020 - October 2022",
        image: "/parul_university_logo.png",
        popular: true,
        color: "purple",
        tag: "Masters",
        category: "Educations",
    },
    {
        id: 2,
        label: "Sutex Bank College of Computer Applications & Science",
        description: "Bachelor of Computer Applications [BCA]",
        date: "May 2017 - June 2020",
        image: "/sutex.png",
        popular: true,
        color: "teal",
        tag: "Bachelors",
        category: "Educations",
    },
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
}