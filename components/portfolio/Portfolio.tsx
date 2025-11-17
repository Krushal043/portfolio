'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FiEye, FiArrowRight, FiStar, FiZap, } from 'react-icons/fi';
import { categories, icons, Projects, projects, useStats } from './data';
import Modal from '../model/Model';

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
    const [visibleProjects, setVisibleProjects] = useState(6);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Projects | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const stats = useStats();

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const filteredProjects = projects.filter(project => {
        if (activeCategory === "All") return true;
        if (activeCategory === "Featured") return project.featured;
        return project.category === activeCategory;
    });

    const featuredProjects = projects.filter(p => p.featured);

    // Get projects to display based on activeCategory and visibleProjects count
    const getProjectsToDisplay = () => {
        if (activeCategory === "Featured") {
            return featuredProjects.slice(0, visibleProjects);
        }
        return filteredProjects.slice(0, visibleProjects);
    };

    const projectsToDisplay = getProjectsToDisplay();
    const hasMoreProjects = projectsToDisplay.length < filteredProjects.length;

    const loadMoreProjects = () => {
        setVisibleProjects(prev => prev + 3);
    };

    // Reset visible projects when category changes
    useEffect(() => {
        setVisibleProjects(6);
    }, [activeCategory]);

    const getCategoryIcon = (category: string) => {
        return icons[category as keyof typeof icons] || <FiZap className="w-4 h-4" />;
    };

    const handleViewProject = (project: Projects) => {
        setSelectedProject(project);
        setIsOpen(true);
    }

    return (
        <section className="relative min-h-screen py-32" id="portfolio" ref={sectionRef}>
            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500/40 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-20 w-1 h-1 bg-pink-500/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-blue-500/30 rotate-45 animate-bounce" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container relative z-10 px-6 mx-auto">
                <div className="max-w-7xl mx-auto">

                    {/* Enhanced Header Section */}
                    <div className={`text-center mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="relative inline-block mb-6">
                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full blur-xl animate-pulse"></div>
                            <div className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-full px-8 py-3">
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold text-lg">
                                    ✦ Creative Portfolio ✦
                                </span>
                            </div>
                        </div>

                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight">
                            <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent relative">
                                Featured Works
                                <span className="absolute inset-0 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent blur-sm opacity-30"></span>
                            </span>
                        </h2>

                        <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
                            Discover my latest creative projects and visual stories that
                            <span className="text-purple-300 font-semibold"> push boundaries </span>
                            and <span className="text-pink-300 font-semibold">inspire audiences</span>
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

                    {/* Enhanced Category Filter */}
                    <div className={`flex flex-col items-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '200ms' }}>

                        {/* View Mode Toggle */}
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-white/60 text-sm font-medium">View:</span>
                            <div className="flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${viewMode === 'grid'
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                        : 'text-white/60 hover:text-white'
                                        }`}
                                >
                                    Grid
                                </button>
                                <button
                                    onClick={() => setViewMode('masonry')}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${viewMode === 'masonry'
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                        : 'text-white/60 hover:text-white'
                                        }`}
                                >
                                    Masonry
                                </button>
                            </div>
                        </div>

                        {/* Category Buttons */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveCategory(category.name)}
                                    className={`group relative overflow-hidden px-6 py-3 rounded-full text-sm font-semibold transition-all duration-500 hover:scale-105 ${activeCategory === category.name
                                        ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white shadow-2xl shadow-purple-500/25'
                                        : 'backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:border-white/20 hover:bg-white/5'
                                        }`}
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {getCategoryIcon(category.name)}
                                        {category.name}
                                        {category.name === "Featured" && (
                                            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                        )}
                                    </span>

                                    {activeCategory === category.name && (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full blur-sm"></div>
                                        </>
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="text-center mt-6">
                            <span className="text-white/40 text-sm">
                                Showing {projectsToDisplay.length} of {filteredProjects.length} projects
                            </span>
                        </div>
                    </div>

                    <div className={`mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
                        {categories.map((category, index) => (
                            <div key={index}>
                                {activeCategory === category.name && <div className="text-center mb-12">
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                        ✨ {category.spotlightTitle} ✨
                                    </h3>
                                    <p className="text-white/60 max-w-2xl mx-auto">
                                        {category.description}
                                    </p>
                                </div>}
                            </div>
                        ))}

                        <div className={`${viewMode === 'masonry'
                            ? 'columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8'
                            : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                            }`}>
                            {projectsToDisplay.map((project, index) => (
                                <div
                                    key={project.id}
                                    className={`group relative ${viewMode === 'masonry' ? 'break-inside-avoid' : 'aspect-[4/5]'
                                        } ${hoveredProject !== project.id && hoveredProject !== null && 'blur-sm'} rounded-3xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-700 hover:scale-105 hover:-translate-y-2`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    onMouseEnter={() => setHoveredProject(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >


                                    {/* Featured Badge */}
                                    {project.featured && <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                        <FiStar className="w-3 h-3" />
                                        FEATURED
                                    </div>}

                                    <Image
                                        src={project.img}
                                        alt={project.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    {/* Animated Border */}
                                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(45deg, transparent, rgba(168,85,247,0.5), transparent, rgba(236,72,153,0.5), transparent)', backgroundSize: '200% 200%', animation: hoveredProject === project.id ? 'gradientShift 3s ease infinite' : 'none' }}></div>

                                    {/* Enhanced Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="absolute bottom-0 left-0 right-0 p-8">
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-purple-400 font-semibold bg-purple-500/20 px-3 py-1 rounded-full">
                                                        {project.category}
                                                    </span>
                                                    <span className="text-xs text-white/60">{project.year}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-white leading-tight">
                                                    {project.name}
                                                </h3>
                                                <p className="text-white/80 text-sm leading-relaxed hover:text-purple-400 cursor-pointer">
                                                    {project.category === "UI/UX" ? <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a> : project.url}
                                                    {/* {project.url} */}
                                                </p>
                                                {project.client && (
                                                    <p className="text-white/60 text-xs">
                                                        Client: <span className="text-purple-400">{project.client}</span>
                                                    </p>
                                                )}

                                                {/* Tech Stack */}
                                                {project.tech && (
                                                    <div className="flex flex-wrap gap-2 mt-2">
                                                        {project.tech.slice(0, 15).map((tech, i) => (
                                                            <span
                                                                key={i}
                                                                className="text-xs bg-white/20 text-white/70 px-2 py-1 rounded backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-colors flex items-center gap-2 justify-center"
                                                            >
                                                                <Image src={tech.img} alt={tech.tech} className='h-6 w-6 md:h-4 md:w-4 lg:h-6 lg:w-6 ' width={30} height={30} />
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Action Button */}
                                                <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 group/btn" onClick={() => handleViewProject(project)}>
                                                    <FiEye className="w-4 h-4" />
                                                    View Project
                                                    <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Load More Button */}
                    {hasMoreProjects && (
                        <div className="text-center mt-16">
                            <button
                                onClick={loadMoreProjects}
                                className="group relative overflow-hidden bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600/40 hover:to-pink-600/40 hover:border-white/20 transition-all duration-500 hover:scale-105"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Load More Projects
                                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full"></div>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <Modal
                isOpen={isOpen}
                onClose={() => { setIsOpen(false); setSelectedProject(null); }}
                project={selectedProject}
            />

            {/* Custom CSS for animations */}
            <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </section>
    )
}
