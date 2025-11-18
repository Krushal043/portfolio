"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation, useMotionValue, MotionValue, Transition } from 'motion/react';
import { FiArrowUp } from 'react-icons/fi';
interface CircularTextProps {
    text: string;
    spinDuration?: number;
    onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers';
    className?: string;
}

const getRotationTransition = (duration: number, from: number, loop: boolean = true) => ({
    from,
    to: from + 360,
    ease: 'linear' as const,
    duration,
    type: 'tween' as const,
    repeat: loop ? Infinity : 0
});

const getTransition = (duration: number, from: number) => ({
    rotate: getRotationTransition(duration, from),
    scale: {
        type: 'spring' as const,
        damping: 20,
        stiffness: 500
    }
});

const CircularText: React.FC<CircularTextProps> = ({
    text,
    spinDuration = 20,
    onHover = 'speedUp',
    className = ''
}) => {
    const letters = Array.from(text);
    const controls = useAnimation();
    const rotation: MotionValue<number> = useMotionValue(0);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const start = rotation.get();
        controls.start({
            rotate: start + 360,
            scale: 1,
            transition: getTransition(spinDuration, start)
        });
    }, [spinDuration, text, onHover, controls]);

    const handleHoverStart = () => {
        const start = rotation.get();

        if (!onHover) return;

        let transitionConfig: ReturnType<typeof getTransition> | Transition;
        let scaleVal = 1;

        switch (onHover) {
            case 'slowDown':
                transitionConfig = getTransition(spinDuration * 2, start);
                break;
            case 'speedUp':
                transitionConfig = getTransition(spinDuration / 4, start);
                break;
            case 'pause':
                transitionConfig = {
                    rotate: { type: 'spring', damping: 20, stiffness: 300 },
                    scale: { type: 'spring', damping: 20, stiffness: 300 }
                };
                break;
            case 'goBonkers':
                transitionConfig = getTransition(spinDuration / 2, start);
                scaleVal = 0.8;
                break;
            default:
                transitionConfig = getTransition(spinDuration, start);
        }

        controls.start({
            rotate: start + 360,
            scale: scaleVal,
            transition: transitionConfig
        });
    };

    const handleHoverEnd = () => {
        const start = rotation.get();
        controls.start({
            rotate: start + 360,
            scale: 1,
            transition: getTransition(spinDuration, start)
        });
    };

    return (
        <motion.button
            className={`fixed bottom-5 right-5 rounded-full w-[150px] h-[150px] font-black text-white text-center cursor-pointer origin-center z-50 ${className} scroll-smooth`}
            onClick={scrollToTop}
            style={{ rotate: rotation }}
            initial={{ rotate: 0 }}
            animate={controls}
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
        >
            {letters.map((letter, i) => {
                const rotationDeg = (360 / letters.length) * i;
                const factor = Math.PI / letters.length;
                const x = factor * i;
                const y = factor * i;
                const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

                return (
                    <span
                        key={i}
                        className="absolute inline-block inset-0 text-sm transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
                        style={{ transform, WebkitTransform: transform }}
                    >
                        {letter}
                    </span>
                );
            })}
            <FiArrowUp className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8' />
        </motion.button>
    );
};

export default CircularText;
