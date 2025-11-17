import { useState, useEffect } from 'react';

/**
 * Custom hook to calculate years of experience since a start date
 * @param startDateString - ISO date string (e.g., '2022-08-11')
 * @param updateIntervalMs - How often to update (default: 6 hours)
 * @returns string - Formatted experience like "4+", "4.2+", "5+"
 */
const useExperience = (
    startDateString: string,
    updateIntervalMs: number = 1000 * 60 * 60 * 6 // 6 hours default
): string => {
    const [exp, setExp] = useState<string>('0.0+');

    useEffect(() => {
        const startDate = new Date(startDateString);

        const updateExperience = () => {
            const now = new Date();
            const diffMs = now.getTime() - startDate.getTime();
            const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25); // Account for leap years

            let display = '';
            if (diffYears >= 4) {
                const yearsAbove4 = diffYears - 4;
                if (yearsAbove4 < 1) {
                    display = '4+';
                } else {
                    display = `${Math.floor(diffYears)}+`;
                }
            } else {
                display = diffYears.toFixed(1) + '+';
            }

            setExp(display);
        };

        // Initial update
        updateExperience();

        // Set up interval
        const interval = setInterval(updateExperience, updateIntervalMs);

        // Cleanup
        return () => clearInterval(interval);
    }, [startDateString, updateIntervalMs]);

    return exp;
};

export default useExperience;