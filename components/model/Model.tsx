'use client';

import { useEffect, useState } from 'react';
import { FiCheck, FiStar, FiZap } from 'react-icons/fi';
import { Projects } from '../portfolio/data';
import Image from 'next/image';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Projects | null;
}

export default function Modal({ isOpen, onClose, project }: ModalProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 300);
        return () => clearTimeout(timer);
    }, []);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden'; // Prevent scroll
        }
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity"
            onClick={onClose}
        >

            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>

            <div className={`p-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} w-fit md:w-1/2 lg:w-1/3`} style={{ transitionDelay: '200ms' }}>
                <div className="grid grid-cols-1">
                    <div
                        key="static-service-1"
                        className={`group relative backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-700 hover:scale-105 hover:-translate-y-2 ring-2 ring-pink-500/30 shadow-2xl shadow-pink-500/10`}
                        style={{ animationDelay: '0ms' }}
                    // onMouseEnter={() => setHoveredService('static-service-1')}
                    // onMouseLeave={() => setHoveredService(null)}
                    >
                        {/* Popular Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
                                <FiStar className="w-3 h-3" />
                                MOST POPULAR
                            </div>
                        </div>

                        {/* Service Icon */}
                        <div className={`flex gap-4 items-center justify-center mb-8 text-pink-400 transition-all duration-500 group-hover:scale-110`}>
                            <div className={`p-2.5 w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500`}>
                                <Image src={project.logo} alt="logo" className='h-6 w-full' width={28} height={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                                {project?.name}
                            </h3>
                        </div>

                        {/* Service Content */}
                        <div className="space-y-6">
                            {/* Description */}
                            <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                                Get a stunning, fully responsive website with modern animations, SEO optimization, and lightning-fast performance.
                            </p>

                            {/* Features List */}
                            <div className="space-y-3 max-h-[370px] overflow-y-auto pr-5 py-2
                 scrollbar scrollbar-thin scrollbar-thumb-rounded-full
                 scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700
                 scrollbar-track-transparent
                 hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-600
                 transition-all duration-200">
                                <h4 className="text-white font-semibold flex items-center gap-2">
                                    <FiZap className="w-4 h-4 text-purple-400" />
                                    What's Included:
                                </h4>
                                <ul className="space-y-2">
                                    {project?.role.map((role, index) => (
                                        <li className="flex items-start gap-3 text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300" key={index}>
                                            <FiCheck className="w-4 h-4 mt-0.5 text-pink-400 flex-shrink-0" />
                                            <span>{role.info}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* End of Single Static Card */}
                </div>
            </div>
        </div>
    );
}