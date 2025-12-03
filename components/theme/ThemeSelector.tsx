"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FiDroplet } from 'react-icons/fi';
import { gradients } from './data';

export default function ThemeSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState<string>('original');
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const saved = localStorage.getItem('theme-gradient');
        if (saved) {
            setSelectedTheme(saved);
            applyGradient(saved);
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen])

    const applyGradient = (themeKey: string) => {
        const theme = gradients.find(g => g.key === themeKey);
        if (theme) {
            document.body.style.background = theme.gradient;
            localStorage.setItem('theme-gradient', themeKey);
        }
    };

    const handleThemeChange = (themeKey: string) => {
        setSelectedTheme(themeKey);
        applyGradient(themeKey);
        setIsOpen(false);
    };

    // Get the current theme gradient
    const currentTheme = gradients.find(g => g.key === selectedTheme);
    const buttonBackground = currentTheme ? currentTheme.gradient : gradients[0].gradient;

    return (
        <div ref={panelRef} className="mr-3">
            {/* Theme Selector Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{ background: buttonBackground }}
                className="group backdrop-blur-md border-2 border-white/50 rounded-full p-4 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Select theme"
                title='Select Theme Color'
            >
                <FiDroplet className="w-4 h-4 text-white group-hover:animate-bounce" />
            </button>

            {/* Theme Options Panel */}
            {isOpen && (
                <div
                    className="absolute top-22 right-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl w-80 max-h-96 overflow-y-auto"
                >
                    <h3 className="text-white font-semibold mb-3 text-sm">Select Background</h3>
                    <div className="grid grid-cols-4 gap-3">
                        {gradients.map((theme) => (
                            <button
                                key={theme.key}
                                onClick={() => handleThemeChange(theme.key)}
                                className={`relative rounded-lg overflow-hidden aspect-square transition-all duration-300 hover:scale-105 ${selectedTheme === theme.key ? 'ring-2 ring-white ring-offset-2 ring-offset-transparent' : ''
                                    }`}
                                title={theme.name}
                            >
                                <div
                                    style={{ background: theme.gradient }}
                                    className="w-full h-full"
                                />
                                {selectedTheme === theme.key && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-1">
                                    <p className="text-white text-xs text-center font-medium">{theme.name}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};