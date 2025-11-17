'use client'; // ← Add this at the top!

import React, { useEffect, useState } from 'react';
import { FiStar } from 'react-icons/fi';

export default function Ambient() {
    const [particles, setParticles] = useState<any[]>([]);
    const [sparkles, setSparkles] = useState<any[]>([]);

    useEffect(() => {
        // This runs ONLY in the browser → no mismatch
        const newParticles = [...Array(15)].map((_, i) => ({
            key: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * 5}s`,
            duration: `${3 + Math.random() * 4}s`,
            sizeClass:
                i % 3 === 0
                    ? 'w-1 h-1 bg-purple-400/30'
                    : i % 3 === 1
                        ? 'w-0.5 h-0.5 bg-pink-400/40'
                        : 'w-1.5 h-1.5 bg-blue-400/20',
        }));

        const newSparkles = [...Array(8)].map((_, i) => ({
            key: `sparkle-${i}`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * 3}s`,
            duration: `${2 + Math.random() * 2}s`,
        }));

        setParticles(newParticles);
        setSparkles(newSparkles);
    }, []);

    // While loading, render nothing (or a static placeholder)
    if (particles.length === 0) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <div
                    key={p.key}
                    className={`absolute rounded-full animate-pulse ${p.sizeClass}`}
                    style={{
                        left: p.left,
                        top: p.top,
                        animationDelay: p.delay,
                        animationDuration: p.duration,
                    }}
                />
            ))}
            {sparkles.map((s) => (
                <div
                    key={s.key}
                    className="absolute w-2 h-2 animate-ping"
                    style={{
                        left: s.left,
                        top: s.top,
                        animationDelay: s.delay,
                        animationDuration: s.duration,
                    }}
                >
                    <FiStar className="w-full h-full text-yellow-400/50" />
                </div>
            ))}
        </div>
    );
}