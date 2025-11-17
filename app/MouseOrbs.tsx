'use client';

import { useEffect } from 'react';

export default function MouseOrbs() {
    useEffect(() => {
        const orb1 = document.getElementById('orb1');
        const orb2 = document.getElementById('orb2');

        let mouseX = 0;
        let mouseY = 0;
        let orb1X = 0;
        let orb1Y = 0;
        let orb2X = 0;
        let orb2Y = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        document.addEventListener('mousemove', handleMouseMove);

        function animate() {
            const speed1 = 0.05;
            const speed2 = 0.03;

            orb1X += (mouseX - orb1X - 200) * speed1;
            orb1Y += (mouseY - orb1Y - 200) * speed1;
            orb2X += (mouseX - orb2X - 150) * speed2;
            orb2Y += (mouseY - orb2Y - 150) * speed2;

            if (orb1) orb1.style.transform = `translate(${orb1X}px, ${orb1Y}px)`;
            if (orb2) orb2.style.transform = `translate(${orb2X}px, ${orb2Y}px)`;

            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // This component renders nothing
    return null;
}