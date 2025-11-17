"use client";

import React from "react";
import useExperience from "@/hooks/useExperience";
import { projects } from "../portfolio/data";
import { testimonials } from "../testimonials/data";

export const startDate = "2022-06-16";
export const useStats = () => {
    const experience = useExperience(startDate, 1000 * 60);
    const projectCount = projects.length;
    const testimonialCount = testimonials.length;

    return [
        { label: "Experience", value: experience },
        { label: "Projects", value: `${projectCount}+` },
        { label: "Happy Clients", value: `${testimonialCount}+` },
        { label: "Creative Hours", value: "5k+" },
    ] as const;
};