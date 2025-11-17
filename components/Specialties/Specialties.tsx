"use client"

import React, { useEffect, useState } from 'react'
import { Skill, skills, specialties } from './data';
import Image from 'next/image';
import { colorMap } from '../services/data';

export default function Specialties() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeSkill, setActiveSkill] = useState<Skill>(skills[0]);
    const [hoveredSpecialtie, setHoveredSpecialtie] = useState<number | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const handleClick = (skill: Skill) => {
        setActiveSkill(skill);
    }

    const getColorClasses = (color: string) => {
        return colorMap[color as keyof typeof colorMap] || colorMap.purple;
    };

    return (
        <section id="specialties" className="relative min-h-screen py-20">
            <div className="container relative z-10 mx-auto px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Enhanced Section Header */}
                    <div className={`text-center mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="relative inline-block mb-6">
                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full blur-xl animate-pulse"></div>
                            <div className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-full px-8 py-3">
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold text-lg">
                                    ✦ Core Skills &  Specialties ✦
                                </span>
                            </div>
                        </div>

                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-tight">
                            <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent relative">
                                Developing Tools
                                <span className="absolute inset-0 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent blur-sm opacity-30"></span>
                            </span>
                        </h2>

                        <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
                            Full-stack engineer & UI/UX designer building
                            <span className="text-purple-300 font-semibold"> high-performance, accessible web apps </span>
                            with
                            <span className="text-pink-300 font-semibold"> pixel-perfect design, real-time systems, </span>
                            and
                            <span className="text-cyan-300 font-semibold"> AI-powered interactions</span>
                        </p>
                    </div>

                    {/* Category Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {skills.map((skill, index) => (
                            <button
                                key={index}
                                onClick={() => handleClick(skill)}
                                className={`group relative overflow-hidden px-6 py-3 rounded-full text-sm font-semibold transition-all duration-1000 hover:scale-105  ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${activeSkill?.name === skill?.name
                                    ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white shadow-2xl shadow-purple-500/25'
                                    : 'backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:border-white/20 hover:bg-white/5'
                                    }`}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {skill.icon}
                                    {skill.name}
                                </span>

                                {activeSkill?.name === skill.name && (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full blur-sm"></div>
                                    </>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className={`rounded-3xl p-8 transition-all duration-500 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className='flex flex-wrap gap-6 space-y-2'>
                            {specialties.map((specialtie, index) => {
                                const colors = getColorClasses(specialtie.color);
                                return (
                                    <>
                                        {(specialtie?.category === activeSkill?.name || activeSkill?.name === "All") &&
                                            <a
                                                key={index}
                                                href="#specialties"
                                                onMouseEnter={() => setHoveredSpecialtie(specialtie.id)}
                                                onMouseLeave={() => setHoveredSpecialtie(null)}
                                                rel="noopener noreferrer"
                                                className={`group relative backdrop-blur-xl border border-white/10 rounded-3xl p-4 hover:border-white/50 transition-all duration-700 hover:scale-105 hover:-translate-y-2 flex items-center gap-4`}
                                            >
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors bg-white`}>
                                                    <Image
                                                        src={specialtie.img}
                                                        alt={specialtie.name}
                                                        width={32}
                                                        height={32}
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <div>
                                                    <p className={` font-medium`}>{specialtie.name}</p>
                                                    {/* <p className="text-gray-400 text-sm">{link.description}</p> */}
                                                </div>
                                                {/* Hover Glow Effect */}
                                                <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient.replace('to-', 'via-')} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>

                                                {/* Animated Border */}
                                                <div className={`absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} style={{ padding: '1px', background: hoveredSpecialtie === specialtie.id ? `linear-gradient(45deg, transparent, ${specialtie.color === 'purple' ? 'rgba(168,85,247,0.3)' : specialtie.color === 'pink' ? 'rgba(236,72,153,0.3)' : 'rgba(59,130,246,0.3)'}, transparent)` : 'none', backgroundSize: '200% 200%', animation: hoveredSpecialtie === specialtie.id ? 'gradientShift 3s ease infinite' : 'none' }}></div>
                                            </a>
                                        }
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
