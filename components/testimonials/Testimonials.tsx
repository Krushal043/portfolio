"use client";

import { AnimatedTestimonials } from '@/ui/AnimatedTestimonials';
import React, { useEffect, useState } from 'react'
import { testimonials } from './data';
import Ambient from '../Ambient';

export default function Testimonials() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="testimonials" className="relative min-h-screen py-20">
            <div className="container relative z-10 mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Enhanced Section Header */}
                    <div className={`text-center mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="relative inline-block mb-6">
                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full blur-xl animate-pulse"></div>
                            <div className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-full px-8 py-3">
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold text-lg">
                                    ✦ Testimonials ✦
                                </span>
                            </div>
                        </div>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-tight">
                            <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent relative">
                                Voices of Trust
                                <span className="absolute inset-0 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent blur-sm opacity-30"></span>
                            </span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
                            Don’t just take my word for it — hear from
                            <span className="text-purple-300 font-semibold"> founders, CTOs, and teams </span>
                            who’ve shipped faster, scaled stronger, and
                            <span className="text-pink-300 font-semibold"> delighted users </span>
                            with my code and design.
                        </p>
                    </div>

                    <AnimatedTestimonials testimonials={testimonials} />
                </div>
            </div>
            <Ambient />
        </section>
    )
}
