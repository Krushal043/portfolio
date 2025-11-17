'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiZap, FiStar } from 'react-icons/fi';
import { startDate, useStats } from './data';
import useExperience from '@/hooks/useExperience';
import { projects } from '../portfolio/data';

export default function About() {
    const [isLoaded, setIsLoaded] = useState(false);
    const exp = useExperience(startDate, 1000 * 60);
    const projectCount = projects.length;
    const stats = useStats();

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="about" className="relative py-20">
            <div className="container relative z-10 mx-auto px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Enhanced Section Header */}
                    <div className={`text-center mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="relative inline-block mb-6">
                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full blur-xl animate-pulse"></div>
                            <div className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-full px-8 py-3">
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold text-lg">
                                    ✦ About Me ✦
                                </span>
                            </div>
                        </div>

                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight">
                            <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent relative">
                                Meet the Developer
                                <span className="absolute inset-0 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent blur-sm opacity-30"></span>
                            </span>
                        </h2>

                        <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
                            Passionate full-stack developer and UI/UX designer crafting
                            <span className="text-purple-300 font-semibold"> scalable web applications </span>
                            that <span className="text-pink-300 font-semibold">perform flawlessly and delight users</span>
                        </p>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-16">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center group">
                                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                                        {stat.value}
                                    </div>
                                    <div className="text-white/60 text-sm font-medium tracking-wide uppercase">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 gap-8">

                        {/* Left Side - Profile Card */}
                        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
                            <div className="group relative backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-700">
                                {/* Glow Effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-lg"></div>

                                <div className="relative flex gap-20 items-center justify-center flex-col">
                                    {/* Profile Image */}
                                    <div className="relative">
                                        <div className="aspect-square w-64 mx-auto rounded-xl overflow-hidden backdrop-blur-xl border border-white/10 group-hover:scale-105 transition-all duration-500">
                                            <Image
                                                src="/kushal_1.jpg"
                                                alt="Kushal Sojitra"
                                                fill
                                                className="object-cover"
                                                sizes="128px"
                                                priority
                                            />
                                        </div>

                                        {/* Status Badge */}
                                        <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-[#0A0A0A] animate-pulse"></div>
                                    </div>

                                    <div className='flex flex-col justify-center ml-6'>
                                        {/* Profile Info */}
                                        <div className="text-center space-y-3">
                                            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                Kushal Sojitra
                                            </h3>
                                            <p className="text-white/70 text-xl">Full-Stack Web Developer & UI/UX Designer</p>
                                            <p className="text-white/50 text-md leading-relaxed">
                                                Based in India, crafting scalable, responsive, and user-centric web applications with modern design and clean code.
                                            </p>
                                        </div>

                                        {/* Quick Stats */}
                                        <div className="grid grid-cols-2 gap-3 mt-6">
                                            <div className="text-center p-3 backdrop-blur-xl border border-white/10 rounded-lg">
                                                <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{exp}</div>
                                                <div className="text-xs text-white/60">Years</div>
                                            </div>
                                            <div className="text-center p-3 backdrop-blur-xl border border-white/10 rounded-lg">
                                                <div className="text-lg font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">{projectCount}+</div>
                                                <div className="text-xs text-white/60">Projects</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
