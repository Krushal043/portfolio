"use client"

import React, { Fragment, useEffect, useState } from 'react'
import { colorMap } from '../services/data';
import { FiZap } from 'react-icons/fi';
import { qualifications, icons, qualificationsInfos } from './data';
import Image from 'next/image';
import Ambient from '../Ambient';

export default function Qualifications() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hoveredService, setHoveredService] = useState<number | null>(null);
    const [activeQualification, setactiveQualification] = useState("Experiences");

    const getCategoryIcon = (category: string) => {
        return icons[category as keyof typeof icons] || <FiZap className="w-4 h-4" />;
    };

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const getColorClasses = (color: string) => {
        return colorMap[color as keyof typeof colorMap] || colorMap.purple;
    };

    return (
        <section id="qualifications" className="relative min-h-screen py-20">
            <div className="container relative z-10 mx-auto px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Enhanced Section Header */}
                    <div className={`text-center mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="relative inline-block mb-6">
                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full blur-xl animate-pulse"></div>
                            <div className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-full px-8 py-3">
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold text-lg">
                                    ✦ Qualifications & Experiences ✦
                                </span>
                            </div>
                        </div>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-tight">
                            <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent relative">
                                A Proven Full-Stack Engineer
                                <span className="absolute inset-0 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent blur-sm opacity-30"></span>
                            </span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
                            Seasoned full-stack developer and UI/UX designer delivering
                            <span className="text-purple-300 font-semibold"> production-grade, scalable systems </span>
                            with <span className="text-pink-300 font-semibold">pixel-perfect interfaces and robust performance</span>
                        </p>
                    </div>

                    {/* Category Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {qualifications.map((qualification, index) => (
                            <button
                                key={qualification}
                                onClick={() => setactiveQualification(qualification)}
                                className={`group relative overflow-hidden px-6 py-3 rounded-full text-sm font-semibold transition-all duration-500 hover:scale-105 ${activeQualification === qualification
                                    ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white shadow-2xl shadow-purple-500/25'
                                    : 'backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:border-white/20 hover:bg-white/5'
                                    }`}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {getCategoryIcon(qualification)}
                                    {qualification}
                                </span>

                                {activeQualification === qualification && (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full blur-sm"></div>
                                    </>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Experiences Enhanced Services Grid */}
                    <div className={`mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                        <div className={`grid grid-cols-1 ${activeQualification !== "Certificates" && "md:grid-cols-2 lg:grid-cols-2"} gap-8`}>
                            {qualificationsInfos.map((qualificationsInfo, index) => {
                                const colors = getColorClasses(qualificationsInfo.color);
                                return (
                                    <Fragment key={index}>
                                        {qualificationsInfo.category === activeQualification && <div
                                            className={`group relative backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${qualificationsInfo.popular ? 'ring-2 ring-pink-500/30 shadow-2xl shadow-pink-500/10' : ''
                                                }`}
                                            style={{ animationDelay: `${index * 100}ms` }}
                                            onMouseEnter={() => setHoveredService(qualificationsInfo.id)}
                                            onMouseLeave={() => setHoveredService(null)}
                                        >
                                            {/* Popular Badge */}
                                            {qualificationsInfo.popular && (
                                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                                                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
                                                        {getCategoryIcon(qualificationsInfo.category)}
                                                        {qualificationsInfo.tag}
                                                    </div>
                                                </div>
                                            )}

                                            <div className='block lg:flex items-center gap-8'>
                                                <div className="flex flex-col ">
                                                    {/* Service Icon */}
                                                    <div className={`mb-8 ${colors.icon} transition-all duration-500 group-hover:scale-110`}>
                                                        <div className={`w-18 h-18 p-1 ${colors.bg} backdrop-blur-sm border ${colors.border} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500`}>
                                                            {qualificationsInfo.image instanceof String || typeof qualificationsInfo.image === 'string' ? <Image
                                                                src={qualificationsInfo.image as string}
                                                                alt={qualificationsInfo.company || ''}
                                                                // fill
                                                                className="object-cover rounded-2xl "
                                                                width={100}
                                                                height={100}
                                                                priority
                                                            />
                                                                :
                                                                qualificationsInfo.image}

                                                        </div>
                                                    </div>

                                                    {/* Service Content */}
                                                    <div className="space-y-3">
                                                        {/* Title */}
                                                        <div className="space-y-2">
                                                            <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                                                                {qualificationsInfo.company}
                                                            </h3>
                                                        </div>

                                                        <div className="space-y-2">
                                                            <h5 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                                                                {qualificationsInfo.label}
                                                            </h5>
                                                        </div>

                                                        {/* Date */}
                                                        <p className="text-white/50 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                                                            {qualificationsInfo.date}
                                                        </p>

                                                        {/* Description */}
                                                        <p className={`text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300 ${activeQualification === "Certificates" && "hidden lg:block"}`}>
                                                            {qualificationsInfo.description}
                                                        </p>

                                                        {/* No individual action button */}
                                                    </div>
                                                </div>

                                                {activeQualification === "Certificates" &&
                                                    <Image
                                                        src={qualificationsInfo.preview || ''}
                                                        alt={qualificationsInfo.label}
                                                        width={500}
                                                        height={300}
                                                        className="object-cover rounded-3xl mt-4 mx-auto transition-opacity duration-500"
                                                        loading="lazy"
                                                    />
                                                }
                                            </div>

                                            {/* Hover Glow Effect */}
                                            <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient.replace('to-', 'via-')} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>

                                            {/* Animated Border */}
                                            <div className={`absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} style={{ padding: '1px', background: hoveredService === qualificationsInfo.id ? `linear-gradient(45deg, transparent, ${qualificationsInfo.color === 'purple' ? 'rgba(168,85,247,0.3)' : qualificationsInfo.color === 'pink' ? 'rgba(236,72,153,0.3)' : 'rgba(59,130,246,0.3)'}, transparent)` : 'none', backgroundSize: '200% 200%', animation: hoveredService === qualificationsInfo.id ? 'gradientShift 3s ease infinite' : 'none' }}></div>
                                        </div>}
                                    </Fragment>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Ambient />
        </section>
    )
}
