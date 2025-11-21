"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageLoader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const timer = setTimeout(() => setLoading(false), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`
        fixed inset-0 z-[9999] overflow-hidden 
        transition-all duration-700 
        ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
        >
            {/* LEFT PANEL */}
            <div
                className={`
          absolute left-0 top-0 h-full w-1/2 bg-black/80
          transition-transform duration-700
          ${loading ? "translate-x-0" : "-translate-x-full"}
        `}
            />

            {/* SPIN + SCALE LOGO */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-28 h-28 rounded-full overflow-hidden animate-spin-scale z-[10]">
                    <Image
                        src="/kushal.png"
                        alt="Kushal Sojitra"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* RIGHT PANEL */}
            <div
                className={`
          absolute right-0 top-0 h-full w-1/2 bg-black/80
          transition-transform duration-700
          ${loading ? "translate-x-0" : "translate-x-full"}
        `}
            />
        </div>
    );
}
